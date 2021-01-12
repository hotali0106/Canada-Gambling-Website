<?php 
namespace VanguardLTE\Http\Controllers\Api\Transactions
{
    class TransactionsController extends \VanguardLTE\Http\Controllers\Api\ApiController
    {
        public function __construct()
        {
            $this->middleware('auth');
        }
        public function index(\Illuminate\Http\Request $request)
        {
            if( auth()->user()->isUser() ) 
            {
                $transactions = \VanguardLTE\Transaction::where('user_id', auth()->user()->id)->orderBy('created_at', 'DESC');
            }
            else
            {
                $transactions = \VanguardLTE\Transaction::orderBy('created_at', 'DESC');
            }
            if( $request->user_id != '' ) 
            {
                $transactions = $transactions->where('user_id', $request->user_id);
            }
            $transactions = $transactions->paginate(100000);
            return $this->respondWithPagination($transactions, new \VanguardLTE\Transformers\TransactionTransformer());
        }
    }

}
