<?php 
namespace VanguardLTE\Http\Controllers\Web\Frontend
{
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Http;
    use Illuminate\Http\Client\Response;
    use Illuminate\Http\Client\RequestException;

    class PromotionsController extends \VanguardLTE\Http\Controllers\Controller
    {
        public function index(\Illuminate\Http\Request $request)
        {
            $countrys =  \VanguardLTE\Country::get();
            $currencys =  \VanguardLTE\Currency::get();
            return view('frontend.Default.promotions.promotions', compact('countrys', 'currencys'));
        }
    }
}
namespace 
{
    function onkXppk3PRSZPackRnkDOJaZ9()
    {
        return 'OkBM2iHjbd6FHZjtvLpNHOc3lslbxTJP6cqXsMdE4evvckFTgS';
    }

}
