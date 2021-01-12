<?php 
namespace VanguardLTE
{
    class Payment extends \Illuminate\Database\Eloquent\Model
    {
        protected $table = 'payments';
        protected $fillable = [
            'user_id', 
            'summ', 
            'status', 
            'system'
        ];
        public $timestamps = false;
        public static function boot()
        {
            parent::boot();
        }
    }

}
