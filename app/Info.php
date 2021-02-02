<?php 
namespace VanguardLTE
{
    class Info extends \Illuminate\Database\Eloquent\Model
    {
        protected $table = 'info';
        protected $fillable = [
            'link', 
            'title', 
            'text', 
            'roles', 
            'user_id'
        ];
        public $timestamps = false;
        public static function boot()
        {
            parent::boot();
        }
        public function user()
        {
            return $this->hasOne('VanguardLTE\User', 'id', 'user_id');
        }
    }
}
