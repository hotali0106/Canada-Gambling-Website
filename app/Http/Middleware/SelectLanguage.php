<?php 
namespace VanguardLTE\Http\Middleware
{
    class SelectLanguage
    {
        public function handle($request, \Closure $next)
        {
            if( auth()->check() ) 
            {
                \App::setLocale(auth()->user()->language);
            }
            return $next($request);
        }
    }

}
