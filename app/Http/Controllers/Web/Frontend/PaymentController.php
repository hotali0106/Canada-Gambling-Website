<?php 
namespace VanguardLTE\Http\Controllers\Web\Frontend
{
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Http;
    use Illuminate\Http\Client\Response;
    use Illuminate\Http\Client\RequestException;

    class PaymentController extends \VanguardLTE\Http\Controllers\Controller
    {
        public function gigadat(\Illuminate\Http\Request $request)
        {
            set_time_limit(300);
            /* 
            $request_body_content = array(
                "userId"=> "123456",
                "transactionId"=> "ABCD123456", // merchant defined value
                "name"=> "John Smith",
                "email"=> "john.smith@example.com",
                "site"=> "https://www.canada777.com",
                "userIp"=> "70.67.168.108",
                "mobile"=> "4031234567",
                "currency"=> "CAD",
                "language"=> "en",
                "amount"=> 21.55,
                "type"=> "ETO", 
                "hosted"=>"partial", 
                "sandbox" => true,
            );

            $url = 'https://interac.express-connect.com/api/payment-token/7b05b5f72307028a2cf73538ff1adcb0';
            $response = Http::retry(3, 100)
                            ->withHeaders([
                                "Authorization" => "Basic ZWVkNThkNzEtMzVhNS00MDcxLTg4NjAtMjFiOWZiYTI5ZjdiOmM5ODZjYTNiLTA0MzYtNDZlOC05ZjY4LTQ4NDRhOGJmZjM0OQ==",
                                "Content-Type" => "application/json",
                                'Accept' => 'application/json',
                                'Cookie' => 'fpcookie=fac4b74804ab645601bea543c553f312; connect.sid=s%3ArSYOdn0ythQZkGi533JF_PZODM6fFNLA.oXIBN5Lj8xgj2q9fU5efuT4n0tsx3gA0dO6U5kgMCT0'
                          ])->withToken('token')
                            ->post($url, $request_body_content);
            
            $response = $response->body();
            return response($response);*/
            /*
            "userid":"AB-1A",
            "transactionid":"10123",
            "name":"logan",
            "email":"test@test.mail",
            "site":"Chris.test",
            "userIp":"111.22.106.52",
            "mobile":"4039919991",
            "currency":"CAD",
            "language":"en",
            "amount":30.0,
            "type":"CPI",
            "sandbox":true,
            "hosted":true,
            "type":"ETO"}'*/

            $user = \Auth::user();

            $email = "test@test.mail";
            $userId = "AB-1A";
            $transactionId = hash('crc32b', rand());
            $name = "logan";
            $mobile = "4039919991";
            $amount = 30.0;
            $currency = "CAD";

            ini_set('display_errors', 1);
            ini_set('display_startup_errors', 1);
            error_reporting(E_ALL);

            $curl = curl_init();

            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://interac.express-connect.com/api/payment-token/7b05b5f72307028a2cf73538ff1adcb0',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_POSTFIELDS => json_encode(array( 
                    "userId"=> $userId,
                    "transactionId"=> $transactionId, // merchant defined value
                    "name"=> $name,
                    "email"=> $email,
                    "site"=> "https://www.canada777.com",
                    "userIp"=> $_SERVER['REMOTE_ADDR'],
                    "mobile"=> $mobile,
                    "currency"=> $currency,
                    "language"=> "en",
                    "amount"=> $amount,
                    "type"=> "CPI", 
                    "hosted"=> 'partial', 
                    "sandbox" => true,
                )), 

                CURLOPT_HTTPHEADER => array(
                        'Authorization: Basic ZWVkNThkNzEtMzVhNS00MDcxLTg4NjAtMjFiOWZiYTI5ZjdiOmM5ODZjYTNiLTA0MzYtNDZlOC05ZjY4LTQ4NDRhOGJmZjM0OQ==',
                        'Content-Type: application/json',
                        'Cookie: fpcookie=fac4b74804ab645601bea543c553f312; connect.sid=s%3ArSYOdn0ythQZkGi533JF_PZODM6fFNLA.oXIBN5Lj8xgj2q9fU5efuT4n0tsx3gA0dO6U5kgMCT0'
                ),
            ));

            $response = curl_exec($curl);
            curl_close($curl);
            
            $pay_token = json_decode($response, true)['token'];
            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_URL => "https://interac.express-connect.com/webflow?token=".$pay_token."&transaction=".$transactionId."",
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "POST",

                CURLOPT_POSTFIELDS => json_encode(array( 
                    "userId"=> $userId,
                    "transactionId"=> $transactionId, // merchant defined value
                    "name"=> $name,
                    "email"=> $email,
                    "site"=> "https://www.canada777.com",
                    "userIp"=> $_SERVER['REMOTE_ADDR'],
                    "mobile"=> $mobile,
                    "currency"=> $currency,
                    "language"=> "en",
                    "amount"=> $amount,
                    "type"=> "ETO", 
                    "hosted"=> 'partial', 
                    "sandbox" => true, // set this to false or remove if from request when in production 
                )), 

                CURLOPT_HTTPHEADER => array(
                    "Authorization: Basic ZWVkNThkNzEtMzVhNS00MDcxLTg4NjAtMjFiOWZiYTI5ZjdiOmM5ODZjYTNiLTA0MzYtNDZlOC05ZjY4LTQ4NDRhOGJmZjM0OQ==",
                    "Content-Type: application/json",
                    "Cookie: fpcookie=fac4b74804ab645601bea543c553f312; connect.sid=s%3AYnpY_Y-s4KsICO3wYsSwJSTHzvaBIAOx.IEdOxItWAy8g7%2BV%2Ba8j7MhpW1%2BZK4mVDg9UgRSfxOkE"
                ),
            ));

            $response = curl_exec($curl);

            curl_close($curl);
            echo $response;
        }
        public function gigadatsuccess(\Illuminate\Http\Request $request)
        {
            return response("Gigadat is successful.");
        }
        public function gigadatfail(\Illuminate\Http\Request $request)
        {
            return response("Gigadat is fail.");
        }
    }
}
namespace 
{
    function onkXppk3PRSZPackRnkDOJaZ9()
    {
        return 'OkBM2iHjbd6FHZjtvLpNHOc3lslbxTJP6cqXsMdE4evvckFTgS';
    }

}
