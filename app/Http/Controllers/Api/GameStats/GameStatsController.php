<?php 
namespace VanguardLTE\Http\Controllers\Api\GameStats
{
    class GameStatsController extends \VanguardLTE\Http\Controllers\Api\ApiController
    {
        public function __construct()
        {
            $this->middleware('auth');
        }
        public function pay(\Illuminate\Http\Request $request)
        {
            if( auth()->user()->isUser() ) 
            {
                $stats = \VanguardLTE\Transaction::where('user_id', auth()->user()->id)->orderBy('created_at', 'DESC');
            }
            else
            {
                $stats = \VanguardLTE\Transaction::orderBy('created_at', 'DESC');
            }
            if( $request->user_id != '' ) 
            {
                $stats = $stats->where('user_id', $request->user_id);
            }
            if( $request->shop_id != '' ) 
            {
                $stats = $stats->where('shop_id', $request->shop_id);
                if( !in_array($request->shop_id, auth()->user()->availableShops()) ) 
                {
                    return $this->errorWrongArgs(trans('app.wrong_shop'));
                }
            }
            $stats = $stats->paginate(100);
            return $this->respondWithPagination($stats, new \VanguardLTE\Transformers\TransactionTransformer());
        }
        public function game(\Illuminate\Http\Request $request)
        {
            if( auth()->user()->isUser() ) 
            {
                $stats = \VanguardLTE\StatGame::where('user_id', auth()->user()->id)->orderBy('date_time', 'DESC');
            }
            else
            {
                $stats = \VanguardLTE\StatGame::orderBy('date_time', 'DESC');
            }
            if( $request->user_id != '' ) 
            {
                $stats = $stats->where('user_id', $request->user_id);
            }
            if( $request->shop_id != '' ) 
            {
                $stats = $stats->where('shop_id', $request->shop_id);
            }
            $stats = $stats->paginate(100);
            return $this->respondWithPagination($stats, new \VanguardLTE\Transformers\GameStatTransformer());
        }
        public function bank(\Illuminate\Http\Request $request)
        {
            if( auth()->user()->isUser() ) 
            {
                $stats = \VanguardLTE\BankStat::where('user_id', auth()->user()->id)->orderBy('created_at', 'DESC');
            }
            else
            {
                $stats = \VanguardLTE\BankStat::orderBy('created_at', 'DESC');
            }
            if( $request->user_id != '' ) 
            {
                $stats = $stats->where('user_id', $request->user_id);
            }
            if( $request->shop_id != '' ) 
            {
                $stats = $stats->where('shop_id', $request->shop_id);
            }
            $stats = $stats->paginate(100);
            return $this->respondWithPagination($stats, new \VanguardLTE\Transformers\BankStatTransformer());
        }
        public function shop(\Illuminate\Http\Request $request)
        {
            if( auth()->user()->isUser() ) 
            {
                $stats = \VanguardLTE\ShopStat::where('user_id', auth()->user()->id)->orderBy('date_time', 'DESC');
            }
            else
            {
                $stats = \VanguardLTE\ShopStat::orderBy('date_time', 'DESC');
            }
            if( $request->user_id != '' ) 
            {
                $stats = $stats->where('user_id', $request->user_id);
            }
            if( $request->shop_id != '' ) 
            {
                $stats = $stats->where('shop_id', $request->shop_id);
            }
            $stats = $stats->paginate(100);
            return $this->respondWithPagination($stats, new \VanguardLTE\Transformers\ShopStatTransformer());
        }
        public function shift(\Illuminate\Http\Request $request)
        {
            if( auth()->user()->isUser() ) 
            {
                $stats = \VanguardLTE\OpenShift::where('user_id', auth()->user()->id)->orderBy('start_date', 'DESC');
            }
            else
            {
                $stats = \VanguardLTE\OpenShift::orderBy('start_date', 'DESC');
            }
            if( $request->user_id != '' ) 
            {
                $stats = $stats->where('user_id', $request->user_id);
            }
            if( $request->shop_id != '' ) 
            {
                $stats = $stats->where('shop_id', $request->shop_id);
            }
            $stats = $stats->paginate(100);
            return $this->respondWithPagination($stats, new \VanguardLTE\Transformers\OpenShiftTransformer());
        }
    }

}
