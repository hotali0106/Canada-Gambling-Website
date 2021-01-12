<?php 
namespace VanguardLTE\Http\Controllers\Api\Profile
{
    class AuthDetailsController extends \VanguardLTE\Http\Controllers\Api\ApiController
    {
        public function __construct()
        {
            $this->middleware('auth');
        }
        public function update(\VanguardLTE\Http\Requests\User\UpdateProfileLoginDetailsRequest $request, \VanguardLTE\Repositories\User\UserRepository $users)
        {
            $user = $request->user();
            $data = $request->only([
                'username', 
                'password'
            ]);
            $user = $users->update($user->id, $data);
            return $this->respondWithItem($user, new \VanguardLTE\Transformers\UserTransformer());
        }
    }

}
