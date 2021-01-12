<?php 
namespace VanguardLTE
{
    class StatGame extends \Illuminate\Database\Eloquent\Model
    {
        protected $table = 'stat_game';
        protected $fillable = [
            'date_time', 
            'user_id', 
            'balance', 
            'bet', 
            'win', 
            'game', 
            'denomination', 
            'percent', 
            'percent_jps', 
            'percent_jpg', 
            'profit', 
            'game_bank', 
            'jack_balance', 
            'shop_id'
        ];
        public $timestamps = false;
        public static function boot()
        {
            parent::boot();
            self::created(function($model)
            {
                try
                {
                    \Illuminate\Support\Facades\Redis::publish('Lives', json_encode([
                        'event' => 'NewLive', 
                        'data' => [
                            'type' => 'StatGame', 
                            'Name' => '', 
                            'Old' => '', 
                            'New' => '', 
                            'Game' => $model->game, 
                            'User' => $model->user->username, 
                            'System' => '', 
                            'Sum' => '', 
                            'In' => '', 
                            'Out' => '', 
                            'Balance' => number_format($model->balance, 4, '.', ''), 
                            'Bet' => number_format($model->bet, 4, '.', ''), 
                            'Win' => number_format($model->win, 4, '.', ''), 
                            'IN_GAME' => number_format($model->percent, 4, '.', ''), 
                            'IN_JPS' => number_format($model->percent_jps, 4, '.', ''), 
                            'IN_JPG' => number_format($model->percent_jpg, 4, '.', ''), 
                            'Profit' => number_format($model->profit, 4, '.', ''), 
                            'user_id' => \Auth::id(), 
                            'shop_id' => \Auth::user()->shop_id, 
                            'Date' => date(config('app.date_time_format')), 
                            'domain' => request()->getHost()
                        ]
                    ]));
                }
                catch( \Predis\Connection\ConnectionException $e ) 
                {
                }
            });
        }
        public function user()
        {
            return $this->belongsTo('VanguardLTE\User', 'user_id');
        }
        public function shop()
        {
            return $this->belongsTo('VanguardLTE\Shop');
        }
        public function game_item()
        {
            return $this->hasOne('VanguardLTE\Game', 'name', 'game');
        }
        public function name_ico()
        {
            return explode(' ', $this->game)[0];
        }
    }

}
