<?php 
namespace VanguardLTE\Http\Controllers\Api
{
    class StatsController extends ApiController
    {
        private $users = null;
        private $activities = null;
        public function __construct(\VanguardLTE\Repositories\User\UserRepository $users, \VanguardLTE\Repositories\Activity\ActivityRepository $activities)
        {
            $this->middleware('auth');
            $this->users = $users;
            $this->activities = $activities;
        }
        public function index()
        {
            if( \Auth::user()->hasRole('Admin') ) 
            {
                return $this->adminStats();
            }
            return $this->defaultStats();
        }
        private function adminStats()
        {
            $usersPerMonth = $this->users->countOfNewUsersPerMonth(\Carbon\Carbon::now()->subYear()->startOfMonth(), \Carbon\Carbon::now()->endOfMonth());
            $usersPerStatus = [
                'total' => $this->users->count(), 
                'new' => $this->users->newUsersCount(), 
                'banned' => $this->users->countByStatus(\VanguardLTE\Support\Enum\UserStatus::BANNED)
            ];
            $latestRegistrations = $this->users->latest(7);
            $resource = new \League\Fractal\Resource\Collection($latestRegistrations, new \VanguardLTE\Transformers\UserTransformer());
            return $this->respondWithArray([
                'users_per_month' => $usersPerMonth, 
                'users_per_status' => $usersPerStatus, 
                'latest_registrations' => $this->fractal()->createData($resource)->toArray()
            ]);
        }
        private function defaultStats()
        {
            return $this->activities->userActivityForPeriod(\Auth::user()->id, \Carbon\Carbon::now()->subWeeks(2), \Carbon\Carbon::now());
        }
    }

}
