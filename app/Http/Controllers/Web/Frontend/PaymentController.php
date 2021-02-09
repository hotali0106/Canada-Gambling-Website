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
            $this->gigadatsuccess($request->deposit_amount);
            set_time_limit(300);
            
            $user = \Auth::user();

            /*
            $email = "test@test.mail";
            $userId = "AB-1A";
            $transactionId = hash('crc32b', rand());
            $name = "logan";
            $mobile = "4039919991";
            $amount = 30.0;
            $currency = "CAD";*/

            $userId = $user->id;
            $transactionId = hash('crc32b', rand());
            $name = $user->username;
            $email = $user->email;
            $mobile = $user->phone;
            $amount = $request->deposit_amount;
            $currency = $request->cur_deposit_currency;

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
            
            return redirect()->intended("https://interac.express-connect.com/webflow?token=".$pay_token."&transaction=".$transactionId."");
        }
        public function gigadatsuccess($amount)
        {
            $user = \Auth::user();
            $pay_count = \VanguardLTE\Transaction::where('user_id', $user->id)->count();
            $payment = \VanguardLTE\Transaction::create([
                'user_id' => \Auth::user()->id, 
                'summ' => $amount, 
                'system' => 'interac',
                'type' => 'in',
                // 'system' => $request->system
            ]);
            /*
            $pay_count = \VanguardLTE\Payment::where('user_id', $user->id)->count();
            $payment = \VanguardLTE\Payment::create([
                'user_id' => \Auth::user()->id, 
                'summ' => $amount, 
                'system' => 'interac'
                // 'system' => $request->system
            ]);
            */

            switch ($pay_count) {
                case 0:
                    {
                        if($amount > 400){
                            $user->increment('balance', $amount);
                            $user->increment('count_bonus', $amount);
                            $user->increment('bonus', $amount);
                            $user->increment('count_balance', $amount);
                        }else{
                            $user->increment('balance', $amount);
                            $user->increment('count_balance', $amount);
                        }
                    }
                    break;
                case 1:
                    {
                        if($amount > 300){
                            $user->increment('balance', $amount);
                            $user->increment('count_bonus', $amount);
                            $user->increment('bonus', $amount);
                            $user->increment('count_balance', $amount);
                        }else{
                            $user->increment('balance', $amount);
                            $user->increment('count_balance', $amount);
                        }
                    }
                    break;
                case 2:
                    {
                        if($amount > 300){
                            $user->increment('balance', $amount);
                            $user->increment('count_bonus', $amount);
                            $user->increment('bonus', $amount);
                            $user->increment('count_balance', $amount);
                        }else{
                            $user->increment('balance', $amount);
                            $user->increment('count_balance', $amount);
                        }
                    }
                    break;
                
                default:
                    $user->increment('balance', $amount);
                    $user->increment('count_balance', $amount);
                    break;
            }
            print_r("Welcome bonus ! balance add ". $amount);
            // return response();
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
