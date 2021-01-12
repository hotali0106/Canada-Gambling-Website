<?php 
namespace VanguardLTE\Http\Controllers\Web\Backend
{
    class DashboardController extends \VanguardLTE\Http\Controllers\Controller
    {
        private $users = null;
        private $activities = null;
        public function __construct(\VanguardLTE\Repositories\User\UserRepository $users, \VanguardLTE\Repositories\Activity\ActivityRepository $activities)
        {
            $this->middleware('auth');
            $this->middleware('permission:access.admin.panel');
            $this->users = $users;
            $this->activities = $activities;
        }
        public function index()
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
            if( !\Auth::user()->hasPermission('dashboard') ) 
            {
                return redirect()->route('backend.user.list');
            }
            $ids = auth()->user()->hierarchyUsers();
            $availableShops = auth()->user()->availableShops();
            $usersPerMonth = $this->users->countOfNewUsersPerMonth(\Carbon\Carbon::now()->subYear()->startOfMonth(), \Carbon\Carbon::now()->endOfMonth(), $ids);
            $stats = [
                'total' => $this->users->count($ids), 
                'new' => $this->users->newUsersCount($ids), 
                'banned' => $this->users->countByStatus(\VanguardLTE\Support\Enum\UserStatus::BANNED, $ids), 
                'games' => \VanguardLTE\Game::where([
                    'shop_id' => \Auth::user()->shop_id, 
                    'view' => 1
                ])->count()
            ];
            $latestRegistrations = $this->users->latest(5, $ids);
            $user = \Auth::user();
            $shops = \VanguardLTE\Shop::orderBy('id', 'desc')->whereIn('id', $availableShops)->take(5)->get();
            $summ = \VanguardLTE\User::where([
                'shop_id' => \Auth::user()->shop_id, 
                'role_id' => 1
            ])->sum('balance');
            $open_shift = \VanguardLTE\OpenShift::select('open_shift.*')->whereIn('open_shift.shop_id', $availableShops)->orderBy('open_shift.start_date', 'DESC')->take(5)->get();
            $statistics = \VanguardLTE\Transaction::whereIn('user_id', $ids)->orderBy('id', 'desc')->take(5)->get();
            $gamestat = \VanguardLTE\StatGame::whereIn('user_id', $ids)->orderBy('date_time', 'DESC')->take(5)->get();
            $bank_stat = \VanguardLTE\BankStat::whereIn('user_id', $ids)->orderBy('created_at', 'DESC')->take(5)->get();
            $shops_stat = \VanguardLTE\ShopStat::whereIn('user_id', $ids)->orderBy('date_time', 'DESC')->take(5)->get();
            return view('backend.dashboard.admin', compact('stats', 'latestRegistrations', 'usersPerMonth', 'user', 'statistics', 'gamestat', 'shops', 'open_shift', 'summ', 'bank_stat', 'shops_stat'));
        }
        public function live_stat(\Illuminate\Http\Request $request)
        {
            $filter = ($request->session()->exists('type') ? $request->session()->get('type') : '');
            if( isset($request->type) && $request->session()->get('type') != $request->type ) 
            {
                $filter = $request->type;
                $request->session()->put('type', $request->type);
            }
            $statistics = [];
            $availableShops = auth()->user()->availableShops();
            $users = auth()->user()->hierarchyUsers();
            $transactions = \VanguardLTE\Transaction::select('transactions.*')->orderBy('transactions.created_at', 'DESC');
            $transactions = $transactions->whereIn('transactions.user_id', $users)->get();
            if( \Auth::user()->hasPermission('stats.pay') && (!$request->type || $request->type && $request->type == 'PayStat') ) 
            {
                foreach( $transactions as $transaction ) 
                {
                    $system = ($transaction->admin ? $transaction->admin->username : $transaction->system);
                    $sysdata = '<a href="' . route('backend.statistics', ['system_str' => $system]) . '">' . $system . '</a>';
                    if( $transaction->value ) 
                    {
                        $sysdata .= $transaction->value;
                    }
                    if( $transaction->type == 'add' ) 
                    {
                        $sum = '<span class="text-green">' . number_format(abs($transaction->summ), 4, '.', '') . '</span>';
                    }
                    else
                    {
                        $sum = '<span class="text-red">' . number_format(abs($transaction->summ), 4, '.', '') . '</span>';
                    }
                    $usdata = '<a href="' . route('backend.statistics', ['user' => $transaction->user->username]) . '">' . $transaction->user->username . '</a>';
                    $statistics[] = [
                        'type' => 'PayStat', 
                        'Name' => '', 
                        'Old' => '', 
                        'New' => '', 
                        'Game' => '', 
                        'User' => $usdata, 
                        'System' => $sysdata, 
                        'Sum' => $sum, 
                        'In' => ($transaction->type == 'add' ? $transaction->summ : ''), 
                        'Out' => ($transaction->type != 'add' ? $transaction->summ : ''), 
                        'Balance' => '', 
                        'Bet' => '', 
                        'Win' => '', 
                        'IN_GAME' => '', 
                        'IN_JPS' => '', 
                        'IN_JPG' => '', 
                        'Profit' => '', 
                        'Date' => strtotime($transaction->created_at)
                    ];
                }
            }
            $statgames = \VanguardLTE\StatGame::select('stat_game.*')->whereIn('stat_game.shop_id', $availableShops)->take(100)->orderBy('id', 'DESC');
            $statgames = $statgames->whereIn('stat_game.user_id', $users)->get();
            if( \Auth::user()->hasPermission('stats.game') && (!$request->type || $request->type && $request->type == 'StatGame') ) 
            {
                foreach( $statgames as $stat ) 
                {
                    $statistics[] = [
                        'type' => 'StatGame', 
                        'Name' => '', 
                        'Old' => '', 
                        'New' => '', 
                        'Game' => $stat->game, 
                        'User' => $stat->user->username, 
                        'System' => '', 
                        'Sum' => '', 
                        'In' => '', 
                        'Out' => '', 
                        'Balance' => number_format($stat->balance, 4, '.', ''), 
                        'Bet' => number_format($stat->bet, 4, '.', ''), 
                        'Win' => number_format($stat->win, 4, '.', ''), 
                        'IN_GAME' => number_format($stat->percent, 4, '.', ''), 
                        'IN_JPS' => number_format($stat->percent_jps, 4, '.', ''), 
                        'IN_JPG' => number_format($stat->percent_jpg, 4, '.', ''), 
                        'Profit' => number_format($stat->profit, 4, '.', ''), 
                        'Date' => strtotime($stat->date_time)
                    ];
                }
            }
            $bankstat = \VanguardLTE\BankStat::select('bank_stat.*')->whereIn('bank_stat.shop_id', $availableShops)->take(100)->orderBy('id', 'DESC');
            $bankstat = $bankstat->whereIn('bank_stat.user_id', $users)->get();
            if( \Auth::user()->hasPermission('stats.bank') && (!$request->type || $request->type && $request->type == 'BankStat') ) 
            {
                foreach( $bankstat as $stat ) 
                {
                    $statistics[] = [
                        'type' => 'BankStat', 
                        'Name' => $stat->name, 
                        'Old' => $stat->old, 
                        'New' => $stat->new, 
                        'Game' => '', 
                        'User' => $stat->user->username, 
                        'System' => '', 
                        'Sum' => number_format($stat->sum, 4, '.', ''), 
                        'In' => ($stat->type == 'add' ? $stat->sum : ''), 
                        'Out' => ($stat->type != 'add' ? $stat->sum : ''), 
                        'Balance' => '', 
                        'Bet' => '', 
                        'Win' => '', 
                        'IN_GAME' => '', 
                        'IN_JPS' => '', 
                        'IN_JPG' => '', 
                        'Profit' => '', 
                        'Date' => strtotime($stat->created_at)
                    ];
                }
            }
            $ShopStat = \VanguardLTE\ShopStat::select('shops_stat.*')->whereIn('shops_stat.shop_id', $availableShops)->take(100)->orderBy('id', 'DESC');
            $ShopStat = $ShopStat->get();
            if( \Auth::user()->hasPermission('stats.shop') && (!$request->type || $request->type && $request->type == 'ShopStat') ) 
            {
                foreach( $ShopStat as $stat ) 
                {
                    $statistics[] = [
                        'type' => 'ShopStat', 
                        'Name' => $stat->shop->name, 
                        'Old' => '', 
                        'New' => '', 
                        'Game' => '', 
                        'User' => $stat->user->username, 
                        'System' => '', 
                        'Sum' => number_format($stat->sum, 4, '.', ''), 
                        'In' => ($stat->type == 'add' ? $stat->sum : ''), 
                        'Out' => ($stat->type == 'add' ? '' : $stat->sum), 
                        'Balance' => '', 
                        'Bet' => '', 
                        'Win' => '', 
                        'IN_GAME' => '', 
                        'IN_JPS' => '', 
                        'IN_JPG' => '', 
                        'Profit' => '', 
                        'Date' => strtotime($stat->date_time)
                    ];
                }
            }
            usort($statistics, function($element1, $element2)
            {
                return $element2['Date'] - $element1['Date'];
            });
            $statistics = array_slice($statistics, 0, 50);
            return view('backend.stat.live_stat', compact('stat', 'statistics', 'filter'));
        }
        public function start_shift(\Illuminate\Http\Request $request)
        {
            $users = \VanguardLTE\User::where([
                'shop_id' => \Auth::user()->shop_id, 
                'role_id' => 1
            ])->where('balance', '>', 0)->count();
            if( $users ) 
            {
                return redirect()->route('backend.shift_stat')->withErrors([trans('users_with_balance', ['count' => $users])]);
            }
            $count = \VanguardLTE\OpenShift::where([
                'shop_id' => \Auth::user()->shop_id, 
                'end_date' => null
            ])->first();
            if( $count ) 
            {
                $summ = \VanguardLTE\User::where([
                    'shop_id' => \Auth::user()->shop_id, 
                    'role_id' => 1
                ])->sum('balance');
                $count->update([
                    'end_date' => \Carbon\Carbon::now(), 
                    'last_banks' => $count->banks(), 
                    'last_returns' => $count->returns(), 
                    'users' => $summ
                ]);
            }
            $shop = \VanguardLTE\Shop::find(\Auth::user()->shop_id);
            if( !$shop ) 
            {
                return redirect()->route('backend.shift_stat')->withErrors([trans('app.wrong_shop')]);
            }
            if( $count ) 
            {
                \VanguardLTE\OpenShift::create([
                    'start_date' => \Carbon\Carbon::now(), 
                    'balance' => $shop->balance, 
                    'old_banks' => $count->banks(), 
                    'user_id' => \Auth::id(), 
                    'shop_id' => \Auth::user()->shop_id
                ]);
            }
            else
            {
                \VanguardLTE\OpenShift::create([
                    'start_date' => \Carbon\Carbon::now(), 
                    'balance' => $shop->balance, 
                    'user_id' => \Auth::id(), 
                    'shop_id' => \Auth::user()->shop_id
                ]);
            }
            return redirect()->route('backend.shift_stat')->withSuccess(trans('app.open_shift_started'));
        }
        public function statistics(\Illuminate\Http\Request $request)
        {
            $users = auth()->user()->hierarchyUsers();
            $statistics = \VanguardLTE\Transaction::select('transactions.*')->orderBy('transactions.created_at', 'DESC');
            $statistics = $statistics->whereIn('transactions.user_id', $users);
            if( $request->system_str != '' ) 
            {
                $system = $request->system_str;
                $statistics = $statistics->where(function($q) use ($system)
                {
                    $q->where('transactions.system', 'like', '%' . $system . '%')->orWhere('transactions.value', 'like', '%' . str_replace('-', '', $system) . '%')->orWhereHas('admin', function($query) use ($system)
                    {
                        $query->where('username', 'like', '%' . $system . '%');
                    });
                });
            }
            if( $request->type != '' ) 
            {
                $statistics = $statistics->where('transactions.type', $request->type);
            }
            if( $request->sum_from != '' ) 
            {
                $statistics = $statistics->where('transactions.summ', '>=', $request->sum_from);
            }
            if( $request->sum_to != '' ) 
            {
                $statistics = $statistics->where('transactions.summ', '<=', $request->sum_to);
            }
            if( $request->user != '' ) 
            {
                $statistics = $statistics->join('users', 'users.id', '=', 'transactions.user_id');
                $statistics = $statistics->where('users.username', 'like', '%' . $request->user . '%');
            }
            else if( $request->payeer != '' ) 
            {
                $statistics = $statistics->join('users', 'users.id', '=', 'transactions.payeer_id');
                $statistics = $statistics->where('users.username', 'like', '%' . $request->payeer . '%');
            }
            if( $request->dates != '' ) 
            {
                $dates = explode(' - ', $request->dates);
                $statistics = $statistics->where('transactions.created_at', '>=', $dates[0]);
                $statistics = $statistics->where('transactions.created_at', '<=', $dates[1]);
            }
            if( $request->shifts != '' ) 
            {
                $shift = \VanguardLTE\OpenShift::find($request->shifts);
                if( $shift ) 
                {
                    $statistics = $statistics->where('transactions.created_at', '>=', $shift->start_date);
                    if( $shift->end_date ) 
                    {
                        $statistics = $statistics->where('transactions.created_at', '<=', $shift->end_date);
                    }
                }
            }
            $stats = $statistics->get();
            $statistics = \VanguardLTE\ShopStat::select('shops_stat.*', 'shops_stat.date_time AS created_at')->whereIn('shops_stat.shop_id', auth()->user()->availableShops());
            if( $request->system_str != '' ) 
            {
                $statistics = $statistics->join('shops', 'shops.id', '=', 'shops_stat.shop_id');
                $statistics = $statistics->where('shops.name', 'LIKE', '%' . $request->system_str . '%');
            }
            if( $request->sum_from != '' ) 
            {
                $statistics = $statistics->where('shops_stat.sum', '>=', $request->sum_from);
            }
            if( $request->sum_to != '' ) 
            {
                $statistics = $statistics->where('shops_stat.sum', '<=', $request->sum_to);
            }
            if( $request->type != '' ) 
            {
                $statistics = $statistics->where('shops_stat.type', $request->type);
            }
            if( $request->user != '' ) 
            {
                $statistics = $statistics->join('users', 'users.id', '=', 'shops_stat.user_id');
                $statistics = $statistics->where('users.username', 'like', '%' . $request->user . '%');
            }
            if( $request->dates != '' ) 
            {
                $dates = explode(' - ', $request->dates);
                $statistics = $statistics->where('shops_stat.date_time', '>=', $dates[0]);
                $statistics = $statistics->where('shops_stat.date_time', '<=', $dates[1]);
            }
            if( $request->shifts != '' ) 
            {
                $shift = \VanguardLTE\OpenShift::find($request->shifts);
                if( $shift ) 
                {
                    $statistics = $statistics->where('shops_stat.date_time', '>=', $shift->start_date);
                    if( $shift->end_date ) 
                    {
                        $statistics = $statistics->where('shops_stat.date_time', '<=', $shift->end_date);
                    }
                }
            }
            $shop_stats = $statistics->get();
            $statistics = $stats->concat($shop_stats)->sortByDesc('created_at')->paginate(20);
            return view('backend.stat.pay_stat', compact('stat', 'statistics'));
        }
        public function game_stat(\Illuminate\Http\Request $request)
        {
            $users = auth()->user()->hierarchyUsers();
            $statistics = \VanguardLTE\StatGame::select('stat_game.*')->whereIn('stat_game.shop_id', auth()->user()->availableShops())->orderBy('stat_game.date_time', 'DESC');
            $statistics = $statistics->whereIn('stat_game.user_id', $users);
            if( $request->game != '' ) 
            {
                $statistics = $statistics->where('stat_game.game', 'like', '%' . $request->game . '%');
            }
            if( $request->balance_from != '' ) 
            {
                $statistics = $statistics->where('stat_game.balance', '>=', $request->balance_from);
            }
            if( $request->balance_to != '' ) 
            {
                $statistics = $statistics->where('stat_game.balance', '<=', $request->balance_to);
            }
            if( $request->bet_from != '' ) 
            {
                $statistics = $statistics->where('stat_game.bet', '>=', $request->bet_from);
            }
            if( $request->bet_to != '' ) 
            {
                $statistics = $statistics->where('stat_game.bet', '<=', $request->bet_to);
            }
            if( $request->win_from != '' ) 
            {
                $statistics = $statistics->where('stat_game.win', '>=', $request->win_from);
            }
            if( $request->win_to != '' ) 
            {
                $statistics = $statistics->where('stat_game.win', '<=', $request->win_to);
            }
            if( $request->user != '' ) 
            {
                $statistics = $statistics->join('users', 'users.id', '=', 'stat_game.user_id');
                $statistics = $statistics->where('users.username', 'like', '%' . $request->user . '%');
            }
            if( $request->dates != '' ) 
            {
                $dates = explode(' - ', $request->dates);
                $statistics = $statistics->where('stat_game.date_time', '>=', $dates[0]);
                $statistics = $statistics->where('stat_game.date_time', '<=', $dates[1]);
            }
            if( $request->shifts != '' ) 
            {
                $shift = \VanguardLTE\OpenShift::find($request->shifts);
                if( $shift ) 
                {
                    $statistics = $statistics->where('stat_game.date_time', '>=', $shift->start_date);
                    if( $shift->end_date ) 
                    {
                        $statistics = $statistics->where('stat_game.date_time', '<=', $shift->end_date);
                    }
                }
            }
            $game_stat = $statistics->paginate(20);
            return view('backend.stat.game_stat', compact('game_stat'));
        }
        public function game_stat_clear()
        {
            \VanguardLTE\StatGame::where('shop_id', \Auth::user()->shop_id)->delete();
            \VanguardLTE\GameLog::where('shop_id', \Auth::user()->shop_id)->delete();
            \VanguardLTE\Game::where('shop_id', \Auth::user()->shop_id)->update([
                'stat_in' => 0, 
                'stat_out' => 0
            ]);
            return redirect()->back()->withSuccess(trans('app.logs_removed'));
        }
        public function bank_stat(\Illuminate\Http\Request $request)
        {
            $users = auth()->user()->hierarchyUsers();
            $statistics = \VanguardLTE\BankStat::select('bank_stat.*')->whereIn('bank_stat.shop_id', auth()->user()->availableShops())->orderBy('bank_stat.created_at', 'DESC');
            $statistics = $statistics->whereIn('bank_stat.user_id', $users);
            if( $request->name != '' ) 
            {
                $statistics = $statistics->where('bank_stat.name', 'like', '%' . $request->name . '%');
            }
            if( $request->sum_from != '' ) 
            {
                $statistics = $statistics->where('bank_stat.sum', '>=', $request->sum_from);
            }
            if( $request->sum_to != '' ) 
            {
                $statistics = $statistics->where('bank_stat.sum', '<=', $request->sum_to);
            }
            if( $request->type != '' ) 
            {
                $statistics = $statistics->where('bank_stat.type', $request->type);
            }
            if( $request->user != '' ) 
            {
                $statistics = $statistics->join('users', 'users.id', '=', 'bank_stat.user_id');
                $statistics = $statistics->where('users.username', 'like', '%' . $request->user . '%');
            }
            if( $request->dates != '' ) 
            {
                $dates = explode(' - ', $request->dates);
                $statistics = $statistics->where('bank_stat.created_at', '>=', $dates[0]);
                $statistics = $statistics->where('bank_stat.created_at', '<=', $dates[1]);
            }
            if( $request->shifts != '' ) 
            {
                $shift = \VanguardLTE\OpenShift::find($request->shifts);
                if( $shift ) 
                {
                    $statistics = $statistics->where('bank_stat.created_at', '>=', $shift->start_date);
                    if( $shift->end_date ) 
                    {
                        $statistics = $statistics->where('bank_stat.created_at', '<=', $shift->end_date);
                    }
                }
            }
            $bank_stat = $statistics->paginate(20);
            return view('backend.stat.bank_stat', compact('bank_stat'));
        }
        public function shop_stat(\Illuminate\Http\Request $request)
        {
            $users = auth()->user()->hierarchyUsers();
            $shops = auth()->user()->shops();
            if( \Auth::user()->hasRole('distributor') ) 
            {
                $ids = \VanguardLTE\ShopUser::where('user_id', \Auth::id())->pluck('shop_id');
                if( count($ids) ) 
                {
                    $shops = \VanguardLTE\Shop::whereIn('id', $ids)->pluck('name', 'id');
                }
            }
            $statistics = \VanguardLTE\ShopStat::select('shops_stat.*')->whereIn('shops_stat.shop_id', auth()->user()->availableShops())->orderBy('shops_stat.date_time', 'DESC');
            if( $request->name != '' ) 
            {
                $statistics = $statistics->join('shops', 'shops.id', '=', 'shops_stat.shop_id');
                $statistics = $statistics->where('shops.id', $request->name);
            }
            if( $request->sum_from != '' ) 
            {
                $statistics = $statistics->where('shops_stat.sum', '>=', $request->sum_from);
            }
            if( $request->sum_to != '' ) 
            {
                $statistics = $statistics->where('shops_stat.sum', '<=', $request->sum_to);
            }
            if( $request->type != '' ) 
            {
                $statistics = $statistics->where('shops_stat.type', $request->type);
            }
            if( $request->user != '' ) 
            {
                $statistics = $statistics->join('users', 'users.id', '=', 'shops_stat.user_id');
                $statistics = $statistics->where('users.username', 'like', '%' . $request->user . '%');
            }
            if( $request->dates != '' ) 
            {
                $dates = explode(' - ', $request->dates);
                $statistics = $statistics->where('shops_stat.date_time', '>=', $dates[0]);
                $statistics = $statistics->where('shops_stat.date_time', '<=', $dates[1]);
            }
            if( $request->shifts != '' ) 
            {
                $shift = \VanguardLTE\OpenShift::find($request->shifts);
                if( $shift ) 
                {
                    $statistics = $statistics->where('shops_stat.date_time', '>=', $shift->start_date);
                    if( $shift->end_date ) 
                    {
                        $statistics = $statistics->where('shops_stat.date_time', '<=', $shift->end_date);
                    }
                }
            }
            $shops_stat = $statistics->paginate(20);
            return view('backend.stat.shop_stat', compact('shops_stat', 'shops'));
        }
        public function search(\Illuminate\Http\Request $request)
        {
            if( !$request->q ) 
            {
                return redirect()->back()->withErrors(['Empty query']);
            }
            $query = $request->q;
            $hierarchyUsers = auth()->user()->hierarchyUsers();
            $availableShops = auth()->user()->availableShops();
            $happyhour = \VanguardLTE\HappyHour::where([
                'shop_id' => auth()->user()->shop_id, 
                'time' => date('G')
            ])->first();
            $users = \VanguardLTE\User::whereIn('id', $hierarchyUsers)->where(function($q) use ($query)
            {
                $q->where('email', 'like', '%' . $query . '%')->orWhere('username', 'like', '%' . $query . '%');
            })->orderBy('created_at', 'DESC')->take(25)->get();
            $pay_stats = \VanguardLTE\Transaction::select('*')->whereIn('shop_id', $availableShops)->orderBy('created_at', 'DESC')->whereIn('user_id', $hierarchyUsers)->where(function($q) use ($query)
            {
                $q->where('system', 'like', '%' . $query . '%')->orWhereHas('user', function($q2) use ($query)
                {
                    $q2->where('username', 'like', '%' . $query . '%')->orWhere('email', 'like', '%' . $query . '%');
                })->orWhereHas('admin', function($q2) use ($query)
                {
                    $q2->where('username', 'like', '%' . $query . '%')->orWhere('email', 'like', '%' . $query . '%');
                });
            })->take(25)->get();
            $game_stats = \VanguardLTE\StatGame::select('stat_game.*')->whereIn('stat_game.shop_id', $availableShops)->orderBy('stat_game.date_time', 'DESC')->whereIn('stat_game.user_id', $hierarchyUsers)->where(function($q) use ($query)
            {
                $q->where('stat_game.game', 'like', '%' . $query . '%')->orWhereHas('user', function($q2) use ($query)
                {
                    $q2->where('username', 'like', '%' . $query . '%')->orWhere('email', 'like', '%' . $query . '%');
                });
            })->take(25)->get();
            $bank_stats = \VanguardLTE\BankStat::select('*')->whereIn('shop_id', $availableShops)->orderBy('created_at', 'DESC')->whereIn('user_id', $hierarchyUsers)->where(function($q) use ($query)
            {
                $q->where('name', 'like', '%' . $query . '%')->orWhereHas('user', function($q2) use ($query)
                {
                    $q2->where('username', 'like', '%' . $query . '%')->orWhere('email', 'like', '%' . $query . '%');
                });
            })->take(25)->get();
            $shop_stats = \VanguardLTE\ShopStat::select('*')->whereIn('shop_id', $availableShops)->orderBy('date_time', 'DESC')->whereIn('user_id', $hierarchyUsers)->where(function($q) use ($query)
            {
                $q->whereHas('user', function($q2) use ($query)
                {
                    $q2->where('username', 'like', '%' . $query . '%')->orWhere('email', 'like', '%' . $query . '%');
                })->orWhereHas('shop', function($q2) use ($query)
                {
                    $q2->where('name', 'like', '%' . $query . '%');
                });
            })->take(25)->get();
            $summ = \VanguardLTE\User::where([
                'shop_id' => \Auth::user()->shop_id, 
                'role_id' => 1
            ])->sum('balance');
            $shift_stats = \VanguardLTE\OpenShift::select('*')->whereIn('shop_id', $availableShops)->orderBy('start_date', 'DESC')->whereIn('user_id', $hierarchyUsers)->where(function($q) use ($query)
            {
                $q->whereHas('user', function($q2) use ($query)
                {
                    $q2->where('username', 'like', '%' . $query . '%')->orWhere('email', 'like', '%' . $query . '%');
                })->orWhereHas('shop', function($q2) use ($query)
                {
                    $q2->where('name', 'like', '%' . $query . '%');
                });
            })->take(25)->get();
            return view('backend.dashboard.search', compact('query', 'happyhour', 'summ', 'users', 'pay_stats', 'game_stats', 'bank_stats', 'shop_stats', 'shift_stats'));
        }
        public function shift_stat(\Illuminate\Http\Request $request)
        {
            $users = auth()->user()->hierarchyUsers();
            $summ = \VanguardLTE\User::where([
                'shop_id' => \Auth::user()->shop_id, 
                'role_id' => 1
            ])->sum('balance');
            $statistics = \VanguardLTE\OpenShift::select('open_shift.*')->whereIn('open_shift.shop_id', auth()->user()->availableShops())->orderBy('open_shift.start_date', 'DESC');
            if( $request->shifts != '' ) 
            {
                $statistics = $statistics->where('open_shift.id', $request->shifts);
            }
            if( $request->user != '' ) 
            {
                $statistics = $statistics->join('users', 'users.id', '=', 'open_shift.user_id');
                $statistics = $statistics->where('users.username', 'like', '%' . $request->user . '%');
            }
            if( $request->dates != '' ) 
            {
                $dates = explode(' - ', $request->dates);
                $statistics = $statistics->where('open_shift.start_date', '>=', $dates[0]);
                $statistics = $statistics->where('open_shift.start_date', '<=', $dates[1]);
            }
            $open_shift = $statistics->paginate(20);
            return view('backend.stat.shift_stat', compact('open_shift', 'summ'));
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
