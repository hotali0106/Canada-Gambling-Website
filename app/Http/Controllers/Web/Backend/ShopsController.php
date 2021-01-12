<?php 
namespace VanguardLTE\Http\Controllers\Web\Backend
{
    class ShopsController extends \VanguardLTE\Http\Controllers\Controller
    {
        private $max_shops = 1000;
        public function __construct()
        {
            $this->middleware('auth');
            $this->middleware('permission:access.admin.panel');
            $this->middleware('permission:shops.manage');
        }
        public function index(\Illuminate\Http\Request $request)
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
            $shops = \VanguardLTE\Shop::select('shops.*', 'shops.id AS shop_id');
            if( $shopIds = auth()->user()->shops(true) ) 
            {
                $shops = $shops->whereIn('shops.id', $shopIds);
            }
            else
            {
                $shops = $shops->where('shops.id', 0);
            }
            if( $request->name != '' ) 
            {
                $shops = $shops->where('shops.name', $request->name);
            }
            if( $request->credit_from != '' ) 
            {
                $shops = $shops->where('shops.credit', '>=', $request->credit_from);
            }
            if( $request->credit_to != '' ) 
            {
                $shops = $shops->where('shops.credit', '<=', $request->credit_to);
            }
            if( $request->frontend != '' ) 
            {
                $shops = $shops->where('shops.frontend', $request->frontend);
            }
            if( $request->percent_from != '' ) 
            {
                $shops = $shops->where('shops.percent', '>=', $request->percent_from);
            }
            if( $request->percent_to != '' ) 
            {
                $shops = $shops->where('shops.percent', '<=', $request->percent_to);
            }
            if( $request->order != '' ) 
            {
                $shops = $shops->where('shops.orderby', $request->order);
            }
            if( $request->currency != '' ) 
            {
                $shops = $shops->where('shops.currency', $request->currency);
            }
            if( $request->status != '' ) 
            {
                $shops = $shops->where('shops.status', $request->status);
            }
            if( $request->categories ) 
            {
                $shops = $shops->join('shop_categories', 'shop_categories.shop_id', '=', 'shops.id');
                $shops = $shops->whereIn('shop_categories.category_id', $request->categories);
            }
            if( $request->users != '' ) 
            {
                $shops = $shops->join('shops_user', 'shops_user.shop_id', '=', 'shops.id');
                $shops = $shops->where('shops_user.user_id', $request->users);
            }
            $shops = $shops->paginate(25);
            $categories = \VanguardLTE\Category::where([
                'parent' => 0, 
                'shop_id' => auth()->user()->shop_id
            ])->get();
            $stats = [
                'shops' => $shops->count(), 
                'agents' => 1, 
                'distributors' => 0, 
                'managers' => 0, 
                'cashiers' => 0, 
                'users' => 0, 
                'credit' => $shops->sum('balance')
            ];
            $countAgents = [];
            $countDistributors = [];
            if( $shops ) 
            {
                foreach( $shops as $shop ) 
                {
                    if( $shop->users ) 
                    {
                        foreach( $shop->users as $user ) 
                        {
                            if( $user->user->hasRole('agent') ) 
                            {
                                $countAgents[$user->user->username] = 1;
                            }
                            if( $user->user->hasRole('distributor') ) 
                            {
                                $countDistributors[$user->user->username] = 1;
                            }
                            if( $user->user->hasRole('manager') ) 
                            {
                                $stats['managers']++;
                            }
                            if( $user->user->hasRole('cashier') ) 
                            {
                                $stats['cashiers']++;
                            }
                            if( $user->user->hasRole('user') ) 
                            {
                                $stats['users']++;
                            }
                        }
                    }
                }
            }
            if( auth()->user()->hasRole('admin') ) 
            {
                $stats['agents'] = \VanguardLTE\User::where('role_id', 5)->count();
                $stats['distributors'] = \VanguardLTE\User::where('role_id', 4)->count();
            }
            if( auth()->user()->hasRole('agent') ) 
            {
                $stats['distributors'] = \VanguardLTE\User::where([
                    'role_id' => 4, 
                    'parent_id' => auth()->user()->id
                ])->count();
            }
            if( auth()->user()->hasRole('distributor') ) 
            {
                $stats['distributors'] = 1;
            }
            if( auth()->user()->hasRole('manager') ) 
            {
                $stats['distributors'] = 1;
            }
            if( count($request->all()) ) 
            {
                $stats['agents'] = count($countAgents);
                $stats['distributors'] = count($countDistributors);
            }
            $agents = \VanguardLTE\User::where('role_id', 5)->pluck('username', 'id')->toArray();
            $distributors = [];
            if( auth()->user()->hasRole(['admin']) ) 
            {
                $distributors = \VanguardLTE\User::where('role_id', 4)->pluck('username', 'id')->toArray();
            }
            else if( auth()->user()->hasRole(['agent']) ) 
            {
                $distributors = \VanguardLTE\User::where([
                    'role_id' => 4, 
                    'parent_id' => auth()->user()->id
                ])->pluck('username', 'id')->toArray();
            }
            return view('backend.shops.list', compact('shops', 'categories', 'stats', 'agents', 'distributors'));
        }
        public function create()
        {
            if( !auth()->user()->hasRole('distributor') ) 
            {
                return redirect()->route('backend.shop.list')->withErrors([trans('app.only_for_distributors')]);
            }
            $directories = [];
            foreach( glob(public_path() . '/frontend/*', GLOB_ONLYDIR) as $fileinfo ) 
            {
                $dirname = basename($fileinfo);
                $directories[$dirname] = $dirname;
            }
            $categories = \VanguardLTE\Category::where([
                'parent' => 0, 
                'shop_id' => 0
            ])->get();
            $shop = new \VanguardLTE\Shop();
            $availibleUsers = [];
            if( auth()->user()->hasRole('admin') ) 
            {
                $me = \VanguardLTE\User::where('id', \Auth::id())->get();
                $availibleUsers = \VanguardLTE\User::whereIn('role_id', [
                    4, 
                    5
                ])->has('rel_shops')->get();
                $availibleUsers = $me->merge($availibleUsers);
            }
            if( auth()->user()->hasRole('agent') ) 
            {
                $me = \VanguardLTE\User::where('id', \Auth::id())->get();
                $distributors = \VanguardLTE\User::where([
                    'parent_id' => auth()->user()->id, 
                    'role_id' => 4
                ])->has('rel_shops')->get();
                $availibleUsers = $me->merge($distributors);
            }
            if( auth()->user()->hasRole('distributor') ) 
            {
                $availibleUsers = \VanguardLTE\User::where('id', \Auth::id())->has('rel_shops')->get();
            }
            $blocks = [];
            if( auth()->user()->hasPermission('shops.unblock') ) 
            {
                $blocks[0] = __('app.unblock');
            }
            if( auth()->user()->hasPermission('shops.block') ) 
            {
                $blocks[1] = __('app.block');
            }
            return view('backend.shops.add', compact('directories', 'categories', 'shop', 'availibleUsers', 'blocks'));
        }
        public function store(\Illuminate\Http\Request $request)
        {
            if( $this->max_shops <= \VanguardLTE\Shop::count() ) 
            {
                return redirect()->route('backend.shop.list')->withErrors([trans('max_shops', ['max' => config('limits.max_shops')])]);
            }
            if( !auth()->user()->hasRole('distributor') ) 
            {
                return redirect()->route('backend.shop.list')->withErrors([trans('app.only_for_distributors')]);
            }
            $validatedData = $request->validate([
                'name' => 'required|unique:shops|max:255', 
                'currency' => 'present|in:' . implode(',', \VanguardLTE\Shop::$values['currency']), 
                'percent' => 'required|in:' . implode(',', \VanguardLTE\Shop::$values['percent']), 
                'orderby' => 'required|in:' . implode(',', \VanguardLTE\Shop::$values['orderby'])
            ]);
            $data = $request->all();
            $shop = \VanguardLTE\Shop::create($data + ['user_id' => auth()->user()->id]);
            $user = \VanguardLTE\User::find(\Auth::id());
            if( isset($request->categories) && count($request->categories) ) 
            {
                foreach( $request->categories as $category ) 
                {
                    \VanguardLTE\ShopCategory::create([
                        'shop_id' => $shop->id, 
                        'category_id' => $category
                    ]);
                }
            }
            \VanguardLTE\ShopUser::create([
                'shop_id' => $shop->id, 
                'user_id' => auth()->user()->id
            ]);
            if( auth()->user()->hasRole('distributor') ) 
            {
                \VanguardLTE\ShopUser::create([
                    'shop_id' => $shop->id, 
                    'user_id' => auth()->user()->parent_id
                ]);
            }
            $user->update(['shop_id' => $shop->id]);
            \VanguardLTE\Task::create([
                'category' => 'shop', 
                'action' => 'create', 
                'item_id' => $shop->id
            ]);
            return redirect()->route('backend.shop.list')->withSuccess(trans('app.shop_created'));
        }
        public function admin_create()
        {
            if( !auth()->user()->hasRole('admin') ) 
            {
                return redirect()->route('backend.shop.list')->withErrors([trans('app.only_for_distributors')]);
            }
            $directories = [];
            foreach( glob(public_path() . '/frontend/*', GLOB_ONLYDIR) as $fileinfo ) 
            {
                $dirname = basename($fileinfo);
                $directories[$dirname] = $dirname;
            }
            $categories = \VanguardLTE\Category::where([
                'parent' => 0, 
                'shop_id' => 0
            ])->get();
            $shop = new \VanguardLTE\Shop();
            $availibleUsers = [];
            if( auth()->user()->hasRole('admin') ) 
            {
                $me = \VanguardLTE\User::where('id', \Auth::id())->get();
                $availibleUsers = \VanguardLTE\User::whereIn('role_id', [
                    4, 
                    5
                ])->has('rel_shops')->get();
                $availibleUsers = $me->merge($availibleUsers);
            }
            $blocks = [];
            if( auth()->user()->hasPermission('shops.unblock') ) 
            {
                $blocks[0] = __('app.unblock');
            }
            if( auth()->user()->hasPermission('shops.block') ) 
            {
                $blocks[1] = __('app.block');
            }
            $statuses = \VanguardLTE\Support\Enum\UserStatus::lists();
            return view('backend.shops.admin', compact('directories', 'categories', 'shop', 'availibleUsers', 'blocks', 'statuses'));
        }
        public function admin_store(\Illuminate\Http\Request $request)
        {
            $shop = $request->only([
                'name', 
                'percent', 
                'frontend', 
                'orderby', 
                'currency', 
                'categories', 
                'balance'
            ]);
            $agent = $request->input('agent');
            $distributor = $request->input('distributor');
            $manager = $request->input('manager');
            $cashier = $request->input('cashier');
            $users = $request->input('users');
            if( $this->max_shops <= \VanguardLTE\Shop::count() ) 
            {
                return redirect()->back()->with('blockError', 'SHOP')->withErrors([trans('max_shops', ['max' => config('limits.max_shops')])])->withInput();
            }
            $request->validate([
                'name' => 'required|unique:shops|max:255', 
                'currency' => 'present|in:' . implode(',', \VanguardLTE\Shop::$values['currency']), 
                'percent' => 'required|in:' . implode(',', \VanguardLTE\Shop::$values['percent']), 
                'orderby' => 'required|in:' . implode(',', \VanguardLTE\Shop::$values['orderby'])
            ]);
            foreach( [
                'agent', 
                'distributor', 
                'manager', 
                'cashier'
            ] as $role_name ) 
            {
                $validator = \Illuminate\Support\Facades\Validator::make($request->input($role_name), [
                    'username' => 'required|regex:/^[A-Za-z0-9]+$/|unique:users,username', 
                    'password' => 'required|min:6'
                ]);
                if( $validator->fails() ) 
                {
                    return redirect()->back()->withErrors($validator)->with('blockError', $role_name)->withInput();
                }
            }
            $usersBalance = floatval($users['balance'] * $users['count']);
//            $manager['balance'] = $shop['balance'];			
//            $managerBalance = floatval($manager['balance']);
            $distributorBalance = floatval($distributor['balance']);
            $agentBalance = floatval($agent['balance']);
            $shopBalance = floatval($shop['balance']);
            $shop['balance'] = 0;
            $manager['balance'] = $shop['balance'];
            $distributor['balance'] = $manager['balance'];
            $agent['balance'] = $distributor['balance'];
            if( $usersBalance < 0 || $distributorBalance < 0 || $agentBalance < 0 || $shopBalance < 0 ) 
            {
                return redirect()->back()->withErrors(['Error balance < 0'])->withInput();
            }
            if( $usersBalance > 0 && ($shopBalance <= 0 || $shopBalance < $usersBalance) ) 
            {
                return redirect()->back()->withErrors(['Error balance: Users > Shop'])->withInput();
            }
            if( $shopBalance > 0 && ($distributorBalance <= 0 || $distributorBalance < $shopBalance) ) 
            {
                return redirect()->back()->withErrors(['Error balance: Manager+shop > Distributor'])->withInput();
            }
            if( $distributorBalance > 0 && ($agentBalance <= 0 || $agentBalance < $distributorBalance) ) 
            {
                return redirect()->back()->withErrors(['Error balance: Distributor > Agent'])->withInput();
            }
            $roles = \jeremykenedy\LaravelRoles\Models\Role::get();
            $agent = \VanguardLTE\User::create($agent + [
                'parent_id' => auth()->user()->id, 
                'role_id' => 5
            ]);
            $agent->attachRole($roles->find(5));
            $distributor = \VanguardLTE\User::create($distributor + [
                'parent_id' => $agent->id, 
                'role_id' => 4
            ]);
            $distributor->attachRole($roles->find(4));
            $manager = \VanguardLTE\User::create($manager + [
                'parent_id' => $distributor->id, 
                'role_id' => 3
            ]);
            $manager->attachRole($roles->find(3));
            $cashier = \VanguardLTE\User::create($cashier + [
                'parent_id' => $manager->id, 
                'role_id' => 2
            ]);
            $cashier->attachRole($roles->find(2));
            $shop = \VanguardLTE\Shop::create($shop + ['user_id' => $distributor->id]);
            $open_shift = \VanguardLTE\OpenShift::create([
                'start_date' => \Carbon\Carbon::now(), 
                'balance' => $shop->balance, 
                'user_id' => $distributor->id, 
                'shop_id' => $shop->id
            ]);
            if( $agentBalance > 0 ) 
            {
                $agent->addBalance('add', $agentBalance);
            }
            if( $distributorBalance > 0 ) 
            {
                $distributor->addBalance('add', $distributorBalance, $agent);
            }
            if( $shopBalance > 0 ) 
            {
                $open_shift->increment('balance_in', $shopBalance);
                $distributor->decrement('balance', $shopBalance);
                $shop->increment('balance', $shopBalance);
                \VanguardLTE\ShopStat::create([
                    'user_id' => $distributor->id, 
                    'shop_id' => $shop->id, 
                    'type' => 'add', 
                    'sum' => $shopBalance
                ]);
            }
            foreach( [
                $agent, 
                $distributor, 
                $manager, 
                $cashier
            ] as $user ) 
            {
                \VanguardLTE\ShopUser::create([
                    'shop_id' => $shop->id, 
                    'user_id' => $user->id
                ]);
                $user->update(['shop_id' => $shop->id]);
            }
            $role = \jeremykenedy\LaravelRoles\Models\Role::find(1);
            for( $i = 0; $i < $users['count']; $i++ ) 
            {
                $number = rand(111111111, 999999999);
                $data = [
                    'username' => $number, 
                    'password' => $number, 
                    'role_id' => $role->id, 
                    'status' => \VanguardLTE\Support\Enum\UserStatus::ACTIVE, 
                    'shop_id' => $shop->id, 
                    'parent_id' => $cashier->id
                ];
                $newUser = \VanguardLTE\User::create($data);
                $newUser->attachRole($role);
                if( $users['balance'] > 0 ) 
                {
                    $newUser->addBalance('add', $users['balance'], $cashier, $users['return']);
                }
                \VanguardLTE\ShopUser::create([
                    'shop_id' => $shop->id, 
                    'user_id' => $newUser->id
                ]);
                $newUser->update(['shop_id' => $shop->id]);
            }
            if( $request->input('categories') && count($request->input('categories')) ) 
            {
                foreach( $request->input('categories') as $category ) 
                {
                    \VanguardLTE\ShopCategory::create([
                        'shop_id' => $shop->id, 
                        'category_id' => $category
                    ]);
                }
            }
            \VanguardLTE\Task::create([
                'category' => 'shop', 
                'action' => 'create', 
                'item_id' => $shop->id
            ]);
            return redirect()->route('backend.shop.list')->withSuccess(trans('app.shop_created'));
        }
        public function edit($shop)
        {
            $shop = \VanguardLTE\Shop::where('id', $shop)->first();
            if( !$shop ) 
            {
                return redirect()->route('backend.shop.list')->withErrors([trans('app.wrong_shop')]);
            }
            $categories = \VanguardLTE\Category::where([
                'parent' => 0, 
                'shop_id' => 0
            ])->get();
            if( \Auth::user()->hasRole([
                'agent', 
                'distributor', 
                'manager', 
                'cashier'
            ]) ) 
            {
                $ids = \VanguardLTE\ShopUser::where('user_id', \Auth::id())->pluck('shop_id')->toArray();
                if( !(count($ids) && in_array($shop->id, $ids)) ) 
                {
                    return redirect()->route('backend.shop.list')->withErrors([trans('app.wrong_shop')]);
                }
            }
            $directories = [];
            foreach( glob(public_path() . '/frontend/*', GLOB_ONLYDIR) as $fileinfo ) 
            {
                $dirname = basename($fileinfo);
                $directories[$dirname] = $dirname;
            }
            $cats = \VanguardLTE\ShopCategory::where('shop_id', $shop->id)->pluck('category_id')->toArray();
            $blocks = [];
            if( auth()->user()->hasPermission('shops.unblock') ) 
            {
                $blocks[0] = __('app.unblock');
            }
            if( auth()->user()->hasPermission('shops.block') ) 
            {
                $blocks[1] = __('app.block');
            }
            return view('backend.shops.edit', compact('shop', 'directories', 'categories', 'cats', 'blocks'));
        }
        public function update(\Illuminate\Http\Request $request, \VanguardLTE\Repositories\Session\SessionRepository $sessionRepository, \VanguardLTE\Shop $shop)
        {
            if( \Auth::user()->hasRole([
                'agent', 
                'distributor', 
                'manager', 
                'cashier'
            ]) ) 
            {
                $ids = \VanguardLTE\ShopUser::where('user_id', \Auth::id())->pluck('shop_id')->toArray();
                if( !(count($ids) && in_array($shop->id, $ids)) ) 
                {
                    return redirect()->route('backend.shop.list')->withErrors([trans('app.wrong_shop')]);
                }
            }
            $data = $request->only([
                'name', 
                'frontend', 
                'currency', 
                'percent', 
                'orderby', 
                'is_blocked'
            ]);
            $validatedData = $request->validate([
                'name' => 'required|unique:shops,name,' . $shop->id, 
                'currency' => 'present|in:' . implode(',', \VanguardLTE\Shop::$values['currency']), 
                'percent' => 'required|in:' . implode(',', \VanguardLTE\Shop::$values['percent']), 
                'orderby' => 'required|in:' . implode(',', \VanguardLTE\Shop::$values['orderby'])
            ]);
            $shop->update($data);
            if( isset($request->categories) && count($request->categories) ) 
            {
                \VanguardLTE\ShopCategory::where('shop_id', $shop->id)->delete();
                foreach( $request->categories as $category ) 
                {
                    \VanguardLTE\ShopCategory::create([
                        'shop_id' => $shop->id, 
                        'category_id' => $category
                    ]);
                }
            }
            if( $request->is_blocked ) 
            {
                $users = \VanguardLTE\User::where('shop_id', $shop->id)->whereIn('role_id', [
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
            }
            event(new \VanguardLTE\Events\Shop\ShopEdited($shop));
            return redirect()->route('backend.shop.list')->withSuccess(trans('app.shop_updated'));
        }
        public function delete($shop)
        {
            $usersWithBalance = \VanguardLTE\User::where('shop_id', $shop)->where('role_id', 1)->where('balance', '>', 0)->count();
            if( $usersWithBalance ) 
            {
                return redirect()->route('backend.shop.list')->withErrors([trans('app.users_with_balance', ['count' => $usersWithBalance])]);
            }
            $gamesWithBalance = \VanguardLTE\GameBank::where('shop_id', $shop)->where(function($query)
            {
                return $query->where('slots', '>', 0)->orWhere('little', '>', 0)->orWhere('table_bank', '>', 0)->orWhere('fish', '>', 0)->orWhere('bonus', '>', 0);
            })->count();
            if( $gamesWithBalance ) 
            {
                return redirect()->route('backend.shop.list')->withErrors([trans('app.games_with_gamebank', ['count' => $gamesWithBalance])]);
            }
            $jackpotsWithBalance = \VanguardLTE\JPG::where('shop_id', $shop)->where('balance', '>', 0)->count();
            if( $jackpotsWithBalance ) 
            {
                return redirect()->route('backend.shop.list')->withErrors([trans('app.jackpots_with_balance', ['count' => $jackpotsWithBalance])]);
            }
            $pincodesWithBalance = \VanguardLTE\Pincode::where('shop_id', $shop)->where('nominal', '>', 0)->count();
            if( $pincodesWithBalance ) 
            {
                return redirect()->route('backend.shop.list')->withErrors([trans('app.pincodes_with_nominal', ['count' => $pincodesWithBalance])]);
            }
            $shopInfo = \VanguardLTE\Shop::find($shop);
            if( $shopInfo && $shopInfo->balance > 0 ) 
            {
                return redirect()->route('backend.shop.list')->withErrors([trans('app.shop_balance')]);
            }
            $distributors = \VanguardLTE\User::where('role_id', 4)->whereHas('rel_shops', function($query) use ($shop)
            {
                $query->where('shop_id', $shop);
            })->pluck('id')->toArray();
            if( count($distributors) ) 
            {
                $distributorsWithBalance = \VanguardLTE\User::whereIn('id', $distributors)->where('balance', '>', 0)->get();
                foreach( $distributorsWithBalance as $distributor ) 
                {
                    if( count($distributor->shops()) == 1 && $distributor->shop_id == $shopInfo->id ) 
                    {
                        return redirect()->route('backend.shop.list')->withErrors([trans('app.distributors_with_balance', ['count' => count($distributorsWithBalance)])]);
                    }
                }
            }
            \VanguardLTE\Shop::where('id', $shop)->delete();
            \VanguardLTE\ShopUser::where('shop_id', $shop)->delete();
            \VanguardLTE\Task::create([
                'category' => 'shop', 
                'action' => 'delete', 
                'item_id' => $shop
            ]);
            $usersToDelete = \VanguardLTE\User::whereIn('role_id', [
                1, 
                2, 
                3
            ])->where('shop_id', $shop)->get();
            if( $usersToDelete ) 
            {
                foreach( $usersToDelete as $userDelete ) 
                {
                    $userDelete->delete();
                }
            }
            return redirect()->route('backend.shop.list')->withSuccess(trans('app.shop_deleted'));
        }
        public function hard_delete($shop)
        {
            \VanguardLTE\Shop::where('id', $shop)->delete();
            \VanguardLTE\ShopUser::where('shop_id', $shop)->delete();
            \VanguardLTE\Task::create([
                'category' => 'shop', 
                'action' => 'delete', 
                'item_id' => $shop
            ]);
            $usersToDelete = \VanguardLTE\User::whereIn('role_id', [
                1, 
                2, 
                3
            ])->where('shop_id', $shop)->get();
            if( $usersToDelete ) 
            {
                foreach( $usersToDelete as $userDelete ) 
                {
                    $userDelete->delete();
                }
            }
            return redirect()->route('backend.shop.list')->withSuccess(trans('app.shop_deleted'));
        }
        public function balance(\Illuminate\Http\Request $request)
        {
            $data = $request->all();
            if( !array_get($data, 'type') ) 
            {
                $data['type'] = 'add';
            }
            $shop = \VanguardLTE\Shop::find($request->shop_id);
            $user = \VanguardLTE\User::find(\Auth::id());
            if( $request->all && $request->all == '1' ) 
            {
                $request->summ = $shop->balance;
            }
            if( !$shop ) 
            {
                return redirect()->back()->withErrors([trans('app.wrong_shop')]);
            }
            if( !$user ) 
            {
                return redirect()->back()->withErrors([trans('app.wrong_user')]);
            }
            if( !\Auth::user()->hasRole([
                'distributor', 
                'manager'
            ]) ) 
            {
                return redirect()->back()->withErrors([trans('app.only_for_distributors')]);
            }
            if( !$request->summ ) 
            {
                return redirect()->back()->withErrors([trans('app.wrong_sum')]);
            }
            if( $data['type'] == 'add' && $user->balance < $request->summ ) 
            {
                return redirect()->back()->withErrors([trans('app.not_enough_money_in_the_user_balance', [
                    'name' => $user->username, 
                    'balance' => $user->balance
                ])]);
            }
            if( $data['type'] == 'out' && $shop->balance < $request->summ ) 
            {
                return redirect()->back()->withErrors([trans('app.not_enough_money_in_the_shop', [
                    'name' => $shop->name, 
                    'balance' => $shop->balance
                ])]);
            }
            $open_shift = \VanguardLTE\OpenShift::where([
                'shop_id' => $shop->id, 
                'end_date' => null
            ])->first();
            if( !$open_shift ) 
            {
                return redirect()->back()->withErrors([trans('app.shift_not_opened')]);
            }
            $sum = ($request->type == 'out' ? -1 * $request->summ : $request->summ);
            \VanguardLTE\ShopStat::create([
                'user_id' => \Auth::id(), 
                'shop_id' => $shop->id, 
                'type' => $request->type, 
                'sum' => abs($sum)
            ]);
            if( $request->type == 'out' ) 
            {
                $open_shift->increment('balance_out', abs($sum));
            }
            else
            {
                $open_shift->increment('balance_in', abs($sum));
            }
            $user->update([
                'balance' => $user->balance - $sum, 
                'count_balance' => $user->count_balance - $sum
            ]);
            $shop->update(['balance' => $shop->balance + $sum]);
            $user = $user->fresh();
            if( $user->balance == 0 ) 
            {
                $user->update([
                    'wager' => 0, 
                    'bonus' => 0
                ]);
            }
            if( $user->count_balance < 0 ) 
            {
                $user->update(['count_balance' => 0]);
            }
            return redirect()->back()->withSuccess(trans('app.balance_updated'));
        }
        public function action(\VanguardLTE\Shop $shop, $action)
        {
            $open_shift = \VanguardLTE\OpenShift::where([
                'shop_id' => $shop->id, 
                'end_date' => null
            ])->first();
            if( !$open_shift ) 
            {
                return redirect()->back()->withErrors([trans('app.shift_not_opened')]);
            }
            if( $action && in_array($action, [
                'jpg_out', 
                'games_out', 
                'return_out'
            ]) ) 
            {
                switch( $action ) 
                {
                    case 'jpg_out':
                        $jackpots = \VanguardLTE\JPG::where('shop_id', $shop->id)->get();
                        foreach( $jackpots as $jackpot ) 
                        {
                            $sum = $jackpot->balance;
                            if( $sum <= 0 ) 
                            {
                                continue;
                            }
                            $jackpot->decrement('balance', abs($sum));
                            $shop->increment('balance', abs($sum));
                            $open_shift->increment('balance_in', abs($sum));
                            \VanguardLTE\BankStat::create([
                                'name' => $jackpot->name, 
                                'user_id' => \Auth::id(), 
                                'type' => 'out', 
                                'sum' => abs($sum), 
                                'old' => $sum, 
                                'new' => 0, 
                                'shop_id' => $shop->id
                            ]);
                        }
                        return redirect()->back()->withSuccess(trans('app.balance_updated'));
                        break;
                    case 'games_out':
                        $arr = ['gamebank'];
                        if( $action == 'jpg_out' ) 
                        {
                            $arr = [
                                'jp_1', 
                                'jp_2', 
                                'jp_3', 
                                'jp_4', 
                                'jp_5', 
                                'jp_6', 
                                'jp_7', 
                                'jp_8', 
                                'jp_9', 
                                'jp_10'
                            ];
                        }
                        $games = \VanguardLTE\Game::where('shop_id', $shop->id)->get();
                        foreach( $games as $game ) 
                        {
                            foreach( $arr as $element ) 
                            {
                                $sum = $game->$element;
                                if( $sum <= 0 ) 
                                {
                                    continue;
                                }
                                $name = $game->name;
                                if( $element != 'gamebank' ) 
                                {
                                    $name .= (' JP ' . str_replace('jp_', '', $element));
                                }
                                $shop->increment('balance', $sum);
                                $open_shift->increment('balance_in', abs($sum));
                                if( $action == 'jpg_out' ) 
                                {
                                    $game->update([$element => 0]);
                                }
                                else
                                {
                                    $game->update([$element => 0]);
                                }
                                \VanguardLTE\BankStat::create([
                                    'name' => $name, 
                                    'user_id' => \Auth::id(), 
                                    'type' => 'out', 
                                    'sum' => $sum, 
                                    'old' => $sum, 
                                    'new' => 0, 
                                    'shop_id' => $shop->id
                                ]);
                            }
                        }
                        return redirect()->back()->withSuccess(trans('app.balance_updated'));
                        break;
                    case 'return_out':
                        \VanguardLTE\User::where('shop_id', $shop->id)->update(['count_return' => 0]);
                        return redirect()->back()->withSuccess(trans('app.balance_updated'));
                        break;
                }
            }
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
