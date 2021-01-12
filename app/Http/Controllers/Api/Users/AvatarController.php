<?php 
namespace VanguardLTE\Http\Controllers\Api\Users
{
    class AvatarController extends \VanguardLTE\Http\Controllers\Api\ApiController
    {
        private $users = null;
        private $avatarManager = null;
        public function __construct(\VanguardLTE\Repositories\User\UserRepository $users, \VanguardLTE\Services\Upload\UserAvatarManager $avatarManager)
        {
            $this->middleware('auth');
            $this->middleware('permission:users.manage');
            $this->users = $users;
            $this->avatarManager = $avatarManager;
        }
        public function update(\VanguardLTE\User $user, \VanguardLTE\Http\Requests\User\UploadAvatarRawRequest $request)
        {
            $name = $this->avatarManager->uploadAndCropAvatar($user, $request->file('file'));
            $user = $this->users->update($user->id, ['avatar' => $name]);
            event(new \VanguardLTE\Events\User\UpdatedByAdmin($user));
            return $this->respondWithItem($user, new \VanguardLTE\Transformers\UserTransformer());
        }
        public function updateExternal(\VanguardLTE\User $user, \Illuminate\Http\Request $request)
        {
            $this->validate($request, ['url' => 'required|url']);
            $this->avatarManager->deleteAvatarIfUploaded($user);
            $user = $this->users->update($user->id, ['avatar' => $request->url]);
            event(new \VanguardLTE\Events\User\UpdatedByAdmin($user));
            return $this->respondWithItem($user, new \VanguardLTE\Transformers\UserTransformer());
        }
        public function destroy(\VanguardLTE\User $user)
        {
            $this->avatarManager->deleteAvatarIfUploaded($user);
            $user = $this->users->update($user->id, ['avatar' => null]);
            event(new \VanguardLTE\Events\User\UpdatedByAdmin($user));
            return $this->respondWithItem($user, new \VanguardLTE\Transformers\UserTransformer());
        }
    }

}
