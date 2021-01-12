<?php 
namespace VanguardLTE
{
    class Point extends \Illuminate\Database\Eloquent\Model
    {
        protected $table = 'points';
        protected $fillable = [
            'rating', 
            'name', 
            'sum', 
            'bonus', 
            'img', 
            'pay', 
            'exchange', 
            'title', 
            'description', 
            'shop_id'
        ];
        public static function boot()
        {
            parent::boot();
        }
        public function exchange_rate($real = false)
        {
            $temp = explode('|', $this->exchange);
            if( $real ) 
            {
                return $temp[0] / 100;
            }
            return '100:' . $temp[0];
        }
        public function exchange_wager()
        {
            $temp = explode('|', $this->exchange);
            return intval($temp[1]);
        }
    }

}
