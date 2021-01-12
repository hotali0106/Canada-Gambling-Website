<?php 
namespace VanguardLTE
{
    class GameBank extends \Illuminate\Database\Eloquent\Model
    {
        protected $table = 'game_bank';
        protected $fillable = [
            'slots', 
            'little', 
            'table_bank', 
            'fish', 
            'bonus', 
            'shop_id'
        ];
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
