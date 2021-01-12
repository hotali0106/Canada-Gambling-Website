<?php 
namespace VanguardLTE\Http\Controllers\Api\Users
{
    class BalanceController extends \VanguardLTE\Http\Controllers\Api\ApiController
    {
        public function __construct()
        {
            $this->middleware('auth');
            $this->middleware('permission:users.balance.manage');
        }
        public function balance(\Illuminate\Http\Request $request, \VanguardLTE\User $user, $type = 'add')
        {
            if( !in_array($type, [
                'add', 
                'out'
            ]) ) 
            {
                $type = 'add';
            }
            $shop = \VanguardLTE\Shop::find(auth()->user()->shop_id);
            $request->summ = floatval($request->summ);
            if( !$shop ) 
            {
                return $this->errorWrongArgs(trans('app.wrong_shop'));
            }
            if( !$user ) 
            {
                return $this->errorWrongArgs(trans('app.wrong_user'));
            }
            if( auth()->user()->hasRole('distributor') || auth()->user()->hasRole('user') ) 
            {
                return $this->errorWrongArgs(trans('app.wrong_user'));
            }
            if( auth()->user()->hasRole('admin') && !$user->hasRole('distributor') ) 
            {
                return $this->errorWrongArgs(trans('app.wrong_user'));
            }
            if( auth()->user()->hasRole('cashier') && !$user->hasRole('user') ) 
            {
                return $this->errorWrongArgs(trans('app.wrong_user'));
            }
            if( !$request->summ ) 
            {
                return $this->errorWrongArgs(trans('app.wrong_sum'));
            }
            if( auth()->user()->hasRole('cashier') && $user->hasRole('user') && $type == 'add' && $shop->balance < $request->summ ) 
            {
                return $this->errorWrongArgs('Not enough money in the shop "' . $shop->name . '". Only ' . $shop->balance);
            }
            if( $type == 'out' && $user->balance < $request->summ ) 
            {
                return $this->errorWrongArgs('Not enough money in the user balance "' . $user->username . '". Only ' . $user->balance);
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
            $transaction = new \VanguardLTE\Transaction();
            $transaction->user_id = $user->id;
            $transaction->payeer_id = auth()->user()->id;
            $transaction->type = $type;
            $transaction->summ = abs($sum);
            $transaction->shop_id = $user->shop_id;
            $transaction->save();
            $user->update([
                'balance' => $user->balance + $sum, 
                'count_balance' => $user->count_balance + $sum
            ]);
            if( $user->hasRole('user') ) 
            {
                if( $type == 'out' ) 
                {
                    $user->update(['count_return' => 0]);
                }
                else
                {
                    $user->update(['count_return' => $user->count_return + \VanguardLTE\Lib\Functions::count_return($sum, $user->shop_id)]);
                }
            }
            if( auth()->user()->hasRole('cashier') && $user->hasRole('user') ) 
            {
                $shop->update(['balance' => $shop->balance - $sum]);
                if( $type == 'out' ) 
                {
                    $open_shift->increment('balance_in', abs($sum));
                }
                else
                {
                    $open_shift->increment('balance_out', abs($sum));
                }
                if( $type == 'out' ) 
                {
                    $open_shift->increment('money_out', abs($sum));
                }
                else
                {
                    $open_shift->increment('money_in', abs($sum));
                }
                if( $type == 'out' ) 
                {
                    $user->increment('total_out', abs($sum));
                }
                else
                {
                    $user->increment('total_in', abs($sum));
                }
            }
            $user->fresh();
            if( $user->balance == 0 ) 
            {
                $user->update([
                    'wager' => 0, 
                    'bonus' => 0
                ]);
            }
            if( $user->count_return <= 0 ) 
            {
                $user->update(['count_return' => 0]);
            }
            if( $user->count_balance < 0 ) 
            {
                $user->update(['count_balance' => 0]);
            }
            return $this->respondWithSuccess();
        }
    }

}
