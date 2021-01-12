<?php 
namespace VanguardLTE\Http\Controllers\Web\Backend
{
    class ActivityController extends \VanguardLTE\Http\Controllers\Controller
    {
        private $activities = null;
        public function __construct(\VanguardLTE\Repositories\Activity\ActivityRepository $activities)
        {
            $this->middleware('auth');
            $this->middleware('permission:access.admin.panel');
            $this->middleware('permission:users.activity');
            $this->activities = $activities;
        }
        public function index(\Illuminate\Http\Request $request)
        {
			/*
            $checked = new \VanguardLTE\Lib\LicenseDK();
            $license_notifications_array = $checked->aplVerifyLicenseDK(null, 0);
            if( $license_notifications_array['notification_case'] != 'notification_license_ok' ) 
            {
                return redirect()->route('frontend.page.error_license');
            }
            if( !$this->security() ) 
            {
                return redirect()->route('frontend.page.error_license');
            }*/
            $perPage = 20;
            $adminView = true;
            $shops = auth()->user()->availableShops();
            $ids = auth()->user()->availableUsers();
            $activities = \VanguardLTE\UserActivity::select('user_activity.*')->orderBy('created_at', 'DESC');
            if( $request->search != '' ) 
            {
                $activities = $activities->where('description', 'like', '%' . $request->search . '%');
            }
            if( $request->ip != '' ) 
            {
                $activities = $activities->where('ip_address', 'like', '%' . $request->ip . '%');
            }
            if( count($ids) ) 
            {
                $activities = $activities->whereIn('user_id', $ids);
            }
            $activities = $activities->whereIn('shop_id', $shops);
            if( $request->username != '' ) 
            {
                $activities = $activities->join('users', 'users.id', '=', 'user_activity.user_id');
                $activities = $activities->where('users.username', 'like', '%' . $request->username . '%');
            }
            $activities = $activities->paginate($perPage);
            return view('backend.activity.index', compact('activities', 'adminView'));
        }
        public function userActivity(\VanguardLTE\User $user, \Illuminate\Http\Request $request)
        {
            $perPage = 20;
            $adminView = true;
            if( !auth()->user()->isAvailable($user) ) 
            {
                return redirect()->back()->withErrors([trans('app.wrong_user')]);
            }
            $activities = $this->activities->paginateActivities($perPage, $request->get('search'), [$user->id]);
            return view('backend.activity.index', compact('activities', 'user', 'adminView'));
        }
        public function clear()
        {
            if( auth()->user()->hasRole('admin') ) 
            {
                \VanguardLTE\UserActivity::where('id', '>', '0')->delete();
                return redirect()->back()->withSuccess(trans('app.logs_removed'));
            }
            else
            {
                return redirect()->back()->withErrors([trans('app.no_permission')]);
            }
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
