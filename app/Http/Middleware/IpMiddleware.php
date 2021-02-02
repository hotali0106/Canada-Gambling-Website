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
            
            if( auth()->check() ) 
            {
                if( auth()->user()->role_id == 4 ) 
                {
                    
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
                'status' => 1
            ])->first();
            if( !$key ) 
            {
                $response = Response::json(['error' => 'Key not exist'], 401, []);
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
