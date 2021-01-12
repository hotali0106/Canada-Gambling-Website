<?php 
namespace VanguardLTE\Http\Controllers\Api\Users
{
    class ActivityController extends \VanguardLTE\Http\Controllers\Api\ApiController
    {
        private $activities = null;
        public function __construct(\VanguardLTE\Repositories\Activity\ActivityRepository $activities)
        {
            $this->middleware('auth');
            $this->middleware('permission:users.activity');
            $this->activities = $activities;
        }
        public function index(\VanguardLTE\User $user, \VanguardLTE\Http\Requests\Activity\GetActivitiesRequest $request)
        {
            $activities = $this->activities->paginateActivitiesForUser($user->id, ($request->per_page ?: 100000), $request->search);
            return $this->respondWithPagination($activities, new \VanguardLTE\Transformers\ActivityTransformer());
        }
    }

}
