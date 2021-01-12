<?php
/**
 * Created by PhpStorm.
 * User: Omen
 * Date: 07.09.2019
 * Time: 17:15
 */

namespace VanguardLTE\Lib;

use VanguardLTE\Returns;

class Functions {

    public static function count_return($count_return, $shop_id){

        $return = Returns::where(['shop_id' => $shop_id, 'status' => 1])
            ->whereRaw("'".$count_return."' BETWEEN min_pay AND max_pay")->first();
        if( $return ){
            $sum = floatval($return->percent)/100 * $count_return;
        } else{
            $sum = 0;//$count_return * 1/100;
        }

        return $sum;
    }

}