<?php 
namespace VanguardLTE\Http\Controllers\Web\Backend
{
    class HappyHourController extends \VanguardLTE\Http\Controllers\Controller
    {
        public function __construct()
        {
            $this->middleware('auth');
            $this->middleware('permission:access.admin.panel');
            $this->middleware('permission:happyhours.manage');
            $this->middleware('shopzero');
        }
        public function index(\Illuminate\Http\Request $request)
        {
			/*
            $checked = new \VanguardLTE\Lib\LicenseDK();
            $license_notifications_array = $checked->aplVerifyLicenseDK(null, 0);
            if( $license_notifications_array['notification_case'] != 'notification_license_ok' ) 
            {
                return redirect()->route('frontend.page.error_license');
            }
            if( !$this->security() ) 
            {
                return redirect()->route('frontend.page.error_license');
            }
			*/
            $happyhours = \VanguardLTE\HappyHour::where('shop_id', \Auth::user()->shop_id)->get();
            return view('backend.happyhours.list', compact('happyhours'));
        }
        public function create()
        {
            return view('backend.happyhours.add');
        }
        public function store(\Illuminate\Http\Request $request)
        {
            $request->validate([
                'multiplier' => 'required|in:' . implode(',', \VanguardLTE\HappyHour::$values['wager']), 
                'wager' => 'required|in:' . implode(',', \VanguardLTE\HappyHour::$values['wager'])
            ]);
            $uniq = \VanguardLTE\HappyHour::where([
                'time' => $request->time, 
                'shop_id' => auth()->user()->shop_id
            ])->count();
            if( $uniq ) 
            {
                return redirect()->route('backend.happyhour.list')->withErrors(trans('validation.unique', ['attribute' => 'time']));
            }
            $data = $request->all();
            $data['shop_id'] = auth()->user()->shop_id;
            $happyhour = \VanguardLTE\HappyHour::create($data);
            return redirect()->route('backend.happyhour.list')->withSuccess(trans('app.happyhour_created'));
        }
        public function edit($happyhour)
        {
            $happyhour = \VanguardLTE\HappyHour::where('id', $happyhour)->first();
            if( !in_array($happyhour->shop_id, auth()->user()->availableShops()) ) 
            {
                return redirect()->back()->withErrors([trans('app.wrong_shop')]);
            }
            return view('backend.happyhours.edit', compact('happyhour'));
        }
        public function update(\Illuminate\Http\Request $request, \VanguardLTE\HappyHour $happyhour)
        {
            if( !in_array($happyhour->shop_id, auth()->user()->availableShops()) ) 
            {
                return redirect()->back()->withErrors([trans('app.wrong_shop')]);
            }
            $request->validate([
                'multiplier' => 'required|in:' . implode(',', \VanguardLTE\HappyHour::$values['wager']), 
                'wager' => 'required|in:' . implode(',', \VanguardLTE\HappyHour::$values['wager'])
            ]);
            $data = $request->only([
                'multiplier', 
                'wager', 
                'time', 
                'status'
            ]);
            $uniq = \VanguardLTE\HappyHour::where([
                'time' => $request->time, 
                'shop_id' => auth()->user()->shop_id
            ])->where('id', '!=', $happyhour->id)->count();
            if( $uniq ) 
            {
                return redirect()->route('backend.happyhour.list')->withErrors(trans('validation.unique', ['attribute' => 'time']));
            }
            $happyhour->update($data);
            return redirect()->route('backend.happyhour.list')->withSuccess(trans('app.happyhour_updated'));
        }
        public function delete(\VanguardLTE\HappyHour $happyhour)
        {
            if( !in_array($happyhour->shop_id, auth()->user()->availableShops()) ) 
            {
                return redirect()->back()->withErrors([trans('app.wrong_shop')]);
            }
            \VanguardLTE\HappyHour::where('id', $happyhour->id)->delete();
            return redirect()->route('backend.happyhour.list')->withSuccess(trans('app.happyhour_deleted'));
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
