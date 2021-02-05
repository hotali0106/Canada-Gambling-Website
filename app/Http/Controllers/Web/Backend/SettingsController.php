<?php 
namespace VanguardLTE\Http\Controllers\Web\Backend
{
    class SettingsController extends \VanguardLTE\Http\Controllers\Controller
    {
        public function __construct()
        {
            $this->middleware('auth');
            $this->middleware('permission:access.admin.panel');
            $this->middleware('shopzero');
        }
        public function general()
        {
            $directories = [];
            foreach( glob(public_path() . '/frontend/*', GLOB_ONLYDIR) as $fileinfo ) 
            {
                $dirname = basename($fileinfo);
                $directories[$dirname] = $dirname;
            }
            return view('backend.settings.general', compact('directories'));
        }
        public function auth()
        {
            return view('backend.settings.auth');
        }
        public function update(\Illuminate\Http\Request $request, \VanguardLTE\Repositories\Session\SessionRepository $sessionRepository)
        {
            $this->updateSettings($request->except('_token'));
            if( $request->siteisclosed ) 
            {
                $users = \VanguardLTE\User::where('role_id', '!=', 6)->get();
                foreach( $users as $user ) 
                {
                    $sessionRepository->invalidateAllSessionsForUser($user->id);
                }
            }
            return back()->withSuccess(trans('app.settings_updated'));
        }
        private function updateSettings($input)
        {
            foreach( $input as $key => $value ) 
            {
                \Settings::set($key, $value);
            }
            \Settings::save();
            event(new \VanguardLTE\Events\Settings\Updated());
        }
        public function generator(\Illuminate\Http\Request $request)
        {
            $view = [
                '1' => 'Active', 
                '0' => 'Disabled'
            ];
            $device = [
                'Mobile', 
                'Desktop', 
                'Mobile + Desktop'
            ];
            $games = \VanguardLTE\Game::get()->pluck('name');
            $jackpots = \VanguardLTE\JPG::get()->pluck('name', 'id');
            $categories = \VanguardLTE\Category::where([
                'parent' => 0, 
            ])->get();
            $api = [];
            $text = '';
            if( $request->isMethod('post')) 
            {
                $text .= ('$apiServer="' . $request->root() . '";' . "\n");
                $text .= ('$apiKey="key=' . $request->key . '";' . "\n");
                $text .= '$apiGames="';
                $apiGames = '';
                if( $request->categories_ids ) 
                {
                    $apiGames .= ('&category=' . implode('|', (array)$request->categories_ids));
                }
                if( $request->view ) 
                {
                    $apiGames .= ('&view=' . $request->view);
                }
                if( $request->device ) 
                {
                    $apiGames .= ('&device=' . implode('|', (array)$request->device));
                }
                if( $request->game_ids ) 
                {
                    $apiGames .= ('&name=' . implode('|', (array)$request->game_ids));
                }
                $apiGames = trim($apiGames, '&');
                $text .= $apiGames;
                $text .= '";';
                $text .= "\n";
                $text .= '$apiJP="';
                if( $request->jackpot_ids ) 
                {
                    $text .= ('id=' . implode('|', (array)$request->jackpot_ids));
                }
                $text .= '";';
                $text .= "\n";
            }
            return view('backend.settings.generator', compact('jackpots', 'games', 'categories', 'text', 'view', 'device', 'api'));
        }
        public function sync()
        {
            if( !\Auth::user()->hasRole('admin') ) 
            {
                return redirect()->back()->withErrors([trans('app.no_permission')]);
            }
            \VanguardLTE\Jobs\StartSync::dispatch();
            return redirect()->route('backend.settings.general')->withSuccess(trans('app.games_sync_started'));
        }
        public function shop_block(\Illuminate\Http\Request $request, \VanguardLTE\Repositories\Session\SessionRepository $sessionRepository)
        {
            $users = \VanguardLTE\User::whereIn('role_id', [
                1, 
                2, 
                3
            ])->get();
            if( $users ) 
            {
                foreach( $users as $user ) 
                {
                    $sessions = $sessionRepository->getUserSessions($user->id);
                    if( count($sessions) ) 
                    {
                        foreach( $sessions as $session ) 
                        {
                            $sessionRepository->invalidateSession($session->id);
                        }
                    }
                }
            }
            return back()->withSuccess(trans('app.settings_updated'));
        }
        public function shop_unblock(\Illuminate\Http\Request $request)
        {
            return back()->withSuccess(trans('app.settings_updated'));
        }
    }

}
