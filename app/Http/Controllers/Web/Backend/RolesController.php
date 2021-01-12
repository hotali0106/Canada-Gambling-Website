<?php 
namespace VanguardLTE\Http\Controllers\Web\Backend
{
    class RolesController extends \VanguardLTE\Http\Controllers\Controller
    {
        private $roles = null;
        public function __construct(\VanguardLTE\Repositories\Role\RoleRepository $roles)
        {
            $this->middleware('auth');
            $this->middleware('permission:access.admin.panel');
            $this->middleware('permission:roles.manage');
            $this->roles = $roles;
        }
        public function index()
        {
            return redirect()->route('backend.dashboard');
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
            $roles = $this->roles->getAllWithUsersCount();
            return view('backend.role.index', compact('roles'));
        }
        public function create()
        {
            $edit = false;
            return redirect()->route('backend.dashboard');
            return view('backend.role.add-edit', compact('edit'));
        }
        public function store(\Illuminate\Http\Request $request)
        {
            $validatedData = $request->validate([
                'slug' => 'required|regex:/^[a-zA-Z0-9\-_\.]+$/|unique:roles', 
                'name' => 'required'
            ]);
            \jeremykenedy\LaravelRoles\Models\Role::create($request->all());
            return redirect()->route('backend.role.index')->withSuccess(trans('app.role_created'));
        }
        public function edit(\jeremykenedy\LaravelRoles\Models\Role $role)
        {
            $edit = true;
            return redirect()->route('backend.dashboard');
            return view('backend.role.add-edit', compact('edit', 'role'));
        }
        public function update(\jeremykenedy\LaravelRoles\Models\Role $role, \Illuminate\Http\Request $request)
        {
            $validatedData = $request->validate([
                'slug' => 'required|regex:/^[a-zA-Z0-9\-_\.]+$/|unique:roles,slug,' . $permission->id, 
                'name' => 'required'
            ]);
            $role->update($request->all());
            return redirect()->route('backend.role.index')->withSuccess(trans('app.role_updated'));
        }
        public function delete(\jeremykenedy\LaravelRoles\Models\Role $role)
        {
            return redirect()->route('backend.dashboard');
            $role->detachAllPermissions();
            $role->delete();
            return redirect()->route('backend.role.index')->withSuccess(trans('app.role_deleted'));
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
