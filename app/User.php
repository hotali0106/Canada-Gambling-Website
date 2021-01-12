<?php 
namespace VanguardLTE
{
    class User extends \Illuminate\Foundation\Auth\User implements \Tymon\JWTAuth\Contracts\JWTSubject
    {
        use \Laracasts\Presenter\PresentableTrait, 
            \Illuminate\Notifications\Notifiable, 
            \jeremykenedy\LaravelRoles\Traits\HasRoleAndPermission;
        protected $presenter = 'VanguardLTE\Presenters\UserPresenter';
        protected $table = 'users';
        protected $dates = [
            'last_login', 
            'birthday'
        ];
        protected $fillable = [
            'password', 
            'email', 
            'username', 
            'avatar', 
            'balance', 
            'last_login', 
            'confirmation_token', 
            'status', 
            'wager', 
            'rating', 
            'points', 
            'total_balance', 
            'bonus', 
            'count_bonus', 
            'total_in', 
            'total_out', 
            'language', 
            'remember_token', 
            'role_id', 
            'count_balance', 
            'count_return', 
            'parent_id', 
            'shop_id', 
            'session'
        ];
        protected $hidden = [
            'password', 
            'remember_token'
        ];
        public static function boot()
        {
            parent::boot();
            self::created(function($model)
            {
            });
            self::deleting(function($model)
            {
                $model->detachAllRoles();
                Transaction::where('user_id', $model->id)->delete();
                ShopUser::where('user_id', $model->id)->delete();
                StatGame::where('user_id', $model->id)->delete();
                GameLog::where('user_id', $model->id)->delete();
                UserActivity::where('user_id', $model->id)->delete();
                Session::where('user_id', $model->id)->delete();
                Info::where('user_id', $model->id)->delete();
                OpenShift::where('user_id', $model->id)->delete();
                GameActivity::where('user_id', $model->id)->delete();
            });
        }
        public function setPasswordAttribute($value)
        {
            $this->attributes['password'] = bcrypt($value);
        }
        public function setBirthdayAttribute($value)
        {
            $this->attributes['birthday'] = (trim($value) ?: null);
        }
        public function gravatar()
        {
            $hash = hash('md5', strtolower(trim($this->attributes['username'])));
            return sprintf('https://www.gravatar.com/avatar/%s?size=150', $hash);
        }
        public function isActive()
        {
            return $this->status == Support\Enum\UserStatus::ACTIVE;
        }
        public function availableUsers()
        {
            $users = User::where(['id' => $this->id])->get();
            if( $this->hasRole(['admin']) ) 
            {
                $users = User::get();
            }
            if( $this->hasRole(['agent']) ) 
            {
                $distributors = User::where([
                    'role_id' => 4, 
                    'parent_id' => $this->id
                ])->get();
                $other = User::where('role_id', '<=', 3)->whereIn('shop_id', $this->availableShops())->get();
                $users = $users->merge($distributors);
                $users = $users->merge($other);
            }
            if( $this->hasRole(['distributor']) ) 
            {
                $other = User::where('role_id', '<=', 3)->whereIn('shop_id', $this->shops_array(true))->get();
                $users = $users->merge($other);
            }
            if( $this->hasRole(['manager']) ) 
            {
                $other = User::where('role_id', '<=', 2)->where('shop_id', $this->shop_id)->get();
                $users = $users->merge($other);
            }
            if( $this->hasRole(['cashier']) ) 
            {
                $other = User::where('role_id', 1)->where('shop_id', $this->shop_id)->get();
                $users = $users->merge($other);
            }
            $users = $users->pluck('id');
            if( !count($users) ) 
            {
                $users = [0];
            }
            else
            {
                $users = $users->toArray();
            }
            return $users;
        }
        public function hierarchyUsers()
        {
            $level = $this->level();
            $users = User::where('id', $this->id)->get();
            for( $i = $level; $i >= 1; $i-- ) 
            {
                foreach( $users as $user ) 
                {
                    if( $user->level() == $i ) 
                    {
                        if( auth()->user()->shop_id > 0 ) 
                        {
                            $users = $users->merge(User::where('parent_id', $user->id)->whereHas('rel_shops', function($query)
                            {
                                $query->where('shop_id', $this->shop_id);
                            })->get());
                        }
                        else
                        {
                            $users = $users->merge(User::where('parent_id', $user->id)->get());
                        }
                    }
                }
            }
            return $users->pluck('id')->toArray();
        }
        public function isAvailable($user)
        {
            if( !$user ) 
            {
                return false;
            }
            if( in_array($user->id, $this->availableUsers()) ) 
            {
                return true;
            }
            return false;
        }
        public function emptyShops()
        {
            $count = 0;
            if( $shops = $this->rel_shops ) 
            {
                foreach( $shops as $shop ) 
                {
                    if( $shop->shop && count($shop->shop->getUsersByRole('user')) == 0 ) 
                    {
                        $count++;
                    }
                }
            }
            return $count;
        }
        public function availableUsersByRole($roleName)
        {
            $users = $this->availableUsers();
            if( !count($users) ) 
            {
                return [];
            }
            $role = \jeremykenedy\LaravelRoles\Models\Role::where('slug', $roleName)->first();
            return User::where('role_id', $role->id)->whereIn('id', $users)->pluck('id')->toArray();
        }
        public function availableShops()
        {
            $shops = [$this->shop_id];
            if( $this->hasRole([
                'admin', 
                'agent', 
                'distributor'
            ]) ) 
            {
                if( !$this->shop_id ) 
                {
                    $shops = array_merge([0], $this->shops_array(true));
                }
                else
                {
                    $shops = [$this->shop_id];
                }
            }
            return $shops;
        }
        public function getInnerUsers()
        {
            $role = \jeremykenedy\LaravelRoles\Models\Role::where('id', $this->role_id - 1)->first();
            $ids = $this->availableUsersByRole($role->slug);
            if( count($ids) ) 
            {
                return User::whereIn('id', $ids)->get();
            }
            return false;
        }
        public function getRowspan()
        {
            $rowspan = 0;
            if( $this->hasRole('agent') ) 
            {
                $rowspan = 0;
                $distributors = User::where('parent_id', $this->id)->get();
                if( $distributors ) 
                {
                    foreach( $distributors as $distributor ) 
                    {
                        $shops = $distributor->shops_array();
                        $rowspan += (count($shops) ?: 1);
                    }
                }
            }
            if( $this->hasRole('distributor') ) 
            {
                $rowspan = 0;
                if( $shops = $this->rel_shops ) 
                {
                    foreach( $shops as $shop ) 
                    {
                        if( $shop = $shop->shop ) 
                        {
                            $managers = $shop->getUsersByRole('manager');
                            $rowspan += (count($managers) ?: 1);
                        }
                    }
                }
            }
            return ($rowspan > 0 ? $rowspan : 1);
        }
        public function isBanned()
        {
            return $this->status == Support\Enum\UserStatus::BANNED;
        }
        public function role()
        {
            return $this->belongsTo('jeremykenedy\LaravelRoles\Models\Role', 'role_id');
        }
        public function activities()
        {
            return $this->hasMany('VanguardLTE\Services\Logging\UserActivity\Activity', 'user_id');
        }
        public function referral()
        {
            return $this->belongsTo('VanguardLTE\User', 'parent_id');
        }
        public function rel_shops()
        {
            return $this->hasMany('VanguardLTE\ShopUser', 'user_id');
        }
        public function shops($onlyId = false)
        {
            if( $this->hasRole('admin') ) 
            {
                if( $onlyId ) 
                {
                    return Shop::pluck('id');
                }
                else
                {
                    return Shop::pluck('name', 'id');
                }
            }
            $shops = ShopUser::where('user_id', $this->id)->pluck('shop_id');
            if( count($shops) ) 
            {
                if( $onlyId ) 
                {
                    return Shop::whereIn('id', $shops)->pluck('id');
                }
                else
                {
                    return Shop::whereIn('id', $shops)->pluck('name', 'id');
                }
            }
            else
            {
                return [];
            }
        }
        public function shops_array($onlyId = false)
        {
            $data = $this->shops($onlyId);
            if( !is_array($data) ) 
            {
                return $data->toArray();
            }
            return $data;
        }
        public function available_roles($withMe = false)
        {
            $roles = [
                '1' => [], 
                '2' => [1], 
                '3' => [2], 
                '4' => [3], 
                '5' => [4], 
                '6' => [5]
            ];
            if( $withMe ) 
            {
                $roles = [
                    '1' => [], 
                    '2' => [
                        1, 
                        2
                    ], 
                    '3' => [
                        1, 
                        2, 
                        3
                    ], 
                    '4' => [
                        1, 
                        2, 
                        3, 
                        4
                    ], 
                    '5' => [
                        1, 
                        2, 
                        3, 
                        4, 
                        5
                    ], 
                    '6' => [
                        1, 
                        2, 
                        3, 
                        4, 
                        5, 
                        6
                    ]
                ];
            }
            if( count($roles[$this->level()]) ) 
            {
                return \jeremykenedy\LaravelRoles\Models\Role::whereIn('id', $roles[$this->level()])->pluck('name', 'id');
            }
            return [];
        }
        public function shop()
        {
            return $this->belongsTo('VanguardLTE\Shop', 'shop_id');
        }
        public function getJWTIdentifier()
        {
            return $this->id;
        }
        public function getJWTCustomClaims()
        {
            $token = app('VanguardLTE\Services\Auth\Api\TokenFactory')->forUser($this);
            return ['jti' => $token->id];
        }
        public function addBalance($type, $summ, $payeer = false, $return = 0)
        {
            if( !in_array($type, [
                'add', 
                'out'
            ]) ) 
            {
                $type = 'add';
            }
            $shop = $this->shop;
            if( !$payeer ) 
            {
                $payeer = User::where('id', auth()->user()->id)->first();
            }
            if( $payeer->hasRole('admin') && !$this->hasRole('agent') ) 
            {
                return response()->json([
                    'status' => 'error', 
                    'message' => trans('app.wrong_user')
                ]);
            }
            if( $payeer->hasRole('agent') && !$this->hasRole('distributor') ) 
            {
                return response()->json([
                    'status' => 'error', 
                    'message' => trans('app.wrong_user')
                ]);
            }
            if( $payeer->hasRole('distributor') && !$this->hasRole('manager') ) 
            {
                return response()->json([
                    'status' => 'error', 
                    'message' => trans('app.wrong_user')
                ]);
            }
            if( $payeer->hasRole('cashier') && !$this->hasRole('user') ) 
            {
                return response()->json([
                    'status' => 'error', 
                    'message' => trans('app.wrong_user')
                ]);
            }
            if( !$summ ) 
            {
                return response()->json([
                    'status' => 'error', 
                    'message' => trans('app.wrong_sum')
                ]);
            }
            if( $payeer->hasRole('cashier') && $this->hasRole('user') ) 
            {
                if( !$shop ) 
                {
                    return response()->json([
                        'status' => 'error', 
                        'message' => trans('app.wrong_shop')
                    ]);
                }
                if( $type == 'add' && $shop->balance < $summ ) 
                {
                    return response()->json([
                        'status' => 'error', 
                        'message' => trans('app.not_enough_money_in_the_shop', [
                            'name' => $shop->name, 
                            'balance' => $shop->balance
                        ])
                    ]);
                }
            }
            if( ($payeer->hasRole('agent') && $this->hasRole('distributor') || $payeer->hasRole('distributor') && $this->hasRole('manager')) && $type == 'add' && $payeer->balance < $summ ) 
            {
                return response()->json([
                    'status' => 'error', 
                    'message' => trans('app.not_enough_money_in_the_user_balance', [
                        'name' => $payeer->name, 
                        'balance' => $payeer->balance
                    ])
                ]);
            }
            if( $type == 'out' && $this->balance < $summ ) 
            {
                return response()->json([
                    'status' => 'error', 
                    'message' => trans('app.not_enough_money_in_the_user_balance', [
                        'name' => $this->username, 
                        'balance' => $this->balance
                    ])
                ]);
            }
            if( $payeer->hasRole('cashier') && $this->hasRole('user') ) 
            {
                $open_shift = OpenShift::where([
                    'shop_id' => $payeer->shop_id, 
                    'end_date' => null
                ])->first();
                if( !$open_shift ) 
                {
                    return response()->json([
                        'status' => 'error', 
                        'message' => trans('app.shift_not_opened')
                    ]);
                }
            }
            $happyhour = HappyHour::where([
                'shop_id' => $payeer->shop_id, 
                'time' => date('G')
            ])->first();
            $summ = ($type == 'out' ? -1 * $summ : $summ);
            $balance = $summ;
            if( $payeer->hasRole('cashier') && $this->hasRole('user') && $type == 'add' && $happyhour ) 
            {
                $transactionSum = $summ * intval(str_replace('x', '', $happyhour->multiplier));
                $bonus = $transactionSum - $summ;
                $wager = $bonus * intval(str_replace('x', '', $happyhour->wager));
                Transaction::create([
                    'user_id' => $this->id, 
                    'system' => 'HH ' . $happyhour->multiplier, 
                    'type' => $type, 
                    'summ' => $transactionSum, 
                    'shop_id' => ($this->hasRole('user') ? $this->shop_id : 0)
                ]);
                $this->increment('wager', $wager);
                $this->increment('bonus', $bonus);
                $this->increment('count_bonus', $bonus);
                $balance = $transactionSum;
            }
            else
            {
                Transaction::create([
                    'user_id' => $this->id, 
                    'payeer_id' => $payeer->id, 
                    'type' => $type, 
                    'summ' => abs($summ), 
                    'shop_id' => ($this->hasRole('user') ? $this->shop_id : 0)
                ]);
            }
            if( !$this->hasRole('admin') ) 
            {
                $this->increment('balance', $balance);
                $this->increment('count_balance', $summ);
            }
            if( $type == 'out' ) 
            {
                $this->increment('total_out', abs($summ));
            }
            else
            {
                $this->increment('total_in', abs($summ));
            }
            if( $this->hasRole('user') ) 
            {
                if( $type == 'out' ) 
                {
                    $this->update(['count_return' => 0]);
                }
                else if( $return > 0 ) 
                {
                    $this->update(['count_return' => $this->count_return + (($summ * $return) / 100)]);
                }
                else
                {
                    $this->update(['count_return' => $this->count_return + Lib\Functions::count_return($summ, $this->shop_id)]);
                }
            }
            if( $payeer->hasRole('agent') && $this->hasRole('distributor') || $payeer->hasRole('distributor') && $this->hasRole('manager') ) 
            {
                $payeer->update(['balance' => $payeer->balance - $summ]);
            }
            if( $payeer->hasRole('cashier') && $this->hasRole('user') ) 
            {
                $shop->update(['balance' => $shop->balance - $summ]);
                if( $type == 'out' ) 
                {
                    $open_shift->increment('balance_in', abs($summ));
                }
                else
                {
                    $open_shift->increment('balance_out', abs($summ));
                }
                if( $type == 'out' ) 
                {
                    $open_shift->increment('money_out', abs($summ));
                }
                else
                {
                    $open_shift->increment('money_in', abs($summ));
                }
            }
            if( $this->balance == 0 ) 
            {
                $this->update([
                    'wager' => 0, 
                    'bonus' => 0
                ]);
            }
            if( $this->wager <= 0 ) 
            {
                $this->update([
                    'wager' => 0, 
                    'bonus' => 0, 
                    'count_bonus' => 0
                ]);
            }
            if( $this->count_return <= 0 ) 
            {
                $this->update(['count_return' => 0]);
            }
            if( $this->count_balance < 0 ) 
            {
                $this->update(['count_balance' => 0]);
            }
            return response()->json([
                'status' => 'success', 
                'message' => trans('app.balance_updated')
            ]);
        }
    }

}
