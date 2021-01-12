<?php

namespace VanguardLTE\Lib;

use VanguardLTE\Transaction;
use VanguardLTE\OpenShift;
use VanguardLTE\Shop;

class Level {    
    public function addPoints($user, $sum) {      
		$this->add($user, $sum);		
    }    
	
	function add( $user, $sum ){
		
		$shop = Shop::find( $user->shop_id );
		$open_shift = OpenShift::where(['shop_id' => $user->shop_id, 'end_date' => NULL])->first();
				
		$left = $user->left_next_level();
		$nextLevel = false;
						
		if( $left <= $sum && $left > 0 ){
			$toAdd = $left;
			$toNextStep = $sum - $left;
			$nextLevel = true;
		} else{
			$toAdd = $sum;
			$toNextStep = 0;
		}
				
		$user->increment('points', floatval($user->point()->pay) * $toAdd);
		$user->increment('total_balance', $toAdd);
				
		
		if($nextLevel){
			
			if( $shop->balance >= $user->point()->bonus ){
			
				$user->increment('rating');
				$user = $user->fresh();
				$user->increment('balance', $user->point()->bonus);
				$user = $user->fresh();
				$shop->update(['balance' => $shop->balance - $user->point()->bonus]);
				if( $open_shift ){
					$open_shift->increment('balance_out', $user->point()->bonus);
				}
				Transaction::create([ 'user_id' => $user->id, 'summ' => $user->point()->bonus, 'system' => 'Points ' . $user->point()->name, 'shop_id' => $user->shop_id ]);
				
			}
		}
				
		if($toNextStep > 0){
			$this->add( $user, $toNextStep );
		}
		
	}
}