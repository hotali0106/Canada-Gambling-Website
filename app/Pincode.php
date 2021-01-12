<?php 
namespace VanguardLTE
{
    class Pincode extends \Illuminate\Database\Eloquent\Model
    {
        protected $table = 'pincodes';
        protected $fillable = [
            'code', 
            'nominal', 
            'user_id', 
            'status', 
            'shop_id', 
            'activated_at'
        ];
        public static function boot()
        {
            parent::boot();
        }
    }

}
