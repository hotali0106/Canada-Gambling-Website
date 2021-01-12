<?php 
namespace VanguardLTE\Http\Controllers\Web\Backend
{
    class PermissionsController extends \VanguardLTE\Http\Controllers\Controller
    {
        private $roles = null;
        private $permissions = null;
        public function __construct(\VanguardLTE\Repositories\Role\RoleRepository $roles, \VanguardLTE\Repositories\Permission\PermissionRepository $permissions)
        {
            $this->middleware('auth');
            $this->middleware('permission:access.admin.panel');
            $this->middleware('shopzero');
            $this->roles = $roles;
            $this->permissions = $permissions;
        }
        public function index()
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
            $roles = \VanguardLTE\Role::get();
            $permissions = \jeremykenedy\LaravelRoles\Models\Permission::orderBy('slug')->get();
            return view('backend.permission.index', compact('roles', 'permissions'));
        }
        public function create()
        {
            $edit = false;
            return view('backend.permission.add-edit', compact('edit'));
        }
        public function store(\Illuminate\Http\Request $request)
        {
            $validatedData = $request->validate([
                'slug' => 'required|regex:/^[a-zA-Z0-9\-_\.]+$/|unique:permissions', 
                'name' => 'required'
            ]);
            \jeremykenedy\LaravelRoles\Models\Permission::create($request->all());
            return redirect()->route('backend.permission.index')->withSuccess(trans('app.permission_created_successfully'));
        }
        public function edit(\jeremykenedy\LaravelRoles\Models\Permission $permission)
        {
            $edit = true;
            return view('backend.permission.add-edit', compact('edit', 'permission'));
        }
        public function update(\jeremykenedy\LaravelRoles\Models\Permission $permission, \Illuminate\Http\Request $request)
        {
            $validatedData = $request->validate([
                'slug' => 'required|regex:/^[a-zA-Z0-9\-_\.]+$/|unique:permissions,slug,' . $permission->id, 
                'name' => 'required'
            ]);
            $permission->update($request->all());
            return redirect()->route('backend.permission.index')->withSuccess(trans('app.permission_updated_successfully'));
        }
        public function delete(\jeremykenedy\LaravelRoles\Models\Permission $permission)
        {
            $permission->delete();
            return redirect()->route('backend.permission.index')->withSuccess(trans('app.permission_deleted_successfully'));
        }
        public function saveRolePermissions(\Illuminate\Http\Request $request)
        {
            $roles = $request->get('roles');
            $allRoles = \VanguardLTE\Role::get();
            foreach( $allRoles as $role ) 
            {
                $permissions = array_get($roles, $role->id, []);
                $role->syncPermissions($permissions);
            }
            event(new \VanguardLTE\Events\Role\PermissionsUpdated());
            return redirect()->route('backend.permission.index')->withSuccess(trans('app.permissions_saved_successfully'));
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
