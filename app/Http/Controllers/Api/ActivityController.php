<?php 
namespace VanguardLTE\Http\Controllers\Api
{
    class ActivityController extends ApiController
    {
        public function __construct()
        {
            $this->middleware('auth');
            $this->middleware('permission:users.activity');
        }
        public function index(\VanguardLTE\Http\Requests\Activity\GetActivitiesRequest $request, \VanguardLTE\Repositories\Activity\ActivityRepository $activities)
        {
            $result = $activities->paginateActivities(($request->per_page ?: 20), $request->search);
            return $this->respondWithPagination($result, new \VanguardLTE\Transformers\ActivityTransformer());
        }
    }

}
