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
            self::deleting(function($model)
            {
                InfoShop::where('info_id', $model->id)->delete();
            });
        }
        public function user()
        {
            return $this->hasOne('VanguardLTE\User', 'id', 'user_id');
        }
        public function shops()
        {
            return $this->hasMany('VanguardLTE\InfoShop');
        }
        public function shops_info()
        {
            $results = [];
            if( $this->shops ) 
            {
                foreach( $this->shops as $shop ) 
                {
                    if( $shop->shop ) 
                    {
                        $results[] = $shop->shop->name;
                    }
                }
            }
            return implode(',', $results);
        }
    }

}
