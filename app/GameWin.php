<?php 
namespace VanguardLTE
{
    class GameWin extends \Illuminate\Database\Eloquent\Model
    {
        protected $table = 'game_win';
        protected $fillable = [
            'game_id', 
            'winline1', 
            'winline3', 
            'winline5', 
            'winline7', 
            'winline9', 
            'winline10', 
            'winbonus1', 
            'winbonus3', 
            'winbonus5', 
            'winbonus7', 
            'winbonus9', 
            'winbonus10', 
            'winline_bonus1', 
            'winline_bonus3', 
            'winline_bonus5', 
            'winline_bonus7', 
            'winline_bonus9', 
            'winline_bonus10', 
            'winbonus_bonus1', 
            'winbonus_bonus3', 
            'winbonus_bonus5', 
            'winbonus_bonus7', 
            'winbonus_bonus9', 
            'winbonus_bonus10'
        ];
        public $timestamps = false;
        public static function boot()
        {
            parent::boot();
        }
    }

}
