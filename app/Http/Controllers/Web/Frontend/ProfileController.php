<?php 
namespace VanguardLTE\Http\Controllers\Web\Frontend
{
    class ProfileController extends \VanguardLTE\Http\Controllers\Controller
    {
        protected $theUser = null;
        private $users = null;
        public function __construct(\VanguardLTE\Repositories\User\UserRepository $users)
        {
            $this->middleware('auth');
            $this->middleware('session.database', [
                'only' => [
                    'sessions', 
                    'invalidateSession'
                ]
            ]);
            $this->users = $users;
            $this->middleware(function($request, $next)
            {
                $this->theUser = \Auth::user();
                return $next($request);
            });
        }
        public function index(\VanguardLTE\Repositories\Role\RoleRepository $rolesRepo)
        {
            $user = $this->theUser;
            $edit = true;
            $roles = $rolesRepo->lists();
            $statuses = \VanguardLTE\Support\Enum\UserStatus::lists();
            return view('frontend.user.profile', compact('user', 'edit', 'roles', 'statuses'));
        }
        public function updateDetails(\VanguardLTE\Http\Requests\User\UpdateProfileDetailsRequest $request)
        {
            $this->users->update($this->theUser->id, $request->except('role_id', 'status'));
            event(new \VanguardLTE\Events\User\UpdatedProfileDetails());
            return response()->json(['success' => trans('app.profile_updated_successfully')], 200);
            return redirect()->back()->withSuccess(trans('app.profile_updated_successfully'));
        }
        public function updatePassword(\VanguardLTE\Http\Requests\User\UpdateProfilePasswordRequest $request)
        {
            $old_password = $request->old_password;
            if( !\Illuminate\Support\Facades\Hash::check($old_password, \Auth::user()->password) ) 
            {
                return response()->json(['error' => trans('passwords.current_password')], 422);
            }
            $this->users->update($this->theUser->id, $request->only('password', 'password_confirmation'));
            event(new \VanguardLTE\Events\User\UpdatedProfileDetails());
            return response()->json(['success' => trans('app.profile_updated_successfully')], 200);
        }
        public function updateAvatar(\Illuminate\Http\Request $request, \VanguardLTE\Services\Upload\UserAvatarManager $avatarManager)
        {
            $this->validate($request, ['avatar' => 'image']);
            $name = $avatarManager->uploadAndCropAvatar($this->theUser, $request->file('avatar'), $request->get('points'));
            if( $name ) 
            {
                return $this->handleAvatarUpdate($name);
            }
            return redirect()->route('frontend.profile')->withErrors(trans('app.avatar_not_changed'));
        }
        private function handleAvatarUpdate($avatar)
        {
            $this->users->update($this->theUser->id, ['avatar' => $avatar]);
            event(new \VanguardLTE\Events\User\ChangedAvatar());
            return redirect()->route('frontend.profile')->withSuccess(trans('app.avatar_changed'));
        }
        public function updateAvatarExternal(\Illuminate\Http\Request $request, \VanguardLTE\Services\Upload\UserAvatarManager $avatarManager)
        {
            $avatarManager->deleteAvatarIfUploaded($this->theUser);
            return $this->handleAvatarUpdate($request->get('url'));
        }
        public function updateLoginDetails(\VanguardLTE\Http\Requests\User\UpdateProfileLoginDetailsRequest $request)
        {
            $data = $request->except('role', 'status');
            if( trim($data['password']) == '' ) 
            {
                unset($data['password']);
                unset($data['password_confirmation']);
            }
            $this->users->update($this->theUser->id, $data);
            return redirect()->route('frontend.profile')->withSuccess(trans('app.login_updated'));
        }
        public function exchange(\Illuminate\Http\Request $request)
        {
            $user = \Auth::user();
            $shop = \VanguardLTE\Shop::find($user->shop_id);
            $exchange_rate = $user->point()->exchange_rate(true);
            $add = $request->sumpoints * $exchange_rate;
            $wager = $add * $user->point()->exchange_wager();
            if( !$shop ) 
            {
                return response()->json(['error' => trans('app.wrong_shop')], 422);
            }
            if( !$request->sumpoints ) 
            {
                return response()->json(['error' => trans('app.zero_points')], 422);
            }
            if( $user->points < $request->sumpoints ) 
            {
                return response()->json(['error' => trans('app.available_points', ['points' => $user->points])], 422);
            }
            if( $shop->balance < $add ) 
            {
                return response()->json(['error' => 'Not Money "' . $shop->name . '"'], 422);
            }
            $open_shift = \VanguardLTE\OpenShift::where([
                'shop_id' => \Auth::user()->shop_id, 
                'end_date' => null
            ])->first();
            if( !$open_shift ) 
            {
                return response()->json(['error' => trans('app.shift_not_opened')], 422);
            }
            $user->decrement('points', $request->sumpoints);
            $user->increment('balance', $add);
            $user->increment('wager', $wager);
            $user->increment('bonus', $wager);
            $shop->decrement('balance', $add);
            $open_shift->increment('balance_out', $add);
            \VanguardLTE\Transaction::create([
                'user_id' => $user->id, 
                'summ' => abs($add), 
                'system' => 'Exchange points', 
                'shop_id' => $user->shop_id
            ]);
            return response()->json(['success' => true], 200);
        }
        public function activity(\VanguardLTE\Repositories\Activity\ActivityRepository $activitiesRepo, \Illuminate\Http\Request $request)
        {
            $user = $this->theUser;
            $activities = $activitiesRepo->paginateActivitiesForUser($user->id, $perPage = 20, $request->get('search'));
            return view('frontend.activity.index', compact('activities', 'user'));
        }
        public function sessions(\VanguardLTE\Repositories\Session\SessionRepository $sessionRepository)
        {
            $profile = true;
            $user = $this->theUser;
            $sessions = $sessionRepository->getUserSessions($user->id);
            return view('frontend.user.sessions', compact('sessions', 'user', 'profile'));
        }
        public function invalidateSession($session, \VanguardLTE\Repositories\Session\SessionRepository $sessionRepository)
        {
            $sessionRepository->invalidateSession($session->id);
            return redirect()->route('frontend.profile.sessions')->withSuccess(trans('app.session_invalidated'));
        }
        public function balance(\Illuminate\Http\Request $request)
        {
            $history = \VanguardLTE\Payment::where('user_id', \Auth::user()->id)->orderBy('created_at', 'DESC')->paginate(25);
            return view('frontend.user.balance', compact('history'));
        }
        public function balanceAdd(\Illuminate\Http\Request $request)
        {
            $amount = str_replace(',', '.', trim($request->summ));
            $amount = number_format(floatval($amount), 2, '.', '');
            if( $request->system == 'piastrix' ) 
            {
                $payment = \VanguardLTE\Payment::create([
                    'user_id' => \Auth::user()->id, 
                    'summ' => $amount, 
                    'system' => $request->system
                ]);
                $currency = 840;
                $shop_id = Config::get('payments.piastrix.id');
                $shop_order_id = $payment->id;
                $description = base64_encode('Пополнение счета для клиента #' . \Auth::user()->id);
                $arHash = [
                    $amount, 
                    $currency, 
                    $shop_id, 
                    $shop_order_id
                ];
                $sign = hash('sha256', implode(':', $arHash));
                $data = [
                    'method' => 'POST', 
                    'action' => 'https://pay.piastrix.com/ru/pay', 
                    'charset' => 'UTF-8', 
                    'fields' => [
                        'shop_id' => $shop_id, 
                        'shop_order_id' => $shop_order_id, 
                        'amount' => $amount, 
                        'currency' => $currency, 
                        'description' => $description, 
                        'sign' => $sign
                    ]
                ];
                return view('frontend.user.payment_form', compact('data'));
            }
            if( $request->system == 'coinpayment' ) 
            {
                if( $amount < config('coinpayment.add_min') ) 
                {
                    return response()->json(['error' => trans('app.min_amount', ['amount' => config('coinpayment.add_min')])], 422);
                }
                if( config('coinpayment.add_max') < $amount ) 
                {
                    return response()->json(['error' => trans('app.max_amount', ['amount' => config('coinpayment.add_max')])], 422);
                }
                $payment = \VanguardLTE\Transaction::create([
                    'user_id' => \Auth::user()->id, 
                    'summ' => abs($amount), 
                    'system' => $request->system, 
                    'shop_id' => \Auth::user()->shop_id, 
                    'status' => 0
                ]);
                $trx['amountTotal'] = $amount;
                $trx['note'] = 'Adding money to a balance';
                $trx['items'][0] = [
                    'descriptionItem' => 'Balance', 
                    'priceItem' => $amount, 
                    'qtyItem' => 1, 
                    'subtotalItem' => $amount
                ];
                $trx['payload'] = [
                    'user_id' => \Auth::user()->id, 
                    'payment_id' => $payment->id
                ];
                $link_transaction = CoinPayment::url_payload($trx);
                return response()->json([
                    'success' => 'success', 
                    'link' => $link_transaction
                ], 200);
            }
        }
        public function pincode(\Illuminate\Http\Request $request)
        {
            $user = \VanguardLTE\User::find(\Auth::id());
            if( !$request->pincode ) 
            {
                return response()->json([
                    'fail' => 'fail', 
                    'error' => 'Please enter pincode'
                ], 200);
            }
            $pincode = \VanguardLTE\Pincode::where([
                'code' => $request->pincode, 
                'shop_id' => \Auth::user()->shop_id
            ])->first();
            if( !$pincode ) 
            {
                return response()->json([
                    'fail' => 'fail', 
                    'error' => 'Pincode not exist'
                ], 200);
            }
            if( !$pincode->status ) 
            {
                return response()->json([
                    'fail' => 'fail', 
                    'error' => 'Wrong Pincode'
                ], 200);
            }
            $transaction = new \VanguardLTE\Transaction();
            $transaction->user_id = \Auth::id();
            $transaction->system = 'PIN';
            $transaction->value = $pincode->code;
            $transaction->type = 'add';
            $transaction->summ = abs($pincode->nominal);
            $transaction->shop_id = $user->shop_id;
            $transaction->save();
            $user->update([
                'balance' => $user->balance + $pincode->nominal, 
                'count_balance' => $user->count_balance + $pincode->nominal, 
                'count_return' => $user->count_return + \VanguardLTE\Lib\Functions::count_return($pincode->nominal, $user->shop_id), 
                'total_in' => $user->total_in + $pincode->nominal
            ]);
            $pincode->delete();
            return response()->json([
                'success' => 'success', 
                'text' => 'Pincode activated'
            ], 200);
        }
        public function returns(\Illuminate\Http\Request $request)
        {
            $user = \Auth::user();
            $shop = \VanguardLTE\Shop::find($user->shop_id);
            $sum = floatval($user->count_return);
            $return = \VanguardLTE\Returns::where('shop_id', $user->shop_id)->first();
            if( $sum ) 
            {
                if( $return && $return->min_balance < $user->balance ) 
                {
                    return response()->json([
                        'fail' => 'fail', 
                        'value' => 0, 
                        'balance' => $user->balance, 
                        'text' => 'Min Balance "' . $return->min_balance . '"'
                    ], 200);
                }
                if( $shop->balance < $sum ) 
                {
                    return response()->json([
                        'fail' => 'fail', 
                        'value' => 0, 
                        'balance' => $user->balance, 
                        'text' => 'Not Money "' . $shop->name . '"'
                    ], 200);
                }
                $open_shift = \VanguardLTE\OpenShift::where([
                    'shop_id' => \Auth::user()->shop_id, 
                    'end_date' => null
                ])->first();
                if( !$open_shift ) 
                {
                    return response()->json([
                        'fail' => 'fail', 
                        'value' => 0, 
                        'balance' => $user->balance, 
                        'text' => trans('app.shift_not_opened')
                    ], 200);
                }
                $user->increment('balance', $sum);
                $user->increment('count_bonus', $sum);
                $user->update(['count_return' => 0]);
                \VanguardLTE\Transaction::create([
                    'user_id' => $user->id, 
                    'summ' => abs($sum), 
                    'system' => 'Refund', 
                    'shop_id' => $user->shop_id
                ]);
                $open_shift->increment('balance_out', $sum);
                return response()->json([
                    'success' => 'success', 
                    'value' => number_format($sum, 2, '.', ''), 
                    'balance' => number_format($user->balance, 2, '.', ''), 
                    'count_return' => number_format($user->count_return, 2, '.', ''), 
                    'currency' => $shop->currency
                ], 200);
            }
            return response()->json([
                'success' => 'success', 
                'value' => 0, 
                'balance' => number_format($user->balance, 2, '.', ''), 
                'currency' => $shop->currency
            ], 200);
        }
        public function jackpots(\Illuminate\Http\Request $request)
        {
            $jackpots = \VanguardLTE\JPG::select([
                'id', 
                'balance', 
                'shop_id'
            ])->where('shop_id', auth()->user()->shop_id)->get();
            return response()->json($jackpots->toArray());
        }
        public function setlang($lang)
        {
            auth()->user()->update(['language' => $lang]);
            return redirect()->back();
        }
        public function success(\Illuminate\Http\Request $request)
        {
            return redirect()->route('frontend.profile.balance')->withSuccess(trans('app.payment_success'));
        }
        public function fail(\Illuminate\Http\Request $request)
        {
            return redirect()->route('frontend.profile.balance')->withSuccess(trans('app.payment_fail'));
        }
    }

}
