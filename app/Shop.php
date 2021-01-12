<?php 
namespace VanguardLTE
{
    class Shop extends \Illuminate\Database\Eloquent\Model
    {
        protected $table = 'shops';
        protected $fillable = [
            'name', 
            'balance', 
            'percent', 
            'frontend', 
            'currency', 
            'is_blocked', 
            'orderby', 
            'user_id', 
            'pending'
        ];
        public static $values = [
            'currency' => [
                '', 
                'EUR', 
                'GBP', 
                'USD', 
                'AUD', 
                'CAD', 
                'NZD', 
                'NOK', 
                'SEK', 
                'ZAR', 
                'INR', 
                'RUB', 
                'CHF', 
                'HRK', 
                'HUF', 
                'GEL', 
                'UAH', 
                'RON', 
                'BRL', 
                'MYR', 
                'CNY', 
                'JPY', 
                'KRW', 
                'IDR', 
                'VND', 
                'THB', 
                'TND'
            ], 
            'percent' => [
                98, 
                96, 
                94, 
                92, 
                90, 
                88, 
                86, 
                84, 
                82, 
                80
            ], 
            'orderby' => [
                'AZ', 
                'Rand', 
                'RTP', 
                'Count', 
                'Date'
            ]
        ];
        public $timestamps = false;
        public static function boot()
        {
            parent::boot();
            self::deleting(function($model)
            {
                ShopCategory::where('shop_id', $model->id)->delete();
                ShopStat::where('shop_id', $model->id)->delete();
                ShopUser::where('shop_id', $model->id)->delete();
                InfoShop::where('shop_id', $model->id)->delete();
            });
        }
        public function get_values($key, $add_empty = false, $add_value = false)
        {
            $arr = Shop::$values[$key];
            $labels = $arr;
            if( $add_empty ) 
            {
                $array = array_combine(array_merge([''], $arr), array_merge(['---'], $labels));
            }
            else
            {
                $array = array_combine($arr, $labels);
            }
            if( $add_value ) 
            {
                return [$add_value => $add_value] + $array;
            }
            return $array;
        }
        public function distributors_count()
        {
            $ShopUsers = ShopUser::where('shop_id', $this->id)->pluck('user_id');
            if( count($ShopUsers) ) 
            {
                return User::whereIn('id', $ShopUsers)->whereIn('role_id', [
                    4, 
                    5
                ])->count();
            }
            return 0;
        }
        public function getUsersByRole($role)
        {
            $role = Role::where('slug', $role)->first();
            $ids = ShopUser::where('shop_id', $this->id)->groupBy('user_id')->pluck('user_id');
            if( $ids ) 
            {
                return User::where('role_id', $role->id)->whereIn('id', $ids)->get();
            }
            return User::where('id', 0)->get();
        }
        public function categories()
        {
            return $this->hasMany('VanguardLTE\ShopCategory', 'shop_id');
        }
        public function users()
        {
            return $this->hasMany('VanguardLTE\ShopUser');
        }
        public function creator()
        {
            return $this->hasOne('VanguardLTE\User', 'id', 'user_id');
        }
        public function titles()
        {
            $cats = [];
            if( $this->categories ) 
            {
                foreach( $this->categories as $category ) 
                {
                    $cats[] = $category->category->title;
                }
            }
            return implode(', ', $cats);
        }
    }

}
