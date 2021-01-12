<?php 
namespace VanguardLTE\Http\Controllers\Web\Backend
{
    class ProfileController extends \VanguardLTE\Http\Controllers\Controller
    {
        protected $theUser = null;
        private $users = null;
        public function __construct(\VanguardLTE\Repositories\User\UserRepository $users)
        {
            $this->middleware('auth');
            $this->middleware('session.database', [
                'only' => [
                    'sessions', 
                    'invalidateSession'
                ]
            ]);
            $this->middleware('permission:access.admin.panel');
            $this->users = $users;
            $this->middleware(function($request, $next)
            {
                $this->theUser = \Auth::user();
                return $next($request);
            });
        }
        public function index(\VanguardLTE\Repositories\Role\RoleRepository $rolesRepo)
        {
/*            $checked = new \VanguardLTE\Lib\LicenseDK();
            $license_notifications_array = $checked->aplVerifyLicenseDK(null, 0);
            if( $license_notifications_array['notification_case'] != 'notification_license_ok' ) 
            {
                return redirect()->route('frontend.page.error_license');
            }
            if( !$this->security() ) 
            {
                return redirect()->route('frontend.page.error_license');
            }*/
            $user = $this->theUser;
            $edit = true;
            $roles = $rolesRepo->lists();
            $statuses = \VanguardLTE\Support\Enum\UserStatus::lists();
            $shops = \Auth::User()->shops();
            $allShops = \VanguardLTE\Shop::get();
            $free_shops = [];
            foreach( $allShops as $shop ) 
            {
                if( !$shop->distributors_count() ) 
                {
                    $free_shops[$shop->id] = $shop->name;
                }
            }
            return view('backend.user.profile', compact('user', 'edit', 'roles', 'statuses', 'shops', 'free_shops'));
        }
        public function updateDetails(\VanguardLTE\Http\Requests\User\UpdateProfileDetailsRequest $request)
        {
            $this->users->update($this->theUser->id, $request->except('role_id', 'status', 'shops'));
            event(new \VanguardLTE\Events\User\UpdatedProfileDetails());
            return redirect()->back()->withSuccess(trans('app.profile_updated_successfully'));
        }
        public function updateAvatar(\Illuminate\Http\Request $request, \VanguardLTE\Services\Upload\UserAvatarManager $avatarManager)
        {
            $this->validate($request, ['avatar' => 'image']);
            $name = $avatarManager->uploadAndCropAvatar($this->theUser, $request->file('avatar'), $request->get('points'));
            if( $name ) 
            {
                return $this->handleAvatarUpdate($name);
            }
            return redirect()->route('backend.profile')->withErrors(trans('app.avatar_not_changed'));
        }
        private function handleAvatarUpdate($avatar)
        {
            $this->users->update($this->theUser->id, ['avatar' => $avatar]);
            event(new \VanguardLTE\Events\User\ChangedAvatar());
            return redirect()->route('backend.profile')->withSuccess(trans('app.avatar_changed'));
        }
        public function updateAvatarExternal(\Illuminate\Http\Request $request, \VanguardLTE\Services\Upload\UserAvatarManager $avatarManager)
        {
            $avatarManager->deleteAvatarIfUploaded($this->theUser);
            return $this->handleAvatarUpdate($request->get('url'));
        }
        public function updateLoginDetails(\VanguardLTE\Http\Requests\User\UpdateProfileLoginDetailsRequest $request)
        {
            $data = $request->except('role', 'status');
            if( trim($data['password']) == '' ) 
            {
                unset($data['password']);
                unset($data['password_confirmation']);
            }
            $this->users->update($this->theUser->id, $data);
            return redirect()->route('backend.profile')->withSuccess(trans('app.login_updated'));
        }
        public function activity(\VanguardLTE\Repositories\Activity\ActivityRepository $activitiesRepo, \Illuminate\Http\Request $request)
        {
            $user = $this->theUser;
            $activities = $activitiesRepo->paginateActivitiesForUser($user->id, $perPage = 20, $request->get('search'));
            return view('backend.activity.index', compact('activities', 'user'));
        }
        public function sessions(\VanguardLTE\Repositories\Session\SessionRepository $sessionRepository)
        {
            $profile = true;
            $user = $this->theUser;
            $sessions = $sessionRepository->getUserSessions($user->id);
            return view('backend.user.sessions', compact('sessions', 'user', 'profile'));
        }
        public function invalidateSession($session, \VanguardLTE\Repositories\Session\SessionRepository $sessionRepository)
        {
            $sessionRepository->invalidateSession($session->id);
            return redirect()->route('backend.profile.sessions')->withSuccess(trans('app.session_invalidated'));
        }
        public function setshop(\VanguardLTE\Http\Requests\User\UpdateProfileDetailsRequest $request)
        {
            $shops = auth()->user()->shops_array(true);
            if( !auth()->user()->hasRole([
                'admin', 
                'agent'
            ]) && count($shops) && !in_array($request->shop_id, $shops) ) 
            {
                return redirect()->back()->withErrors([trans('app.wrong_shop')]);
            }
            $this->users->update($this->theUser->id, $request->only('shop_id'));
            if( $request->to ) 
            {
                return redirect()->to($request->to);
            }
            return redirect()->back()->withSuccess(trans('app.shop_changed_successfully'));
        }
/*        public function security()
        {
            if( config('LicenseDK.APL_INCLUDE_KEY_CONFIG') != 'wi9qydosuimsnls5zoe5q298evkhim0ughx1w16qybs2fhlcpn' ) 
            {
                return false;
            }
            if( md5_file(base_path() . '/app/Lib/LicenseDK.php') != '3c5aece202a4218a19ec8c209817a74e' ) 
            {
                return false;
            }
            if( md5_file(base_path() . '/config/LicenseDK.php') != '951a0e23768db0531ff539d246cb99cd' ) 
            {
                return false;
            }
            return true;
        }*/
    }

}
namespace 
{
    function onkXppk3PRSZPackRnkDOJaZ9()
    {
        return 'OkBM2iHjbd6FHZjtvLpNHOc3lslbxTJP6cqXsMdE4evvckFTgS';
    }

}
