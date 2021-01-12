<?php 
namespace VanguardLTE
{
    class InfoShop extends \Illuminate\Database\Eloquent\Model
    {
        protected $table = 'info_shop';
        protected $fillable = [
            'info_id', 
            'shop_id'
        ];
        public $timestamps = false;
        public static function boot()
        {
            parent::boot();
        }
        public function shop()
        {
            return $this->belongsTo('VanguardLTE\Shop');
        }
    }

}
