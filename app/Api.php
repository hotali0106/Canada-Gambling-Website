<?php 
namespace VanguardLTE
{
    class Api extends \Illuminate\Database\Eloquent\Model
    {
        protected $table = 'apis';
        protected $fillable = [
            'keygen', 
            'ip', 
            'status'
        ];
        public static function boot()
        {
            parent::boot();
        }
    }

}
