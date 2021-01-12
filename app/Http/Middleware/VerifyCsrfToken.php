<?php 
namespace VanguardLTE\Http\Middleware
{
    class VerifyCsrfToken extends \Illuminate\Foundation\Http\Middleware\VerifyCsrfToken
    {
        protected $except = [
            '/game/*/server', 
            '/coinpayment/ipn'
        ];
    }

}
