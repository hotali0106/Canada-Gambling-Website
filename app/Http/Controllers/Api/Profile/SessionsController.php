<?php 
namespace VanguardLTE\Http\Controllers\Api\Profile
{
    class SessionsController extends \VanguardLTE\Http\Controllers\Api\ApiController
    {
        public function __construct()
        {
            $this->middleware('auth');
            $this->middleware('session.database');
        }
        public function index(\VanguardLTE\Repositories\Session\SessionRepository $sessions)
        {
            $sessions = $sessions->getUserSessions(auth()->id());
            return $this->respondWithCollection($sessions, new \VanguardLTE\Transformers\SessionTransformer());
        }
    }

}
