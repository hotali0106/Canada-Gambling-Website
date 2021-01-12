<?php

namespace VanguardLTE\Services\Logging\UserActivity;

use Illuminate\Contracts\Auth\Factory;
use VanguardLTE\Repositories\Activity\ActivityRepository;
use VanguardLTE\User;
use Illuminate\Http\Request;

class Logger
{
    /**
     * @var Request
     */
    private $request;
    /**
     * @var Factory
     */
    private $auth;

    /**
     * @var User|null
     */
    protected $user = null;
    /**
     * @var ActivityRepository
     */
    private $activities;

    public function __construct(Request $request, Factory $auth, ActivityRepository $activities)
    {
        $this->request = $request;
        $this->auth = $auth;
        $this->activities = $activities;
    }

    /**
     * Log user action.
     *
     * @param $description
     * @return static
     */
    public function log($description)
    {
        return $this->activities->log([
            'description' => $description,
            'user_id' => $this->getUserId(),
            'shop_id' => auth()->user()->shop_id,
            'ip_address' => $this->request->server('REMOTE_ADDR'),
            'user_agent' => $this->getUserAgent()
        ]);
    }

    /**
     * Get id if the user for who we want to log this action.
     * If user was manually set, then we will just return id of that user.
     * If not, we will return the id of currently logged user.
     *
     * @return int|mixed|null
     */
    private function getUserId()
    {
        if ($this->user) {
            return $this->user->id;
        }

        return $this->auth->guard()->id();
    }

    /**
     * Get user agent from request headers.
     *
     * @return string
     */
    private function getUserAgent()
    {
        return substr((string) $this->request->header('User-Agent'), 0, 500);
    }

    /**
     * @param User|null $user
     */
    public function setUser($user)
    {
        $this->user = $user;
    }
}
