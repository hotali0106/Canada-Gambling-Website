<?php 
namespace VanguardLTE\Http\Controllers\Api\Users
{
    class SessionsController extends \VanguardLTE\Http\Controllers\Api\ApiController
    {
        public function __construct()
        {
            $this->middleware('auth');
            $this->middleware('permission:users.manage');
            $this->middleware('session.database');
        }
        public function index(\VanguardLTE\User $user, \VanguardLTE\Repositories\Session\SessionRepository $sessions)
        {
            return $this->respondWithCollection($sessions->getUserSessions($user->id), new \VanguardLTE\Transformers\SessionTransformer());
        }
    }

}
