<?php

namespace VanguardLTE\Transformers;

use League\Fractal\TransformerAbstract;
use VanguardLTE\Repositories\Country\CountryRepository;
use VanguardLTE\Repositories\Role\RoleRepository;
use VanguardLTE\User;

class UserTransformer extends TransformerAbstract
{
    protected $availableIncludes = ['role', 'country'];

    public function transform(User $user)
    {
        return [
            'id' => $user->id,
            'first_name' => $user->first_name,
            'last_name' => $user->last_name,
            'username' => $user->username,
            'phone' => $user->phone,
			'balance' => $user->balance,
            'avatar' => $user->present()->avatar,
            'address' => $user->address,
            'country_id' => $user->country_id ? (int) $user->country_id : null,
            'role_id' => (int) $user->role_id,
            'status' => $user->status,
            'birthday' => $user->birthday ? $user->birthday->format('Y-m-d') : null,
            'last_login' => (string) $user->last_login,
            'created_at' => (string) $user->created_at,
            'updated_at' => (string) $user->updated_at
        ];
    }

    public function includeRole(User $user)
    {
        if (! auth('api')->user()->hasPermission('roles.manage')) {
            return null;
        }

		
        return $this->item($user->role, new RoleTransformer);
    }

    public function includeCountry(User $user)
    {
        return $this->item($user->country, new CountryTransformer);
    }
}
