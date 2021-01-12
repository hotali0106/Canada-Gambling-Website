<?php 
namespace VanguardLTE\Http\Controllers\Web\Frontend
{
    class GamesController extends \VanguardLTE\Http\Controllers\Controller
    {
        public function index(\Illuminate\Http\Request $request, $category1 = '', $category2 = '')
        {
/*            $checked = new \VanguardLTE\Lib\LicenseDK();
            $license_notifications_array = $checked->aplVerifyLicenseDK(null, 0);
            if( $license_notifications_array['notification_case'] != 'notification_license_ok' ) 
            {
                return redirect()->route('frontend.page.error_license');
            }
            if( !$this->security() ) 
            {
                return redirect()->route('frontend.page.error_license');
            }*/
            if( \Illuminate\Support\Facades\Auth::check() && !\Illuminate\Support\Facades\Auth::user()->hasRole('user') ) 
            {
                return redirect()->route('backend.dashboard');
            }
            if( !\Illuminate\Support\Facades\Auth::check() ) 
            {
                return redirect()->route('frontend.auth.login');
            }
            $categories = [];
            $game_ids = [];
            $cat1 = false;
            $title = trans('app.games');
            $body = '';
            $keywords = '';
            $description = '';
            $shop_id = (\Illuminate\Support\Facades\Auth::check() ? \Illuminate\Support\Facades\Auth::user()->shop_id : 0);
            $shop = \VanguardLTE\Shop::find($shop_id);
            $games = \VanguardLTE\Game::where([
                'view' => 1, 
                'shop_id' => $shop_id
            ]);
            $frontend = 'Default';
            if( $shop_id && $shop ) 
            {
                $frontend = $shop->frontend;
            }
            if( $category1 == '' ) 
            {
                if( $currentCategory = $request->cookie('currentCategory') ) 
                {
                    $category = \VanguardLTE\Category::where([
                        'href' => $currentCategory, 
                        'shop_id' => $shop_id
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
                    'shop_id' => $shop_id
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
                    'shop_id' => $shop_id
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
                        'shop_id' => $shop_id
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
                        'shop_id' => $shop_id
                    ])->pluck('id')->toArray();
                    $categories[] = $cat1->id;
                }
                else
                {
                    $categories = \VanguardLTE\Category::where([
                        'parent' => 0, 
                        'shop_id' => $shop_id
                    ])->pluck('id')->toArray();
                }
                if( $frontend == 'Amatic' ) 
                {
                    $Amatic = \VanguardLTE\Category::where([
                        'title' => 'Amatic', 
                        'shop_id' => $shop_id
                    ])->first();
                    if( $Amatic ) 
                    {
                        $categories = \VanguardLTE\Category::where([
                            'parent' => $Amatic->id, 
                            'shop_id' => $shop_id
                        ])->pluck('id')->toArray();
                        $categories[] = $Amatic->id;
                    }
                }
                if( $frontend == 'NetEnt' ) 
                {
                    $Amatic = \VanguardLTE\Category::where([
                        'title' => 'NetEnt', 
                        'shop_id' => $shop_id
                    ])->first();
                    if( $Amatic ) 
                    {
                        $categories = \VanguardLTE\Category::where([
                            'parent' => $Amatic->id, 
                            'shop_id' => $shop_id
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
            if( $shop ) 
            {
                switch( $shop->orderby ) 
                {
                    case 'AZ':
                        $games = $games->orderBy('name', 'ASC');
                        break;
                    case 'Rand':
                        $games = $games->inRandomOrder();
                        break;
                    case 'RTP':
                        $games = $games->orderBy(\DB::raw('CASE WHEN(stat_in > 0) THEN(stat_out*100)/stat_in ELSE 0 END '), 'DESC');
                        break;
                    case 'Count':
                        $games = $games->orderBy('bids', 'DESC');
                        break;
                    case 'Date':
                        $games = $games->orderBy('created_at', 'DESC');
                        break;
                }
            }
            $games = $games->get();
            $jpgs = \VanguardLTE\JPG::where('shop_id', $shop_id)->get();
            $categories = false;
            $currentSliderNum = -1;
            if( $games ) 
            {
                $cat_ids = \VanguardLTE\GameCategory::whereIn('game_id', \VanguardLTE\Game::where([
                    'view' => 1, 
                    'shop_id' => $shop_id
                ])->pluck('id'))->groupBy('category_id')->pluck('category_id');
                if( count($cat_ids) ) 
                {
                    $categories = \VanguardLTE\Category::whereIn('id', $cat_ids)->get();
                    if( $category1 != '' ) 
                    {
                        foreach( $categories as $index => $cat ) 
                        {
                            if( $cat->href == $category1 ) 
                            {
                                $currentSliderNum = $cat->href;
                                break;
                            }
                        }
                    }
                }
            }
            if( settings('use_all_categories') && $category1 == 'all' ) 
            {
                $currentSliderNum = 'all';
            }
            return view('frontend.' . $frontend . '.games.list', compact('games', 'category1', 'cat1', 'categories', 'currentSliderNum', 'title', 'body', 'keywords', 'description', 'jpgs', 'shop', 'devices'));
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
            $shop_id = (\Illuminate\Support\Facades\Auth::check() ? \Illuminate\Support\Facades\Auth::user()->shop_id : 0);
            $frontend = 'Default';
            if( $shop_id ) 
            {
                $shop = \VanguardLTE\Shop::find($shop_id);
                if( $shop ) 
                {
                    $frontend = $shop->frontend;
                }
            }
            $query = (isset($request->q) ? $request->q : '');
            $games = \VanguardLTE\Game::where('view', 1);
            $games = $games->where('shop_id', $shop_id);
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
        public function go(\Illuminate\Http\Request $request, $game)
        {
            if( \Illuminate\Support\Facades\Auth::check() && !\Illuminate\Support\Facades\Auth::user()->hasRole('user') ) 
            {
                return redirect()->route('backend.dashboard');
            }
            if( !\Illuminate\Support\Facades\Auth::check() ) 
            {
                return redirect()->route('frontend.auth.login');
            }
            $detect = new \Detection\MobileDetect();
            $userId = \Illuminate\Support\Facades\Auth::id();
            $object = '\VanguardLTE\Games\\' . $game . '\SlotSettings';
            $slot = new $object($game, $userId);
            $game = \VanguardLTE\Game::where([
                'name' => $game, 
                'shop_id' => \Illuminate\Support\Facades\Auth::user()->shop_id
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
            if( \Illuminate\Support\Facades\Auth::check() && !\Illuminate\Support\Facades\Auth::user()->hasRole('user') ) 
            {
                echo '{"responseEvent":"error","responseType":"start","serverResponse":"Wrong User"}';
                exit();
            }
            if( !\Illuminate\Support\Facades\Auth::check() ) 
            {
            }
            $GLOBALS['rgrc'] = config('app.salt');
            $userId = \Illuminate\Support\Facades\Auth::id();
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
