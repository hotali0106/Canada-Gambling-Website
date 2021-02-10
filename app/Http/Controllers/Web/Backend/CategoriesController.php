<?php
namespace VanguardLTE\Http\Controllers\Web\Backend
{
    class CategoriesController extends \VanguardLTE\Http\Controllers\Controller
    {
        public function __construct()
        {
            $this->middleware('auth');
            $this->middleware('permission:access.admin.panel');
            $this->middleware('permission:categories.manage');
            $this->middleware('shopzero');
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
            $categories = \VanguardLTE\Category::where([
                'parent' => 0,
            ])->orderBy('position')->get();
            return view('backend.categories.list', compact('categories'));
        }
        public function create()
        {
            $categories = \VanguardLTE\Category::where([
                'parent' => 0
            ])->pluck('id', 'title')->toArray();
            $categories = array_merge(['Root' => 0], $categories);
            $categories = array_flip($categories);
            return view('backend.categories.add', compact('categories'));
        }
        public function store(\Illuminate\Http\Request $request)
        {
            $data = $request->all();
            $category = \VanguardLTE\Category::create($data);
            return redirect()->route('backend.category.list')->withSuccess(trans('app.category_created'));
        }
        public function edit($category)
        {
            $category = \VanguardLTE\Category::where('id', $category)->first();

            $categories = \VanguardLTE\Category::where([
                'parent' => 0
            ])->pluck('id', 'title')->toArray();
            $categories = array_merge(['Root' => 0], $categories);
            $categories = array_flip($categories);
            return view('backend.categories.edit', compact('category', 'categories'));
        }
        public function update(\VanguardLTE\Category $category, \Illuminate\Http\Request $request)
        {
            $data = $request->only([
                'title',
                'parent',
                'position',
                'ico',
                'href'
            ]);
            \VanguardLTE\Category::where('id', $category->id)->update($data);
            return redirect()->route('backend.category.list')->withSuccess(trans('app.category_updated'));
        }
        public function delete(\VanguardLTE\Category $category)
        {
            \VanguardLTE\GameCategory::where('category_id', $category->id)->delete();
            $category = \VanguardLTE\Category::where('id', $category->id)->delete();
            return redirect()->route('backend.category.list')->withSuccess(trans('app.category_deleted'));
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
