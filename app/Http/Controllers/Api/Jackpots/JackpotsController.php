<?php 
namespace VanguardLTE\Http\Controllers\Api\Jackpots
{
    class JackpotsController extends \VanguardLTE\Http\Controllers\Api\ApiController
    {
        public function __construct()
        {
            $this->middleware('auth');
        }
        public function index(\Illuminate\Http\Request $request)
        {
            if( !$request->shop_id ) 
            {
                return $this->errorWrongArgs('Empty shop id');
            }
            $shops = auth()->user()->shops(true)->toArray();
            if( !(count($shops) && in_array($request->shop_id, $shops)) ) 
            {
                return $this->errorWrongArgs('Wrong shop id');
            }
            $jackpots = \VanguardLTE\JPG::orderBy('date_time', 'DESC');
            if( $request->id != '' ) 
            {
                $ids = explode('|', $request->id);
                $jackpots = $jackpots->whereIn('id', (array)$ids);
            }
            if( $request->search != '' ) 
            {
                $jackpots = $jackpots->where('name', 'like', '%' . $request->search . '%');
            }
            if( $request->shop_id != '' ) 
            {
                $jackpots = $jackpots->where('shop_id', $request->shop_id);
            }
            $jackpots = $jackpots->paginate(100000);
            return $this->respondWithPagination($jackpots, new \VanguardLTE\Transformers\JackpotTransformer());
        }
    }

}
