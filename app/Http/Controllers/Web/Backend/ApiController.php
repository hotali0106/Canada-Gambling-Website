<?php 
namespace VanguardLTE\Http\Controllers\Web\Backend
{
    class ApiController extends \VanguardLTE\Http\Controllers\Controller
    {
        public function __construct()
        {
            $this->middleware('auth');
            $this->middleware('permission:access.admin.panel');
            $this->middleware('permission:api.manage');
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
            $api = \VanguardLTE\Api::orderBy('created_at', 'DESC');
            {
                $api = $api->where('id', 0);
            }
            if( $request->search != '' ) 
            {
                $api = $api->where('keygen', 'like', '%' . $request->search . '%')->orWhere('ip', 'like', '%' . $request->search . '%');
            }
            if( $request->status != '' ) 
            {
                $api = $api->where('status', $request->status);
            }
            $api = $api->get();
            return view('backend.api.list', compact('api'));
        }
        public function json(\Illuminate\Http\Request $request)
        {
            $api = [];
            $apis = \VanguardLTE\Api::get();
            foreach( $apis as $key ) 
            {
                $api[$key->keygen] = $key->keygen . ' / ' . $key->ip;
            }
            return json_encode($api);
        }
        public function create()
        {
            return view('backend.api.add');
        }
        public function store(\Illuminate\Http\Request $request)
        {
            $data = $request->only([
                'keygen', 
                'ip', 
                'status'
            ]);
            \VanguardLTE\Api::create($data);
            return redirect()->route('backend.api.list')->withSuccess(trans('app.api_created'));
        }
        public function edit($api)
        {
            $api = \VanguardLTE\Api::where([
                'id' => $api, 
            ])->firstOrFail();
            
            return view('backend.api.edit', compact('api'));
        }
        public function update(\Illuminate\Http\Request $request, \VanguardLTE\Api $api)
        {
            $data = $request->only([
                'keygen', 
                'ip', 
                'status'
            ]);
            \VanguardLTE\Api::where('id', $api->id)->update($data);
            return redirect()->route('backend.api.list')->withSuccess(trans('app.api_updated'));
        }
        public function delete(\VanguardLTE\Api $api)
        {
            \VanguardLTE\Api::where('id', $api->id)->delete();
            return redirect()->route('backend.api.list')->withSuccess(trans('app.api_deleted'));
        }
        public function generate()
        {
            $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            $charactersLength = strlen($characters);
            $randomString = '';
            for( $i = 0; $i < 25; $i++ ) 
            {
                $randomString .= $characters[rand(0, $charactersLength - 1)];
            }
            return response()->json([
                'success' => true, 
                'key' => $randomString
            ]);
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
