<?php 
namespace VanguardLTE\Http\Controllers\Web\Backend
{
    class JackpotsController extends \VanguardLTE\Http\Controllers\Controller
    {
        public function __construct()
        {
            $this->middleware('auth');
            $this->middleware('permission:access.admin.panel');
            $this->middleware('permission:jackpots.manage');
        }
        public function index(\Illuminate\Http\Request $request)
        {
            /*$checked = new \VanguardLTE\Lib\LicenseDK();
            $license_notifications_array = $checked->aplVerifyLicenseDK(null, 0);
            if( $license_notifications_array['notification_case'] != 'notification_license_ok' ) 
            {
                return redirect()->route('frontend.page.error_license');
            }
            if( !$this->security() ) 
            {
                return redirect()->route('frontend.page.error_license');
            }*/
            $jackpots = \VanguardLTE\Jackpot::where('shop_id', \Auth::user()->shop_id)->get();
            return view('backend.jackpots.list', compact('jackpots'));
        }
        public function create()
        {
            return view('backend.jackpots.add');
        }
        public function store(\Illuminate\Http\Request $request)
        {
            $request->validate(['percent' => 'required|in:' . implode(',', \VanguardLTE\Jackpot::$values['percent'])]);
            $data = $request->all();
            foreach( $data as &$item ) 
            {
                $item = str_replace(',', '.', $item);
            }
            $data['shop_id'] = \Auth::user()->shop_id;
            $jackpot = \VanguardLTE\Jackpot::create($data);
            event(new \VanguardLTE\Events\Jackpot\NewJackpot($jackpot));
            return redirect()->route('backend.jackpot.list')->withSuccess(trans('app.jackpot_created'));
        }
        public function edit($jackpot)
        {
            $jackpot = \VanguardLTE\Jackpot::where('id', $jackpot)->first();
            if( $jackpot->shop_id != \Auth::user()->shop_id ) 
            {
                return redirect()->route('backend.jackpot.list')->withErrors([trans('app.wrong_shop')]);
            }
            $jackpot_stat = $jackpot->statistics()->orderBy('id', 'DESC')->limit(8)->get();
            return view('backend.jackpots.edit', compact('jackpot', 'jackpot_stat'));
        }
        public function update(\Illuminate\Http\Request $request, \VanguardLTE\Jackpot $jackpot)
        {
            $request->validate(['percent' => 'required|in:' . implode(',', \VanguardLTE\Jackpot::$values['percent'])]);
            $data = $request->only([
                'name', 
                'balance', 
                'pay_sum', 
                'percent', 
                'start_balance', 
                'view'
            ]);
            foreach( $data as &$item ) 
            {
                $item = str_replace(',', '.', $item);
            }
            $jackpot->update($data);
            event(new \VanguardLTE\Events\Jackpot\JackpotEdited($jackpot));
            return redirect()->route('backend.jackpot.list')->withSuccess(trans('app.jackpot_updated'));
        }
        public function delete(\VanguardLTE\Jackpot $jackpot)
        {
            if( $jackpot->balance > 0 ) 
            {
                return redirect()->route('backend.jackpot.list')->withErrors([trans('app.balance_not_zero')]);
            }
            event(new \VanguardLTE\Events\Jackpot\DeleteJackpot($jackpot));
            \VanguardLTE\Jackpot::where('id', $jackpot->id)->delete();
            return redirect()->route('backend.jackpot.list')->withSuccess(trans('app.jackpot_deleted'));
        }
        public function balance(\Illuminate\Http\Request $request)
        {
            $data = $request->all();
            if( !array_get($data, 'type') ) 
            {
                $data['type'] = 'add';
            }
            $jackpot = \VanguardLTE\Jackpot::find($request->jackpot_id);
            $add_jsp = $jackpot->add_jps(\Auth::user(), $request->summ, $request->type);
            if( !$add_jsp['success'] ) 
            {
                return redirect()->back()->withErrors([$add_jsp['text']]);
            }
            else
            {
                return redirect()->back()->withSuccess(trans('app.balance_updated'));
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
