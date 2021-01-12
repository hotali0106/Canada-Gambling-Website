<?php 
namespace VanguardLTE
{
    class GameActivity extends \Illuminate\Database\Eloquent\Model
    {
        protected $table = 'games_activity';
        protected $fillable = [
            'game', 
            'number', 
            'max_win', 
            'max_bet', 
            'user_id'
        ];
        public static function boot()
        {
            parent::boot();
        }
    }

}
