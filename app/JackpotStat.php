<?php 
namespace VanguardLTE
{
    class JackpotStat extends \Illuminate\Database\Eloquent\Model
    {
        protected $table = 'jackpots_stat';
        protected $fillable = [
            'user_id', 
            'system', 
            'jackpot_id', 
            'type', 
            'summ'
        ];
        public $timestamps = false;
        public static function boot()
        {
            parent::boot();
        }
        public function user()
        {
            return $this->belongsTo('VanguardLTE\User');
        }
    }

}
