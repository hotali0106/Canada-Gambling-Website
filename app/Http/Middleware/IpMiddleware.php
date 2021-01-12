<?php 
namespace VanguardLTE\Http\Middleware
{
    class IpMiddleware
    {
        public function handle($request, \Closure $next)
        {
            if( auth()->check() && auth()->user()->role_id == 6 ) 
            {
                return $next($request);
            }
            if( !$request->shop_id ) 
            {
                $response = Response::json(['error' => 'Shop is empty or not exist'], 401, []);
                $response->header('Content-Type', 'application/json');
                return $response;
            }
            if( auth()->check() ) 
            {
                if( auth()->user()->role_id == 4 ) 
                {
                    $shops = auth()->user()->shops(true);
                    if( !(count($shops) && in_array($request->shop_id, $shops->toArray())) ) 
                    {
                        $response = Response::json(['error' => 'No access to shop'], 401, []);
                        $response->header('Content-Type', 'application/json');
                        return $response;
                    }
                }
                if( in_array(auth()->user()->role_id, [
                    1, 
                    2
                ]) && $request->shop_id != auth()->user()->shop_id ) 
                {
                    $response = Response::json(['error' => 'No access to shop'], 401, []);
                    $response->header('Content-Type', 'application/json');
                    return $response;
                }
            }
            if( auth()->check() && auth()->user()->role_id == 4 ) 
            {
                return $next($request);
            }
            if( !$request->key ) 
            {
                $response = Response::json(['error' => 'Key is empty or not exist'], 401, []);
                $response->header('Content-Type', 'application/json');
                return $response;
            }
            $key = \VanguardLTE\Api::where([
                'keygen' => $request->key, 
                'shop_id' => $request->shop_id, 
                'status' => 1
            ])->first();
            if( !$key ) 
            {
                $response = Response::json(['error' => 'Key/Shop not exist'], 401, []);
                $response->header('Content-Type', 'application/json');
                return $response;
            }
            if( $key->ip && $request->ip() != $key->ip ) 
            {
                $response = Response::json(['error' => 'IP not in White List. Your ip is ' . $request->ip()], 401, []);
                $response->header('Content-Type', 'application/json');
                return $response;
            }
            return $next($request);
        }
    }

}
