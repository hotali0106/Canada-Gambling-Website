<?php 
namespace VanguardLTE\Http\Controllers\Api\Users
{
    class UsersController extends \VanguardLTE\Http\Controllers\Api\ApiController
    {
        private $users = null;
        private $max_users = 10000;
        public function __construct(\VanguardLTE\Repositories\User\UserRepository $users)
        {
            $this->middleware('auth');
            $this->middleware('permission:users.manage');
            $this->users = $users;
        }
        public function index(\Illuminate\Http\Request $request)
        {
            $users = \VanguardLTE\User::orderBy('created_at', 'DESC');
            $users = $users->where('role_id', '<=', auth()->user()->role_id);
            $users = $users->where('id', '!=', auth()->user()->id);
            if( $request->search != '' ) 
            {
                $users = $users->where('title', 'like', '%' . $request->search . '%');
            }
            if( $request->status != '' ) 
            {
                $users = $users->where('status', $request->status);
            }
            $users = $users->paginate(20000);
            return $this->respondWithPagination($users, new \VanguardLTE\Transformers\UserTransformer());
        }
        public function store(\VanguardLTE\Http\Requests\User\CreateUserRequest $request)
        {
            $count = \VanguardLTE\User::where([
                'shop_id' => auth()->user()->shop_id, 
                'role_id' => 1
            ])->count();
            if( $this->max_users <= $count ) 
            {
                return $this->setStatusCode(403)->respondWithError('Max users in shop is ' . $this->max_users);
            }
            $data = $request->only([
                'password', 
                'username', 
                'first_name', 
                'last_name', 
                'phone', 
                'address', 
                'birthday'
            ]);
            $data += ['status' => \VanguardLTE\Support\Enum\UserStatus::ACTIVE];
            $data += ['parent_id' => auth()->user()->id];
            $data += ['role_id' => 1];
            $data += ['shop_id' => auth()->user()->shop_id];
            $user = $this->users->create($data);
            $role = \jeremykenedy\LaravelRoles\Models\Role::find(1);
            $user->detachAllRoles();
            $user->attachRole($role);
            \VanguardLTE\ShopUser::create([
                'shop_id' => $request->shop_id, 
                'user_id' => $user->id
            ]);
            return $this->setStatusCode(201)->respondWithItem($user, new \VanguardLTE\Transformers\UserTransformer());
        }
        public function show(\VanguardLTE\User $user)
        {
            if( auth()->user()->role_id <= $user->role_id && $user->id != auth()->id() ) 
            {
                return $this->errorForbidden('Access denied');
            }
            return $this->respondWithItem($user, new \VanguardLTE\Transformers\UserTransformer());
        }
        public function update(\VanguardLTE\User $user, \VanguardLTE\Http\Requests\User\UpdateUserRequest $request)
        {
            if( auth()->user()->role_id <= $user->role_id && $user->id != auth()->id() ) 
            {
                return $this->errorForbidden('Access denied');
            }
            $data = $request->only([
                'password', 
                'username', 
                'first_name', 
                'last_name', 
                'phone', 
                'address', 
                'birthday', 
                'status'
            ])->toArray();
            $user = $this->users->update($user->id, $data);
            event(new \VanguardLTE\Events\User\UpdatedByAdmin($user));
            if( $this->userIsBanned($user, $request) ) 
            {
                event(new \VanguardLTE\Events\User\Banned($user));
            }
            return $this->respondWithItem($user, new \VanguardLTE\Transformers\UserTransformer());
        }
        private function userIsBanned(\VanguardLTE\User $user, \Illuminate\Http\Request $request)
        {
            return $user->status != $request->status && $request->status == \VanguardLTE\Support\Enum\UserStatus::BANNED;
        }
        public function destroy(\VanguardLTE\User $user)
        {
            if( $user->id == auth()->id() ) 
            {
                return $this->errorForbidden('You cannot delete yourself.');
            }
            if( $user->balance > 0 ) 
            {
                return $this->errorForbidden('Balance > 0');
            }
            if( auth()->user()->role_id <= $user->role_id ) 
            {
                return $this->errorForbidden('You can\'t delete this user');
            }
            event(new \VanguardLTE\Events\User\Deleted($user));
            \VanguardLTE\Transaction::where('user_id', $user->id)->delete();
            \VanguardLTE\ShopUser::where('user_id', $user->id)->delete();
            \VanguardLTE\StatGame::where('user_id', $user->id)->delete();
            \VanguardLTE\GameLog::where('user_id', $user->id)->delete();
            \VanguardLTE\UserActivity::where('user_id', $user->id)->delete();
            \VanguardLTE\Session::where('user_id', $user->id)->delete();
            $this->users->delete($user->id);
            return $this->respondWithSuccess();
        }
    }

}
