<?php 
namespace VanguardLTE
{
    class OpenShift extends \Illuminate\Database\Eloquent\Model
    {
        protected $table = 'open_shift';
        protected $fillable = [
            'user_id', 
            'balance', 
            'balance_in', 
            'balance_out', 
            'users', 
            'money_in', 
            'money_out', 
            'old_banks', 
            'last_banks', 
            'last_returns', 
            'shop_id', 
            'start_date', 
            'end_date'
        ];
        public $timestamps = false;
        public static function boot()
        {
            parent::boot();
        }
        public function shop()
        {
            return $this->belongsTo('VanguardLTE\Shop', 'shop_id');
        }
        public function user()
        {
            return $this->belongsTo('VanguardLTE\User', 'user_id');
        }
        public function banks()
        {
            $gamesBalance = GameBank::select(\DB::raw('SUM(slots+little+table_bank+fish+bonus) AS balance'))->where('shop_id', $this->shop_id)->get();
            $pincodesBalance = Pincode::where('shop_id', $this->shop_id)->sum('nominal');
            $JPG = JPG::where(['shop_id' => $this->shop_id])->sum('balance');
            $gamesBalanceAll = 0;
            foreach( $gamesBalance as $temp ) 
            {
                $gamesBalanceAll += ($temp->balance + $JPG);
            }
            return $gamesBalanceAll + $pincodesBalance;
        }
        public function returns()
        {
            return User::where([
                'shop_id' => $this->shop_id, 
                'role_id' => 1
            ])->sum('count_return');
        }
        public function profit()
        {
            $stat = StatGame::where('shop_id', $this->shop_id);
            if( $this->start_date ) 
            {
                $stat = $stat->where('date_time', '>=', $this->start_date);
            }
            if( $this->end_date ) 
            {
                $stat = $stat->where('date_time', '<=', $this->end_date);
            }
            return $stat->sum('profit');
        }
    }

}
