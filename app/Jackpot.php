<?php 
namespace VanguardLTE
{
    class Jackpot extends \Illuminate\Database\Eloquent\Model
    {
        protected $table = 'jackpots';
        protected $fillable = [
            'date_time', 
            'name', 
            'balance', 
            'pay_sum', 
            'start_balance', 
            'percent', 
            'view', 
            'shop_id'
        ];
        public static $values = [
            'percent' => [
                '1.00', 
                '0.50', 
                '0.40', 
                '0.30', 
                '0.20', 
                '0.10', 
                '0.09', 
                '0.08', 
                '0.07', 
                '0.06', 
                '0.05'
            ]
        ];
        public $timestamps = false;
        public static function boot()
        {
            parent::boot();
        }
        public function add_jps($user = false, $sum, $type = 'add')
        {
            $shop = Shop::find($this->shop_id);
            $old = $this->balance;
            $shop_id = $shop->id;
            if( !$user ) 
            {
                $user = User::where('role_id', 4)->whereHas('rel_shops', function($query) use ($shop)
                {
                    $query->where('shop_id', $shop->id);
                })->first();
            }
            if( !$shop ) 
            {
                return redirect()->back()->withErrors([trans('app.wrong_shop')]);
            }
            if( !$sum ) 
            {
                return redirect()->back()->withErrors([trans('app.wrong_sum')]);
            }
            if( $type == 'add' && $shop->balance < $sum ) 
            {
                return [
                    'success' => false, 
                    'text' => 'Not enough money in the shop "' . $shop->name . '". Only ' . $shop->balance
                ];
            }
            if( $type == 'out' && $this->balance < $sum ) 
            {
                return [
                    'success' => false, 
                    'text' => 'Not enough money in the jackpot balance "' . $this->name . '". Only ' . $this->balance
                ];
            }
            $open_shift = OpenShift::where([
                'shop_id' => $this->shop_id, 
                'end_date' => null
            ])->first();
            if( !$open_shift ) 
            {
                return [
                    'success' => false, 
                    'text' => trans('app.shift_not_opened')
                ];
            }
            $sum = ($type == 'out' ? -1 * $sum : $sum);
            if( $this->balance + $sum < 0 ) 
            {
                return [
                    'success' => false, 
                    'text' => 'Balance < 0'
                ];
            }
            $this->update(['balance' => $this->balance + $sum]);
            $shop->update(['balance' => $shop->balance - $sum]);
            if( $type == 'out' ) 
            {
                $open_shift->increment('balance_in', abs($sum));
            }
            else
            {
                $open_shift->increment('balance_out', abs($sum));
            }
            if( $user ) 
            {
                BankStat::create([
                    'name' => 'JPS ' . $this->id, 
                    'user_id' => $user->id, 
                    'type' => $type, 
                    'sum' => abs($sum), 
                    'old' => $old, 
                    'new' => $this->balance, 
                    'shop_id' => $shop->id
                ]);
            }
            return ['success' => true];
        }
    }

}
