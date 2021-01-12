<?php 
namespace VanguardLTE\Http\Controllers\Api
{
    class SettingsController extends ApiController
    {
        public function __construct()
        {
            $this->middleware('auth');
            $this->middleware('permission:settings.general');
        }
        public function index()
        {
            return Settings::all();
        }
    }

}
