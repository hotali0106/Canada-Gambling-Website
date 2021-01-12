<?php 
namespace VanguardLTE
{
    class Transaction extends \Illuminate\Database\Eloquent\Model
    {
        protected $table = 'transactions';
        protected $fillable = [
            'user_id', 
            'payeer_id', 
            'system', 
            'value', 
            'type', 
            'summ', 
            'status', 
            'shop_id'
        ];
        public static function boot()
        {
            parent::boot();
            self::created(function($model)
            {
                $system = ($model->admin ? $model->admin->username : $model->system);
                $sysdata = '<a href="' . route('backend.statistics', ['system_str' => $system]) . '">' . $system . '</a>';
                if( $model->value ) 
                {
                    $sysdata .= $model->value;
                }
                if( $model->type == 'add' || $model->type == '' ) 
                {
                    $sum = '<span class="text-green">' . number_format(abs($model->summ), 4, '.', '') . '</span>';
                }
                else
                {
                    $sum = '<span class="text-red">' . number_format(abs($model->summ), 4, '.', '') . '</span>';
                }
                $usdata = '<a href="' . route('backend.statistics', ['user' => $model->user->username]) . '">' . $model->user->username . '</a>';
                try
                {
                    \Illuminate\Support\Facades\Redis::publish('Lives', json_encode([
                        'event' => 'NewLive', 
                        'data' => [
                            'type' => 'PayStat', 
                            'Name' => '', 
                            'Old' => '', 
                            'New' => '', 
                            'Game' => '', 
                            'User' => $usdata, 
                            'System' => $sysdata, 
                            'Sum' => $sum, 
                            'In' => ($model->type == 'add' ? $model->summ : ''), 
                            'Out' => ($model->type != 'add' ? $model->summ : ''), 
                            'Balance' => '', 
                            'Bet' => '', 
                            'Win' => '', 
                            'IN_GAME' => '', 
                            'IN_JPS' => '', 
                            'IN_JPG' => '', 
                            'Profit' => '', 
                            'user_id' => \Auth::id(), 
                            'shop_id' => $model->shop_id, 
                            'Date' => $model->created_at->format(config('app.date_time_format')), 
                            'domain' => request()->getHost()
                        ]
                    ]));
                }
                catch( \Predis\Connection\ConnectionException $e ) 
                {
                }
            });
        }
        public function admin()
        {
            return $this->hasOne('VanguardLTE\User', 'id', 'payeer_id');
        }
        public function user()
        {
            return $this->hasOne('VanguardLTE\User', 'id', 'user_id');
        }
        public function shop()
        {
            return $this->belongsTo('VanguardLTE\Shop');
        }
    }

}
