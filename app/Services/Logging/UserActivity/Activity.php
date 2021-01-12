<?php

namespace VanguardLTE\Services\Logging\UserActivity;

use VanguardLTE\User;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    const UPDATED_AT = null;

    protected $table = 'user_activity';

    protected $fillable = ['description', 'user_id', 'ip_address', 'user_agent', 'shop_id'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
