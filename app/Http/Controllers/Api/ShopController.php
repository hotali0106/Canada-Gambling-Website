<?php 
namespace VanguardLTE\Http\Controllers\Api
{
    class ShopController extends ApiController
    {
        public function __construct()
        {
            $this->middleware('auth');
        }
        public function shop(\Illuminate\Http\Request $request)
        {
            if( !$request->shop_id ) 
            {
                return $this->errorWrongArgs('Empty shop id');
            }
            $shops = auth()->user()->shops(true)->toArray();
            if( !(count($shops) && in_array($request->shop_id, $shops)) ) 
            {
                return $this->errorWrongArgs('Wrong shop id');
            }
            $shops = \VanguardLTE\Shop::orderBy('id', 'ASC');
            if( $request->id != '' ) 
            {
                $shops = $shops->where('id', $request->id);
            }
            else if( $request->shop_id != '' ) 
            {
                $shops = $shops->where('id', $request->shop_id);
            }
            $shops = $shops->paginate(100000);
            return $this->respondWithPagination($shops, new \VanguardLTE\Transformers\ShopTransformer());
        }
        public function currency(\Illuminate\Http\Request $request)
        {
            $shop = \VanguardLTE\Shop::find($request->shop_id);
            if( !$shop ) 
            {
                return $this->errorWrongArgs(trans('app.wrong_shop'));
            }
            return $this->respondWithArray(['currency' => $shop->currency]);
        }
        public function balance(\Illuminate\Http\Request $request, $type = 'add')
        {
            if( !in_array($type, [
                'add', 
                'out'
            ]) ) 
            {
                $type = 'add';
            }
            $user = \VanguardLTE\User::find(auth()->user()->id);
            if( !$request->shop_id ) 
            {
                return $this->errorWrongArgs(trans('app.wrong_shop'));
            }
            $shop = \VanguardLTE\Shop::find($request->shop_id);
            if( !$shop ) 
            {
                return $this->errorWrongArgs(trans('app.wrong_shop'));
            }
            if( !$user ) 
            {
                return $this->errorWrongArgs(trans('app.wrong_user'));
            }
            if( !auth()->user()->hasRole('distributor') ) 
            {
                return $this->errorWrongArgs('Wrong user. Only for distributors');
            }
            if( !$request->summ ) 
            {
                return $this->errorWrongArgs(trans('app.wrong_sum'));
            }
            if( $type == 'add' && $user->balance < $request->summ ) 
            {
                return $this->errorWrongArgs('Not enough money in the user balance "' . $user->username . '". Only ' . $user->balance);
            }
            if( $type == 'out' && $shop->balance < $request->summ ) 
            {
                return $this->errorWrongArgs('Not enough money in the shop "' . $shop->name . '". Only ' . $shop->balance);
            }
            $open_shift = \VanguardLTE\OpenShift::where([
                'shop_id' => auth()->user()->shop_id, 
                'end_date' => null
            ])->first();
            if( !$open_shift ) 
            {
                return $this->errorWrongArgs(trans('app.shift_not_opened'));
            }
            $sum = ($type == 'out' ? -1 * $request->summ : $request->summ);
            \VanguardLTE\ShopStat::create([
                'user_id' => auth()->user()->id, 
                'shop_id' => $user->shop_id, 
                'type' => $type, 
                'sum' => abs($sum)
            ]);
            if( $type == 'out' ) 
            {
                $open_shift->increment('balance_out', abs($sum));
            }
            else
            {
                $open_shift->increment('balance_in', abs($sum));
            }
            $user->update([
                'balance' => $user->balance - $sum, 
                'count_balance' => $user->count_balance - $sum
            ]);
            $shop->update(['balance' => $shop->balance + $sum]);
            $user = $user->fresh();
            if( $user->balance == 0 ) 
            {
                $user->update([
                    'wager' => 0, 
                    'bonus' => 0
                ]);
            }
            if( $user->count_balance < 0 ) 
            {
                $user->update(['count_balance' => 0]);
            }
            return $this->respondWithSuccess();
        }
        public function shop_block(\Illuminate\Http\Request $request, \VanguardLTE\Repositories\Session\SessionRepository $sessionRepository)
        {
            if( !auth()->user()->hasPermission('shops.block') ) 
            {
                return $this->errorForbidden('Permission denied.');
            }
            if( !$request->shop_id ) 
            {
                return $this->errorForbidden('Shop is empty');
            }
            $shop = \VanguardLTE\Shop::find($request->shop_id);
            if( !$shop ) 
            {
                return $this->errorForbidden('Shop is not exist');
            }
            $users = \VanguardLTE\User::where('shop_id', $shop->id)->whereIn('role_id', [
                1, 
                2
            ])->get();
            if( $users ) 
            {
                foreach( $users as $user ) 
                {
                    $sessions = $sessionRepository->getUserSessions($user->id);
                    if( count($sessions) ) 
                    {
                        foreach( $sessions as $session ) 
                        {
                            $sessionRepository->invalidateSession($session->id);
                        }
                    }
                }
            }
            $shop->update(['is_blocked' => 1]);
            return $this->respondWithSuccess();
        }
        public function shop_unblock(\Illuminate\Http\Request $request)
        {
            if( !auth()->user()->hasPermission('shops.unblock') ) 
            {
                return $this->errorForbidden('Permission denied.');
            }
            if( !$request->shop_id ) 
            {
                return $this->errorForbidden('Shop is empty');
            }
            $shop = \VanguardLTE\Shop::find($request->shop_id);
            if( !$shop ) 
            {
                return $this->errorForbidden('Shop is not exist');
            }
            $shop->update(['is_blocked' => 0]);
            return $this->respondWithSuccess();
        }
    }

}
