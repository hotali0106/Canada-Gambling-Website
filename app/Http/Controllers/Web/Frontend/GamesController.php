<?php 
namespace VanguardLTE\Http\Controllers\Web\Frontend
{
    class GamesController extends \VanguardLTE\Http\Controllers\Controller
    {
        public function index(\Illuminate\Http\Request $request, $category1 = '', $category2 = '')
        {
/*          $checked = new \VanguardLTE\Lib\LicenseDK();
            $license_notifications_array = $checked->aplVerifyLicenseDK(null, 0);
            if( $license_notifications_array['notification_case'] != 'notification_license_ok' ) 
            {
                return redirect()->route('frontend.page.error_license');
            }
            if( !$this->security() ) 
            {
                return redirect()->route('frontend.page.error_license');
            }*/
            /*
            if( \Illuminate\Support\Facades\Auth::check() && !\Illuminate\Support\Facades\Auth::user()->hasRole('user') ) 
            {
                return redirect()->route('backend.dashboard');
            }
            if( !\Illuminate\Support\Facades\Auth::check() ) 
            {
                return redirect()->route('frontend.auth.login');
            }
            */
            $search_game = $request->search_game;
            $login_result = $request->login;
            $categories = [];
            $game_ids = [];
            $cat1 = false;
            $title = trans('app.games');
            $body = '';
            $keywords = '';
            $description = '';
            $games = \VanguardLTE\Game::where([
                'view' => 1, 
            ]);
            $frontend = 'Default';
            if( $category1 == '' ) 
            {
                if( $currentCategory = $request->cookie('currentCategory') ) 
                {
                    $category = \VanguardLTE\Category::where([
                        'href' => $currentCategory, 
                    ])->first();
                    if( $category ) 
                    {
                        $category1 = $category->href;
                        return redirect()->route('frontend.game.list.category', [
                            'category1' => $category1, 
                            'page' => $request->cookie('currentPage')
                        ]);
                    }
                }
                if( settings('use_all_categories') ) 
                {
                    return redirect()->route('frontend.game.list.category', [
                        'category1' => 'all', 
                        'page' => $request->cookie('currentPage')
                    ]);
                }
                $category = \VanguardLTE\Category::where([
                    'parent' => 0, 
                ])->orderBy('position')->first();
                if( $category ) 
                {
                    $category1 = $category->href;
                    return redirect()->route('frontend.game.list.category', $category1);
                }
            }
            \Illuminate\Support\Facades\Cookie::queue('currentCategory', $category1, 2678400);
            if( $category1 != '' ) 
            {
                $cat1 = \VanguardLTE\Category::where([
                    'href' => $category1, 
                ])->first();
                if( !$cat1 && $category1 != 'all' ) 
                {
                    abort(404);
                }
                if( $category2 != '' ) 
                {
                    $cat2 = \VanguardLTE\Category::where([
                        'href' => $category2, 
                        'parent' => $cat1->id, 
                    ])->first();
                    if( !$cat2 ) 
                    {
                        abort(404);
                    }
                    $categories[] = $cat2->id;
                }
                else if( $category1 != 'all' ) 
                {
                    $categories = \VanguardLTE\Category::where([
                        'parent' => $cat1->id, 
                    ])->pluck('id')->toArray();
                    $categories[] = $cat1->id;
                }
                else
                {
                    $categories = \VanguardLTE\Category::where([
                        'parent' => 0, 
                    ])->pluck('id')->toArray();
                }
                if( $frontend == 'Amatic' ) 
                {
                    $Amatic = \VanguardLTE\Category::where([
                        'title' => 'Amatic', 
                    ])->first();
                    if( $Amatic ) 
                    {
                        $categories = \VanguardLTE\Category::where([
                            'parent' => $Amatic->id, 
                        ])->pluck('id')->toArray();
                        $categories[] = $Amatic->id;
                    }
                }
                if( $frontend == 'NetEnt' ) 
                {
                    $Amatic = \VanguardLTE\Category::where([
                        'title' => 'NetEnt', 
                    ])->first();
                    if( $Amatic ) 
                    {
                        $categories = \VanguardLTE\Category::where([
                            'parent' => $Amatic->id, 
                        ])->pluck('id')->toArray();
                        $categories[] = $Amatic->id;
                    }
                }
                $game_ids = \VanguardLTE\GameCategory::whereIn('category_id', $categories)->groupBy('game_id')->pluck('game_id')->toArray();
                if( count($game_ids) > 0 ) 
                {
                    $games = $games->whereIn('id', $game_ids);
                }
                else
                {
                    $games = $games->where('id', 0);
                }
            }

            $newgames = \VanguardLTE\Game::leftJoin('game_categories','game_categories.game_id','=','games.id')
                                        ->leftJoin('categories','categories.id','=','game_categories.category_id')
                                        ->where('categories.Title','New')
                                        ->take(20);
                                        

            $hotgames = \VanguardLTE\Game::leftJoin('game_categories','game_categories.game_id','=','games.id')
                                        ->leftJoin('categories','categories.id','=','game_categories.category_id')
                                        ->where('categories.Title','Hot')
                                        ->take(20);

            $detect = new \Detection\MobileDetect();
            $devices = [];
            if( $detect->isMobile() || $detect->isTablet() ) 
            {
                $games = $games->whereIn('device', [
                    0, 
                    2
                ]);
                $newgames = $newgames->whereIn('device', [
                    0, 
                    2
                ]);
                $hotgames = $hotgames->whereIn('device', [
                    0, 
                    2
                ]);
                $devices = [
                    0, 
                    2
                ];
            }
            else
            {
                $games = $games->whereIn('device', [
                    1, 
                    2
                ]);
                $newgames = $newgames->whereIn('device', [
                    1, 
                    2
                ]);
                $hotgames = $hotgames->whereIn('device', [
                    1, 
                    2
                ]);
                $devices = [
                    1, 
                    2
                ];
            }
            
            if($search_game){
                $games = $games->where('name','like','%'.$search_game.'%')->get();
            }else{
                $games = $games->take(20)->get();
            }
            $hotgames = $hotgames->get();
            $newgames = $newgames->get();

            $jpgs = \VanguardLTE\JPG::get();
            $categories = false;
            $currentSliderNum = -1;
            $currentListTitle = "";
            if( $games ) 
            {
                $cat_ids = \VanguardLTE\GameCategory::whereIn('game_id', \VanguardLTE\Game::where([
                    'view' => 1, 
                ])->pluck('id'))->groupBy('category_id')->pluck('category_id');
                if( count($cat_ids) ) 
                {
                    $categories = \VanguardLTE\Category::whereIn('id', $cat_ids)->orderBy('position','ASC')->get();
                    if( $category1 != '' ) 
                    {
                        foreach( $categories as $index => $cat ) 
                        {
                            if( $cat->href == $category1 ) 
                            {
                                $currentSliderNum = $cat->href;
                                $currentListTitle = $cat->title;
                                break;
                            }
                        }
                    }
                }
            }
            if( settings('use_all_categories') && $category1 == 'all' ) 
            {
                $currentSliderNum = 'all';
                $currentListTitle = 'All';
            }
            
            $countrys =  \VanguardLTE\Country::orderBy('ranking','ASC')->get();
            $currencys =  \VanguardLTE\Currency::orderBy('ranking','ASC')->get();

            return view('frontend.' . $frontend . '.games.list', compact('games', 'hotgames', 'newgames','category1', 'cat1', 'categories', 'currentSliderNum', 'currentListTitle','title', 'body', 'keywords', 'description', 'jpgs', 'devices', 'countrys', 'currencys','search_game','login_result'));
        }
        public function loadmore(\Illuminate\Http\Request $request){
            $gametype = $request->type;
            $category = $request->category;
            
            $games = \VanguardLTE\Game::leftJoin('game_categories','game_categories.game_id','=','games.id')
                                      ->leftJoin('categories','categories.id','=','game_categories.category_id');
            if($gametype == "HOT"){
                $page = $request->pagehot;
                $games = $games->where('categories.Title','Hot')->skip($page*20)->take(20);
            }
            else if($gametype == "NEW"){
                $page = $request->pagenew;
                $games = $games->where('categories.Title','New')->skip($page*20)->take(20);
            }
            else if($gametype == "GAME"){
                $page = $request->pagegame;

                if($category == "All"){
                    $games = $games->skip($page*20)->take(20);
                }else{
                    $games = $games->where('categories.Title', $category)->skip($page*20)->take(20);
                }
            }
          
            $detect = new \Detection\MobileDetect();
            $devices = [];
            if( $detect->isMobile() || $detect->isTablet() ) 
            {
                $games = $games->whereIn('device', [
                    0, 
                    2
                ]);
                $devices = [
                    0, 
                    2
                ];
            }
            else
            {
                $games = $games->whereIn('device', [
                    1, 
                    2
                ]);
                $devices = [
                    1, 
                    2
                ];
            }
            $games = $games->get();
          
            return response(json_encode([
                'type' => $gametype,
                'result' => $games 
            ]));
        }
        public function setpage(\Illuminate\Http\Request $request)
        {
            $cookie = cookie('currentPage', $request->page, 2678400);
            return response()->json([
                'success' => true, 
                'page' => $request->page
            ])->cookie($cookie);
        }
        public function search(\Illuminate\Http\Request $request)
        {
            if( \Illuminate\Support\Facades\Auth::check() && !\Illuminate\Support\Facades\Auth::user()->hasRole('user') ) 
            {
                return redirect()->route('backend.dashboard');
            }
            if( !\Illuminate\Support\Facades\Auth::check() ) 
            {
                return redirect()->route('frontend.auth.login');
            }
            $frontend = 'Default';
            
            $query = (isset($request->q) ? $request->q : '');
            $games = \VanguardLTE\Game::where('view', 1);
            $games = $games->where('name', 'like', '%' . $query . '%');
            $detect = new \Detection\MobileDetect();
            if( $detect->isMobile() || $detect->isTablet() ) 
            {
                $games = $games->whereIn('device', [
                    0, 
                    2
                ]);
            }
            else
            {
                $games = $games->whereIn('device', [
                    1, 
                    2
                ]);
            }
            $games = $games->orderBy('name', 'ASC');
            $games = $games->get();
            return view('frontend.' . $frontend . '.games.search', compact('games'));
        }
        public function go(\Illuminate\Http\Request $request, $game, $prego='')
        {
            if($prego == ''){
                if( \Illuminate\Support\Facades\Auth::check() && !\Illuminate\Support\Facades\Auth::user()->hasRole('user') ) 
                {
                    return redirect()->route('backend.dashboard');
                }
                if( !\Illuminate\Support\Facades\Auth::check() ) 
                {
                    return redirect()->route('frontend.auth.login');
                }
                $userId = \Illuminate\Support\Facades\Auth::id();
                $request->session()->put('freeUserID', 0);
            }else{
                $freeUser = \VanguardLTE\User::orderBy('last_login', 'asc')->first();
                if(!isset($freeUser)){
                    $userId = 1;
                }else{
                    $freeUser->update([
                        'balance' => 10000, 
                        'count_balance' => 10000,
                        'last_login' => new \DateTime("now", new \DateTimeZone("UTC")),
                        'session' => ''
                    ]);
                    $userId = $freeUser->id;
                }
                $request->session()->put('freeUserID', $userId);
            }
            
            $detect = new \Detection\MobileDetect();
            $object = '\VanguardLTE\Games\\' . $game . '\SlotSettings';
            $slot = new $object($game, $userId);
            $game = \VanguardLTE\Game::where([
                'name' => $game, 
            ]);
            if( $detect->isMobile() || $detect->isTablet() ) 
            {
                $game = $game->whereIn('device', [
                    0, 
                    2
                ]);
            }
            else
            {
                $game = $game->whereIn('device', [
                    1, 
                    2
                ]);
            }
            $game = $game->first();
            if( !$game ) 
            {
                return redirect()->route('frontend.game.list');
            }
            if( !$game->view ) 
            {
                return redirect()->route('frontend.game.list');
            }
            $is_api = false;
            return view('frontend.games.list.' . $game->name, compact('slot', 'game', 'is_api'));
        }
        public function server(\Illuminate\Http\Request $request, $game)
        {
            $GLOBALS['rgrc'] = config('app.salt');
            if($request->session()->get('freeUserID', 0) == 0){
                if( \Illuminate\Support\Facades\Auth::check() && !\Illuminate\Support\Facades\Auth::user()->hasRole('user') ) 
                {
                    echo '{"responseEvent":"error","responseType":"start","serverResponse":"Wrong User"}';
                    exit();
                }
                if( !\Illuminate\Support\Facades\Auth::check() ) 
                {
                }
                $userId = \Illuminate\Support\Facades\Auth::id();
            }else{
                $userId = $request->session()->get('freeUserID', 0);
            }
            
            $object = '\VanguardLTE\Games\\' . $game . '\Server';
            $server = new $object();
            echo $server->get($request, $game, $userId);
        }
/*        public function security()
        {
            if( config('LicenseDK.APL_INCLUDE_KEY_CONFIG') != 'wi9qydosuimsnls5zoe5q298evkhim0ughx1w16qybs2fhlcpn' ) 
            {
                return false;
            }
            if( md5_file(base_path() . '/app/Lib/LicenseDK.php') != '3c5aece202a4218a19ec8c209817a74e' ) 
            {
                return false;
            }
            if( md5_file(base_path() . '/config/LicenseDK.php') != '951a0e23768db0531ff539d246cb99cd' ) 
            {
                return false;
            }
            return true;
        }*/
    }

}
namespace 
{
    function onkXppk3PRSZPackRnkDOJaZ9()
    {
        return 'OkBM2iHjbd6FHZjtvLpNHOc3lslbxTJP6cqXsMdE4evvckFTgS';
    }

}
