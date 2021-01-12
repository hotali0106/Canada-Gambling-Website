<?php 
namespace VanguardLTE\Http\Controllers\Api\Games
{
    class GamesController extends \VanguardLTE\Http\Controllers\Api\ApiController
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
            $games = \VanguardLTE\Game::select('games.*')->orderBy('created_at', 'DESC');
            if( $request->id != '' ) 
            {
                $games = $games->where('id', $request->id);
            }
            if( $request->name != '' ) 
            {
                $names = explode('|', $request->name);
                $games = $games->whereIn('name', (array)$names);
            }
            if( $request->search != '' ) 
            {
                $games = $games->where('title', 'like', '%' . $request->search . '%');
            }
            if( $request->shop_id != '' ) 
            {
                $games = $games->where('shop_id', $request->shop_id);
            }
            if( $request->device != '' ) 
            {
                $devices = explode('|', $request->device);
                $games = $games->whereIn('device', (array)$devices);
            }
            if( $request->view != '' ) 
            {
                $games = $games->where('view', $request->view);
            }
            if( $request->category != '' ) 
            {
                $categories = explode('|', $request->category);
                foreach( $categories as $cat ) 
                {
                    $inner = \VanguardLTE\Category::where([
                        'parent' => $cat, 
                        'shop_id' => auth()->user()->shop_id
                    ])->get();
                    if( $inner ) 
                    {
                        $categories = array_merge($categories, $inner->pluck('id')->toArray());
                    }
                }
                $games = $games->join('game_categories', 'game_categories.game_id', '=', 'games.id');
                $games = $games->whereIn('game_categories.category_id', (array)$categories);
            }
            $games = $games->paginate(100000);
            return $this->respondWithPagination($games, new \VanguardLTE\Transformers\GameTransformer());
        }
        public function go(\Illuminate\Http\Request $request, $game)
        {
            $userId = auth()->user()->id;
            $object = '\VanguardLTE\Games\\' . $game . '\SlotSettings';
            $slot = new $object($game, $userId);
            $game = \VanguardLTE\Game::where('name', $game)->first();
            $is_api = true;
            return view('frontend.games.list.' . $game->name, compact('slot', 'game', 'is_api'));
        }
        public function server(\Illuminate\Http\Request $request, $game)
        {
            $userId = auth()->user()->id;
            $object = '\VanguardLTE\Games\\' . $game . '\Server';
            $server = new $object();
            echo $server->get($request, $game, $userId);
        }
    }

}
