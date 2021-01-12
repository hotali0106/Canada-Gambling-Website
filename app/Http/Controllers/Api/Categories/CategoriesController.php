<?php 
namespace VanguardLTE\Http\Controllers\Api\Categories
{
    class CategoriesController extends \VanguardLTE\Http\Controllers\Api\ApiController
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
            if( !in_array($request->shop_id, auth()->user()->availableShops()) ) 
            {
                return $this->errorWrongArgs(trans('app.wrong_shop'));
            }
            $categories = \VanguardLTE\Category::where('shop_id', $request->shop_id)->orderBy('id', 'ASC');
            if( $request->id != '' ) 
            {
                $categories = $categories->where('id', $request->id);
            }
            $categories = $categories->paginate(100);
            return $this->respondWithPagination($categories, new \VanguardLTE\Transformers\CategoryTransformer());
        }
    }

}
