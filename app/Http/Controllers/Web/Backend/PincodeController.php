<?php 
namespace VanguardLTE\Http\Controllers\Web\Backend
{
    class PincodeController extends \VanguardLTE\Http\Controllers\Controller
    {
        public function __construct()
        {
            $this->middleware('auth');
            $this->middleware('permission:access.admin.panel');
            $this->middleware('permission:pincodes.manage');
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
            $pincodes = \VanguardLTE\Pincode::select('pincodes.*')->where('pincodes.shop_id', \Auth::user()->shop_id);
            if( $request->download ) 
            {
                $pincodes = $pincodes->select('code', 'nominal', 'created_at', 'status');
            }
            if( $request->pincode != '' ) 
            {
                $pincodes = $pincodes->where('pincodes.code', 'like', '%' . preg_replace('[^0-9A-Z]', '', $request->pincode) . '%');
            }
            if( $request->sum_from != '' ) 
            {
                $pincodes = $pincodes->where('pincodes.nominal', '>=', $request->sum_from);
            }
            if( $request->sum_to != '' ) 
            {
                $pincodes = $pincodes->where('pincodes.nominal', '<=', $request->sum_to);
            }
            if( $request->created != '' ) 
            {
                $dates = explode(' - ', $request->created);
                $pincodes = $pincodes->where('pincodes.created_at', '>=', $dates[0]);
                $pincodes = $pincodes->where('pincodes.created_at', '<=', $dates[1]);
            }
            if( $request->status != '' ) 
            {
                $pincodes = $pincodes->where('pincodes.status', $request->status);
            }
            $pincodes = $pincodes->orderBy('id', 'desc')->get();
            if( $request->download ) 
            {
                $keys = [
                    'PIN code', 
                    'Nominal', 
                    'Date', 
                    'Status'
                ];
                $data = $pincodes->toArray();
                foreach( $data as &$pincode ) 
                {
                    $pincode['created_at'] = \Carbon\Carbon::parse($pincode['created_at'])->format('Y-m-d H:i:s');
                }
                $downloader = new \VanguardLTE\Lib\Downloader();
                $downloader->download_send_headers('pincodes_export_' . date('Y-m-d') . '.csv');
                echo $downloader->array2csv($data, $keys);
                exit();
            }
            return view('backend.pincodes.list', compact('pincodes'));
        }
        public function create()
        {
            return view('backend.pincodes.add');
        }
        public function store(\Illuminate\Http\Request $request)
        {
            $validatedData = $request->validate(['code' => 'required|unique:pincodes|max:255']);
            $shop = \VanguardLTE\Shop::find(\Auth::user()->shop_id);
            if( !$shop ) 
            {
                return redirect()->back()->withErrors([trans('app.wrong_shop')]);
            }
            if( !$request->nominal ) 
            {
                return redirect()->back()->withErrors([trans('app.wrong_sum')]);
            }
            if( !auth()->user()->hasRole('cashier') ) 
            {
                return redirect()->back()->withErrors([trans('app.only_for_cashiers')]);
            }
            $open_shift = \VanguardLTE\OpenShift::where([
                'shop_id' => \Auth::user()->shop_id, 
                'end_date' => null
            ])->first();
            if( !$open_shift ) 
            {
                return redirect()->back()->withErrors([trans('app.shift_not_opened')]);
            }
            if( $shop->balance < $request->nominal ) 
            {
                return redirect()->back()->withErrors([trans('app.not_enough_money_in_the_shop', [
                    'name' => $shop->name, 
                    'balance' => $shop->balance
                ])]);
            }
            $shop->update(['balance' => $shop->balance - $request->nominal]);
            $open_shift->increment('balance_out', abs($request->nominal));
            $open_shift->increment('money_in', abs($request->nominal));
            $data = $request->all();
            $data['shop_id'] = \Auth::user()->shop_id;
            \VanguardLTE\Pincode::create($data);
            return redirect()->route('backend.pincode.list')->withSuccess(trans('app.pincode_created'));
        }
        public function massadd(\Illuminate\Http\Request $request)
        {
            $shop = \VanguardLTE\Shop::find(\Auth::user()->shop_id);
            if( !$shop ) 
            {
                return redirect()->back()->withErrors([trans('app.wrong_shop')]);
            }
            if( !$request->nominal || $request->nominal <= 0 ) 
            {
                return redirect()->back()->withErrors([trans('app.wrong_sum')]);
            }
            if( !auth()->user()->hasRole('cashier') ) 
            {
                return redirect()->back()->withErrors([trans('app.only_for_cashiers')]);
            }
            $open_shift = \VanguardLTE\OpenShift::where([
                'shop_id' => \Auth::user()->shop_id, 
                'end_date' => null
            ])->first();
            if( !$open_shift ) 
            {
                return redirect()->back()->withErrors([trans('app.shift_not_opened')]);
            }
            if( $shop->balance < ($request->nominal * $request->count) ) 
            {
                return redirect()->back()->withErrors([trans('app.not_enough_money_in_the_shop', [
                    'name' => $shop->name, 
                    'balance' => $shop->balance
                ])]);
            }
            if( isset($request->count) && is_numeric($request->count) && isset($request->nominal) && is_numeric($request->nominal) ) 
            {
                $shop->update(['balance' => $shop->balance - ($request->nominal * $request->count)]);
                $open_shift->increment('balance_out', $request->nominal * $request->count);
                $open_shift->increment('money_in', $request->nominal * $request->count);
                for( $i = 0; $i < $request->count; $i++ ) 
                {
                    $pincode = '';
                    $nonUniq = true;
                    while( $nonUniq ) 
                    {
                        $str = md5(rand(100000, 999999));
                        $pincode = mb_strtoupper(implode('-', [
                            substr($str, 0, 4), 
                            substr($str, 4, 4), 
                            substr($str, 8, 4), 
                            substr($str, 12, 4), 
                            substr($str, 16, 4)
                        ]));
                        $nonUniq = \VanguardLTE\Pincode::where('code', $pincode)->count();
                    }
                    $data = [
                        'code' => $pincode, 
                        'nominal' => $request->nominal, 
                        'status' => $request->status, 
                        'shop_id' => auth()->user()->shop_id
                    ];
                    \VanguardLTE\Pincode::create($data);
                }
            }
            return redirect()->route('backend.pincode.list')->withSuccess(trans('app.pincode_created'));
        }
        public function edit($pincode)
        {
            $pincode = \VanguardLTE\Pincode::where([
                'id' => $pincode, 
                'shop_id' => \Auth::user()->shop_id
            ])->firstOrFail();
            if( !in_array($pincode->shop_id, auth()->user()->availableShops()) ) 
            {
                return redirect()->back()->withErrors([trans('app.wrong_shop')]);
            }
            return view('backend.pincodes.edit', compact('pincode'));
        }
        public function update(\Illuminate\Http\Request $request, \VanguardLTE\Pincode $pincode)
        {
            $data = $request->only(['status']);
            if( !in_array($pincode->shop_id, auth()->user()->availableShops()) ) 
            {
                return redirect()->back()->withErrors([trans('app.wrong_shop')]);
            }
            \VanguardLTE\Pincode::where('id', $pincode->id)->update($data);
            return redirect()->route('backend.pincode.list')->withSuccess(trans('app.pincode_updated'));
        }
        public function delete(\VanguardLTE\Pincode $pincode)
        {
            if( !in_array($pincode->shop_id, auth()->user()->availableShops()) ) 
            {
                return redirect()->back()->withErrors([trans('app.wrong_shop')]);
            }
            $shop = \VanguardLTE\Shop::find(\Auth::user()->shop_id);
            $open_shift = \VanguardLTE\OpenShift::where([
                'shop_id' => \Auth::user()->shop_id, 
                'end_date' => null
            ])->first();
            if( !$open_shift ) 
            {
                return redirect()->back()->withErrors([trans('app.shift_not_opened')]);
            }
            $shop->update(['balance' => $shop->balance + $pincode->nominal]);
            $open_shift->increment('balance_in', $pincode->nominal);
            $open_shift->increment('money_out', abs($pincode->nominal));
            \VanguardLTE\Pincode::where('id', $pincode->id)->delete();
            return redirect()->route('backend.pincode.list')->withSuccess(trans('app.pincode_deleted'));
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
