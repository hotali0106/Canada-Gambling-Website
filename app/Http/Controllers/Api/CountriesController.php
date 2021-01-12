<?php 
namespace VanguardLTE\Http\Controllers\Api
{
    class CountriesController extends ApiController
    {
        private $countries = null;
        public function __construct(\VanguardLTE\Repositories\Country\CountryRepository $countries)
        {
            $this->middleware('auth');
            $this->countries = $countries;
        }
        public function index()
        {
            return $this->respondWithCollection($this->countries->all(), new \VanguardLTE\Transformers\CountryTransformer());
        }
    }

}
