<?php 
namespace VanguardLTE\Http\Controllers\Api\Authorization
{
    class RolePermissionsController extends \VanguardLTE\Http\Controllers\Api\ApiController
    {
        private $roles = null;
        public function __construct(\VanguardLTE\Repositories\Role\RoleRepository $roles)
        {
            $this->roles = $roles;
            $this->middleware('auth');
            $this->middleware('permission:permissions.manage');
        }
        public function show(\VanguardLTE\Role $role)
        {
            return $this->respondWithCollection($role->cachedPermissions(), new \VanguardLTE\Transformers\PermissionTransformer());
        }
        public function update(\VanguardLTE\Role $role, \VanguardLTE\Http\Requests\Role\UpdateRolePermissionsRequest $request)
        {
            $this->roles->updatePermissions($role->id, $request->permissions);
            event(new \VanguardLTE\Events\Role\PermissionsUpdated());
            return $this->respondWithCollection($role->cachedPermissions(), new \VanguardLTE\Transformers\PermissionTransformer());
        }
    }

}
