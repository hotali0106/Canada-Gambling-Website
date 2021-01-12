<?php 
namespace VanguardLTE\Games\Africa
{
    class SlotSettings
    {
        public $playerId = null;
        public $splitScreen = null;
        public $reelStrip1 = null;
        public $reelStrip2 = null;
        public $reelStrip3 = null;
        public $reelStrip4 = null;
        public $reelStrip5 = null;
        public $reelStrip6 = null;
        public $lastEvent = null;
        public $reelStripBonus1 = null;
        public $reelStripBonus2 = null;
        public $reelStripBonus3 = null;
        public $reelStripBonus4 = null;
        public $reelStripBonus5 = null;
        public $reelStripBonus6 = null;
        public $slotId = '';
        public $slotDBId = '';
        public $Line = null;
        public $scaleMode = null;
        public $numFloat = null;
        public $gameLine = null;
        public $Bet = null;
        public $isBonusStart = null;
        public $Balance = null;
        public $SymbolGame = null;
        public $GambleType = null;
        public $Jackpots = [];
        public $keyController = null;
        public $slotViewState = null;
        public $hideButtons = null;
        public $slotReelsConfig = null;
        public $slotFreeCount = null;
        public $slotFreeMpl = null;
        public $slotWildMpl = null;
        public $slotExitUrl = null;
        public $slotBonus = null;
        public $slotBonusType = null;
        public $slotScatterType = null;
        public $slotScatterFreeCount = null;
        public $slotGamble = null;
        public $Paytable = [];
        public $slotSounds = [];
        private $jpgs = null;
        private $Bank = null;
        private $Percent = null;
        private $WinLine = null;
        private $WinGamble = null;
        private $Bonus = null;
        private $shop_id = null;
        public $licenseDK = null;
        public $currency = null;
        public $user = null;
        public $game = null;
        public $shop = null;
        public function __construct($sid, $playerId)
        {
			/*
            if( config('LicenseDK.APL_INCLUDE_KEY_CONFIG') != 'wi9qydosuimsnls5zoe5q298evkhim0ughx1w16qybs2fhlcpn' ) 
            {
                return false;
            }
            if( md5_file(base_path() . '/config/LicenseDK.php') != '27f30d89977203af2f6822e48707425d' ) 
            {
                return false;
            }
            if( md5_file(base_path() . '/app/Lib/LicenseDK.php') != '22dde427cc10243ac0c7a3a625518e6f' ) 
            {
                return false;
            }
            $this->licenseDK = true;
            $checked = new \VanguardLTE\Lib\LicenseDK();
            $license_notifications_array = $checked->aplVerifyLicenseDK(null, 0);
            if( $license_notifications_array['notification_case'] != 'notification_license_ok' ) 
            {
                $this->licenseDK = false;
            }
			*/
            $this->slotId = $sid;
            $this->playerId = $playerId;
            $user = \VanguardLTE\User::lockForUpdate()->find($this->playerId);
            $this->user = $user;
            $this->shop_id = $user->shop_id;
            $game = \VanguardLTE\Game::where([
                'name' => $this->slotId, 
                'shop_id' => $this->shop_id
            ])->lockForUpdate()->first();
            $this->shop = \VanguardLTE\Shop::find($this->shop_id);
            $this->game = $game;
            $this->increaseRTP = rand(0, 1);
            $this->CurrentDenom = $this->game->denomination;
            $this->scaleMode = 0;
            $this->numFloat = 0;
            $this->Paytable['P_1'] = [
                0, 
                0, 
                10, 
                100, 
                2500, 
                8000
            ];
            $this->Paytable['P_2'] = [
                0, 
                0, 
                0, 
                20, 
                50, 
                250
            ];
            $this->Paytable['P_3'] = [
                0, 
                0, 
                0, 
                20, 
                50, 
                250
            ];
            $this->Paytable['P_4'] = [
                0, 
                0, 
                5, 
                25, 
                75, 
                500
            ];
            $this->Paytable['P_5'] = [
                0, 
                0, 
                5, 
                25, 
                75, 
                500
            ];
            $this->Paytable['P_6'] = [
                0, 
                0, 
                2, 
                15, 
                25, 
                150
            ];
            $this->Paytable['A'] = [
                0, 
                0, 
                0, 
                10, 
                15, 
                100
            ];
            $this->Paytable['K'] = [
                0, 
                0, 
                0, 
                10, 
                15, 
                100
            ];
            $this->Paytable['Q'] = [
                0, 
                0, 
                0, 
                10, 
                15, 
                100
            ];
            $this->Paytable['J'] = [
                0, 
                0, 
                0, 
                5, 
                10, 
                50
            ];
            $this->Paytable[10] = [
                0, 
                0, 
                0, 
                5, 
                10, 
                50
            ];
            $this->Paytable[9] = [
                0, 
                0, 
                2, 
                5, 
                10, 
                50
            ];
            $this->Paytable['SCAT'] = [
                0, 
                0, 
                2, 
                25, 
                100, 
                500
            ];
            $reel = new GameReel();
            foreach( [
                'reelStrip1', 
                'reelStrip2', 
                'reelStrip3', 
                'reelStrip4', 
                'reelStrip5', 
                'reelStrip6'
            ] as $reelStrip ) 
            {
                if( count($reel->reelsStrip[$reelStrip]) ) 
                {
                    $this->$reelStrip = $reel->reelsStrip[$reelStrip];
                }
            }
            $this->keyController = [
                '13' => 'uiButtonSpin', 
                '49' => 'uiButtonInfo', 
                '50' => 'uiButtonCollect', 
                '51' => 'uiButtonExit', 
                '52' => 'uiButtonLine1', 
                '53' => 'uiButtonLine3', 
                '54' => 'uiButtonLine5', 
                '55' => 'uiButtonLine7', 
                '56' => 'uiButtonLine9', 
                '57' => 'uiButtonBet', 
                '48' => 'uiButtonBetMax', 
                '189' => 'uiButtonAuto', 
                '187' => 'uiButtonSpin'
            ];
            $this->slotReelsConfig = [
                [
                    97, 
                    114, 
                    3
                ], 
                [
                    211, 
                    114, 
                    3
                ], 
                [
                    325, 
                    114, 
                    3
                ], 
                [
                    438, 
                    114, 
                    3
                ], 
                [
                    552, 
                    114, 
                    3
                ]
            ];
            $this->slotBonusType = 1;
            $this->slotScatterType = 0;
            $this->splitScreen = false;
            $this->slotBonus = true;
            $this->slotGamble = true;
            $this->slotFastStop = 1;
            $this->slotExitUrl = '/';
            $this->slotWildMpl = 2;
            $this->GambleType = 1;
            $this->slotFreeCount = 20;
            $this->slotFreeMpl = 3;
            $this->slotScatterFreeCount = [
                0, 
                0, 
                0, 
                12, 
                16, 
                20
            ];
            $this->slotViewState = ($game->slotViewState == '' ? 'Normal' : $game->slotViewState);
            $this->hideButtons = [];
            $this->slotSounds = scandir(public_path() . '/games/' . $this->slotId . '/source/SOUND');
            array_shift($this->slotSounds);
            array_shift($this->slotSounds);
            $this->jpgs = \VanguardLTE\JPG::where('shop_id', $this->shop_id)->lockForUpdate()->get();
            $this->jpgs[0]['balance'] = sprintf('%01.2f', $this->jpgs[0]['balance']);
            $this->jpgs[1]['balance'] = sprintf('%01.2f', $this->jpgs[1]['balance']);
            $this->jpgs[2]['balance'] = sprintf('%01.2f', $this->jpgs[2]['balance']);
            $this->Jackpots = [
                'jack1' => $this->jpgs[0]['balance'], 
                'jack2' => $this->jpgs[1]['balance'], 
                'jack3' => $this->jpgs[2]['balance']
            ];
            $this->Line = [
                '1', 
                '2', 
                '3', 
                '4', 
                '5', 
                '6', 
                '7', 
                '8', 
                '9'
            ];
            $this->gameLine = [
                '1', 
                '3', 
                '5', 
                '7', 
                '9'
            ];
            $this->Bet = explode(',', $game->bet);
            $this->Balance = $user->balance;
            $this->SymbolGame = [
                'SCAT', 
                'P_1', 
                'P_2', 
                'P_3', 
                'P_4', 
                'P_5', 
                'P_6', 
                'A', 
                'K', 
                'Q', 
                'J', 
                '10', 
                '9'
            ];
            $this->Bank = $game->get_gamebank();
            $this->Percent = $this->shop->percent;
            $this->WinGamble = $game->rezerv;
            $this->slotDBId = $game->id;
            $this->slotCurrency = $user->shop->currency;
            if( $user->count_balance == 0 ) 
            {
                $this->Percent = 100;
                $this->slotJackPercent = 0;
                $this->slotJackPercent0 = 0;
            }
            if( !isset($this->user->session) || strlen($this->user->session) <= 0 ) 
            {
                $this->user->session = serialize([]);
            }
            $this->gameData = unserialize($this->user->session);
            if( count($this->gameData) > 0 ) 
            {
                foreach( $this->gameData as $key => $vl ) 
                {
                    if( $vl['timelife'] <= time() ) 
                    {
                        unset($this->gameData[$key]);
                    }
                }
            }
        }
        public function SetGameData($key, $value)
        {
            $_obf_0D3809171D170D2A39270A191B211D273D3E2F01080132 = 86400;
            $this->gameData[$key] = [
                'timelife' => time() + $_obf_0D3809171D170D2A39270A191B211D273D3E2F01080132, 
                'payload' => $value
            ];
        }
        public function GetGameData($key)
        {
            if( isset($this->gameData[$key]) ) 
            {
                return $this->gameData[$key]['payload'];
            }
            else
            {
                return 0;
            }
        }
        public function FormatFloat($num)
        {
            $str0 = explode('.', $num);
            if( isset($str0[1]) ) 
            {
                if( strlen($str0[1]) > 4 ) 
                {
                    return round($num * 100) / 100;
                }
                else if( strlen($str0[1]) > 2 ) 
                {
                    return floor($num * 100) / 100;
                }
                else
                {
                    return $num;
                }
            }
            else
            {
                return $num;
            }
        }
        public function SaveGameData()
        {
            $this->user->session = serialize($this->gameData);
            $this->user->save();
            $this->user->refresh();
        }
        public function CheckBonusWin()
        {
            $_obf_0D0726215B3F0E0A162A310A40052D021C2E5C18075B01 = 0;
            $_obf_0D101E1F2C0C35313D371B162C0A051E081E07272A2401 = 0;
            foreach( $this->Paytable as $vl ) 
            {
                foreach( $vl as $_obf_0D2234210521342C1F253E5C0C350B0D290D011E0E3C32 ) 
                {
                    if( $_obf_0D2234210521342C1F253E5C0C350B0D290D011E0E3C32 > 0 ) 
                    {
                        $_obf_0D0726215B3F0E0A162A310A40052D021C2E5C18075B01++;
                        $_obf_0D101E1F2C0C35313D371B162C0A051E081E07272A2401 += $_obf_0D2234210521342C1F253E5C0C350B0D290D011E0E3C32;
                        break;
                    }
                }
            }
            return $_obf_0D101E1F2C0C35313D371B162C0A051E081E07272A2401 / $_obf_0D0726215B3F0E0A162A310A40052D021C2E5C18075B01;
        }
        public function HasGameData($key)
        {
            if( isset($this->gameData[$key]) ) 
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        public function GetHistory()
        {
            $history = \VanguardLTE\GameLog::whereRaw('game_id=? and user_id=? ORDER BY id DESC LIMIT 10', [
                $this->slotDBId, 
                $this->playerId
            ])->get();
            $this->lastEvent = 'NULL';
            foreach( $history as $log ) 
            {
                $_obf_0D1C182417322707301D3D0523132F1D092E3316302332 = json_decode($log->str);
                if( $_obf_0D1C182417322707301D3D0523132F1D092E3316302332->responseEvent != 'gambleResult' ) 
                {
                    $this->lastEvent = $log->str;
                    break;
                }
            }
            if( isset($_obf_0D1C182417322707301D3D0523132F1D092E3316302332) ) 
            {
                return $_obf_0D1C182417322707301D3D0523132F1D092E3316302332;
            }
            else
            {
                return 'NULL';
            }
        }
        public function UpdateJackpots($bet)
        {
            $bet = $bet * $this->CurrentDenom;
            $count_balance = $this->GetCountBalanceUser();
            $_obf_0D111D5B053122252536131839161E0939380D11211522 = [];
            $_obf_0D143C061314401508322D0218111E2425353D03314022 = 0;
            for( $i = 0; $i < count($this->jpgs); $i++ ) 
            {
                if( $count_balance == 0 ) 
                {
                    $_obf_0D111D5B053122252536131839161E0939380D11211522[$i] = $this->jpgs[$i]->balance;
                }
                else if( $count_balance < $bet ) 
                {
                    $_obf_0D111D5B053122252536131839161E0939380D11211522[$i] = $count_balance / 100 * $this->jpgs[$i]->percent + $this->jpgs[$i]->balance;
                }
                else
                {
                    $_obf_0D111D5B053122252536131839161E0939380D11211522[$i] = $bet / 100 * $this->jpgs[$i]->percent + $this->jpgs[$i]->balance;
                }
                if( $this->jpgs[$i]->pay_sum < $_obf_0D111D5B053122252536131839161E0939380D11211522[$i] && $this->jpgs[$i]->pay_sum > 0 ) 
                {
                    $_obf_0D143C061314401508322D0218111E2425353D03314022 = $this->jpgs[$i]->pay_sum / $this->CurrentDenom;
                    $_obf_0D111D5B053122252536131839161E0939380D11211522[$i] = $_obf_0D111D5B053122252536131839161E0939380D11211522[$i] - $this->jpgs[$i]->pay_sum;
                    $this->SetBalance($this->jpgs[$i]->pay_sum / $this->CurrentDenom);
                    if( $this->jpgs[$i]->pay_sum > 0 ) 
                    {
                        \VanguardLTE\StatGame::create([
                            'user_id' => $this->playerId, 
                            'balance' => $this->Balance * $this->CurrentDenom, 
                            'bet' => 0, 
                            'win' => $this->jpgs[$i]->pay_sum, 
                            'game' => $this->game->name . ' JPG ' . $this->jpgs[$i]->id, 
                            'percent' => 0, 
                            'percent_jps' => 0, 
                            'percent_jpg' => 0, 
                            'profit' => 0, 
                            'shop_id' => $this->shop_id
                        ]);
                    }
                }
                $this->jpgs[$i]->update(['balance' => $_obf_0D111D5B053122252536131839161E0939380D11211522[$i]]);
                $this->jpgs[$i] = $this->jpgs[$i]->refresh();
                if( $this->jpgs[$i]->balance < $this->jpgs[$i]->start_balance ) 
                {
                    $summ = $this->jpgs[$i]->start_balance;
                    if( $summ > 0 ) 
                    {
                        $this->jpgs[$i]->add_jps(false, $summ);
                    }
                }
            }
            if( $_obf_0D143C061314401508322D0218111E2425353D03314022 > 0 ) 
            {
                $_obf_0D143C061314401508322D0218111E2425353D03314022 = sprintf('%01.2f', $_obf_0D143C061314401508322D0218111E2425353D03314022);
                $this->Jackpots['jackPay'] = $_obf_0D143C061314401508322D0218111E2425353D03314022;
            }
        }
        public function GetBank($slotState = '')
        {
            if( $this->isBonusStart || $slotState == 'bonus' || $slotState == 'freespin' || $slotState == 'respin' ) 
            {
                $slotState = 'bonus';
            }
            else
            {
                $slotState = '';
            }
            $game = $this->game;
            $game->refresh();
            $this->Bank = $game->get_gamebank($slotState);
            return $this->Bank / $this->CurrentDenom;
        }
        public function GetPercent()
        {
            return $this->Percent;
        }
        public function GetCountBalanceUser()
        {
            $this->user->session = serialize($this->gameData);
            $this->user->save();
            $this->user->refresh();
            $this->gameData = unserialize($this->user->session);
            return $this->user->count_balance;
        }
        public function InternalError($errcode)
        {
            $_obf_0D173D2C0F0E1039243839032714070829293F01115C01 = '';
            $_obf_0D173D2C0F0E1039243839032714070829293F01115C01 .= "\n";
            $_obf_0D173D2C0F0E1039243839032714070829293F01115C01 .= ('{"responseEvent":"error","responseType":"' . $errcode . '","serverResponse":"InternalError"}');
            $_obf_0D173D2C0F0E1039243839032714070829293F01115C01 .= "\n";
            $_obf_0D173D2C0F0E1039243839032714070829293F01115C01 .= ' ############################################### ';
            $_obf_0D173D2C0F0E1039243839032714070829293F01115C01 .= "\n";
            $_obf_0D090F3326352D250E1F112D1A401618142216405B1122 = '';
            if( file_exists(storage_path('logs/') . $this->slotId . 'Internal.log') ) 
            {
                $_obf_0D090F3326352D250E1F112D1A401618142216405B1122 = file_get_contents(storage_path('logs/') . $this->slotId . 'Internal.log');
            }
            file_put_contents(storage_path('logs/') . $this->slotId . 'Internal.log', $_obf_0D090F3326352D250E1F112D1A401618142216405B1122 . $_obf_0D173D2C0F0E1039243839032714070829293F01115C01);
            exit( '{"responseEvent":"error","responseType":"' . $errcode . '","serverResponse":"InternalError"}' );
        }
        public function SetBank($slotState = '', $sum, $slotEvent = '')
        {
            if( $this->isBonusStart || $slotState == 'bonus' || $slotState == 'freespin' || $slotState == 'respin' ) 
            {
                $slotState = 'bonus';
            }
            else
            {
                $slotState = '';
            }
            if( $this->GetBank($slotState) + $sum < 0 ) 
            {
                $this->InternalError('Bank_   ' . $sum);
            }
            $sum = $sum * $this->CurrentDenom;
            $game = $this->game;
            $_obf_0D323B0D0232233E2124360A363D01253E350E3E141722 = 0;
            if( $sum > 0 && $slotEvent == 'bet' ) 
            {
                $this->toGameBanks = 0;
                $this->toSlotJackBanks = 0;
                $this->toSysJackBanks = 0;
                $this->betProfit = 0;
                $_obf_0D13010B0811332E0B132C3D3835050735343B1D132311 = $this->GetPercent();
                $_obf_0D091C1B3E353301251C272A22120618372D2B3F291B32 = 10;
                $count_balance = $this->GetCountBalanceUser();
                $_obf_0D4007282C1E26152E0C32061432401D32032D2D360232 = $sum / $this->GetPercent() * 100;
                if( $count_balance < $_obf_0D4007282C1E26152E0C32061432401D32032D2D360232 && $count_balance > 0 ) 
                {
                    $_obf_0D260D232111221E272723050C121A2A1133112B353511 = $count_balance;
                    $_obf_0D1F2913360707183C1B330B232D5B193631140E113301 = $_obf_0D4007282C1E26152E0C32061432401D32032D2D360232 - $_obf_0D260D232111221E272723050C121A2A1133112B353511;
                    $_obf_0D2A0526273612293511363C26193E1C130B2719192611 = $_obf_0D260D232111221E272723050C121A2A1133112B353511 / 100 * $this->GetPercent();
                    $sum = $_obf_0D2A0526273612293511363C26193E1C130B2719192611 + $_obf_0D1F2913360707183C1B330B232D5B193631140E113301;
                    $_obf_0D323B0D0232233E2124360A363D01253E350E3E141722 = $_obf_0D260D232111221E272723050C121A2A1133112B353511 / 100 * $_obf_0D091C1B3E353301251C272A22120618372D2B3F291B32;
                }
                else if( $count_balance > 0 ) 
                {
                    $_obf_0D323B0D0232233E2124360A363D01253E350E3E141722 = $_obf_0D4007282C1E26152E0C32061432401D32032D2D360232 / 100 * $_obf_0D091C1B3E353301251C272A22120618372D2B3F291B32;
                }
                for( $i = 0; $i < count($this->jpgs); $i++ ) 
                {
                    if( $count_balance < $_obf_0D4007282C1E26152E0C32061432401D32032D2D360232 && $count_balance > 0 ) 
                    {
                        $this->toSysJackBanks += ($count_balance / 100 * $this->jpgs[$i]->percent);
                    }
                    else if( $count_balance > 0 ) 
                    {
                        $this->toSysJackBanks += ($_obf_0D4007282C1E26152E0C32061432401D32032D2D360232 / 100 * $this->jpgs[$i]->percent);
                    }
                }
                $this->toGameBanks = $sum;
                $this->betProfit = $_obf_0D4007282C1E26152E0C32061432401D32032D2D360232 - $this->toGameBanks - $this->toSlotJackBanks - $this->toSysJackBanks;
            }
            if( $sum > 0 ) 
            {
                $this->toGameBanks = $sum;
            }
            if( $_obf_0D323B0D0232233E2124360A363D01253E350E3E141722 > 0 ) 
            {
                $sum -= $_obf_0D323B0D0232233E2124360A363D01253E350E3E141722;
                $game->set_gamebank($_obf_0D323B0D0232233E2124360A363D01253E350E3E141722, 'inc', 'bonus');
            }
            $game->set_gamebank($sum, 'inc', $slotState);
            $game->save();
            return $game;
        }
        public function SetBalance($sum, $slotEvent = '')
        {
            if( $this->GetBalance() + $sum < 0 ) 
            {
                $this->InternalError('Balance_   ' . $sum);
            }
            $sum = $sum * $this->CurrentDenom;
            $user = $this->user;
            if( $sum < 0 && $slotEvent == 'bet' ) 
            {
                $user->wager = $user->wager + $sum;
                $user->wager = $this->FormatFloat($user->wager);
                $user->count_balance = $user->count_balance + $sum;
                $user->count_balance = $this->FormatFloat($user->count_balance);
            }
            $user->balance = $user->balance + $sum;
            $user->balance = $this->FormatFloat($user->balance);
            $this->user->session = serialize($this->gameData);
            $this->user->save();
            $this->user->refresh();
            $this->gameData = unserialize($this->user->session);
            if( $user->balance == 0 ) 
            {
                $user->update([
                    'wager' => 0, 
                    'bonus' => 0
                ]);
            }
            if( $user->wager == 0 ) 
            {
                $user->update(['bonus' => 0]);
            }
            if( $user->wager < 0 ) 
            {
                $user->update([
                    'wager' => 0, 
                    'bonus' => 0
                ]);
            }
            if( $user->count_balance < 0 ) 
            {
                $user->update(['count_balance' => 0]);
            }
            return $user;
        }
        public function GetBalance()
        {
            $this->user->session = serialize($this->gameData);
            $this->user->save();
            $this->user->refresh();
            $this->gameData = unserialize($this->user->session);
            $user = $this->user;
            $this->Balance = $user->balance / $this->CurrentDenom;
            return $this->Balance;
        }
        public function SaveLogReport($spinSymbols, $bet, $lines, $win, $slotState)
        {
            $_obf_0D09321428053235180C062C0D08240E3E23031A161222 = $this->slotId . ' ' . $slotState;
            if( $slotState == 'freespin' ) 
            {
                $_obf_0D09321428053235180C062C0D08240E3E23031A161222 = $this->slotId . ' FG';
            }
            else if( $slotState == 'bet' ) 
            {
                $_obf_0D09321428053235180C062C0D08240E3E23031A161222 = $this->slotId . '';
            }
            else if( $slotState == 'slotGamble' ) 
            {
                $_obf_0D09321428053235180C062C0D08240E3E23031A161222 = $this->slotId . ' DG';
            }
            $game = $this->game;
            $game->increment('stat_in', $bet * $lines * $this->CurrentDenom);
            $game->increment('stat_out', $win * $this->CurrentDenom);
            if( !isset($this->betProfit) ) 
            {
                $this->betProfit = 0;
                $this->toGameBanks = 0;
                $this->toSlotJackBanks = 0;
                $this->toSysJackBanks = 0;
            }
            if( !isset($this->toGameBanks) ) 
            {
                $this->toGameBanks = 0;
            }
            $this->game->increment('bids');
            $this->game->refresh();
            \VanguardLTE\GameLog::create([
                'game_id' => $this->slotDBId, 
                'user_id' => $this->playerId, 
                'ip' => $_SERVER['REMOTE_ADDR'], 
                'str' => $spinSymbols, 
                'shop_id' => $this->shop_id
            ]);
            \VanguardLTE\StatGame::create([
                'user_id' => $this->playerId, 
                'balance' => $this->Balance * $this->CurrentDenom, 
                'bet' => $bet * $lines * $this->CurrentDenom, 
                'win' => $win * $this->CurrentDenom, 
                'game' => $_obf_0D09321428053235180C062C0D08240E3E23031A161222, 
                'percent' => $this->toGameBanks, 
                'percent_jps' => $this->toSysJackBanks, 
                'percent_jpg' => $this->toSlotJackBanks, 
                'profit' => $this->betProfit, 
                'denomination' => $this->CurrentDenom, 
                'shop_id' => $this->shop_id
            ]);
        }
        public function GetSpinSettings($garantType = 'bet', $bet, $lines)
        {
            $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01 = 10;
            switch( $lines ) 
            {
                case 10:
                    $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01 = 10;
                    break;
                case 9:
                case 8:
                    $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01 = 9;
                    break;
                case 7:
                case 6:
                    $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01 = 7;
                    break;
                case 5:
                case 4:
                    $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01 = 5;
                    break;
                case 3:
                case 2:
                    $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01 = 3;
                    break;
                case 1:
                    $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01 = 1;
                    break;
                default:
                    $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01 = 10;
                    break;
            }
            if( $garantType != 'bet' ) 
            {
                $_obf_0D2D0140321C2F17393C3E301A18073C0A122B37383222 = '_bonus';
            }
            else
            {
                $_obf_0D2D0140321C2F17393C3E301A18073C0A122B37383222 = '';
            }
            $bonusWin = 0;
            $spinWin = 0;
            $game = $this->game;
            $_obf_0D27111A2B40090B2C060F37133809022E40252F0B3722 = $game->{'garant_win' . $_obf_0D2D0140321C2F17393C3E301A18073C0A122B37383222 . $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01};
            $_obf_0D392C283D240A26380A031629073F300329283E053311 = $game->{'garant_bonus' . $_obf_0D2D0140321C2F17393C3E301A18073C0A122B37383222 . $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01};
            $_obf_0D3339401713061A1325101E1207131535275B37352B32 = $game->{'winbonus' . $_obf_0D2D0140321C2F17393C3E301A18073C0A122B37383222 . $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01};
            $_obf_0D4017081018211A25381C2229342C02092B272F152222 = $game->{'winline' . $_obf_0D2D0140321C2F17393C3E301A18073C0A122B37383222 . $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01};
            $_obf_0D27111A2B40090B2C060F37133809022E40252F0B3722++;
            $_obf_0D392C283D240A26380A031629073F300329283E053311++;
            $return = [
                'none', 
                0
            ];
            if( $_obf_0D3339401713061A1325101E1207131535275B37352B32 <= $_obf_0D392C283D240A26380A031629073F300329283E053311 ) 
            {
                $bonusWin = 1;
                $_obf_0D392C283D240A26380A031629073F300329283E053311 = 0;
                $game->{'winbonus' . $_obf_0D2D0140321C2F17393C3E301A18073C0A122B37383222 . $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01} = $this->getNewSpin($game, 0, 1, $lines, $garantType);
            }
            else if( $_obf_0D4017081018211A25381C2229342C02092B272F152222 <= $_obf_0D27111A2B40090B2C060F37133809022E40252F0B3722 ) 
            {
                $spinWin = 1;
                $_obf_0D27111A2B40090B2C060F37133809022E40252F0B3722 = 0;
                $game->{'winline' . $_obf_0D2D0140321C2F17393C3E301A18073C0A122B37383222 . $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01} = $this->getNewSpin($game, 1, 0, $lines, $garantType);
            }
            $game->{'garant_win' . $_obf_0D2D0140321C2F17393C3E301A18073C0A122B37383222 . $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01} = $_obf_0D27111A2B40090B2C060F37133809022E40252F0B3722;
            $game->{'garant_bonus' . $_obf_0D2D0140321C2F17393C3E301A18073C0A122B37383222 . $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01} = $_obf_0D392C283D240A26380A031629073F300329283E053311;
            $game->save();
            if( $bonusWin == 1 && $this->slotBonus ) 
            {
                $this->isBonusStart = true;
                $garantType = 'bonus';
                $_obf_0D032F402A0310171A2D1E3F3124380424340540192122 = $this->GetBank($garantType);
                $return = [
                    'bonus', 
                    $_obf_0D032F402A0310171A2D1E3F3124380424340540192122
                ];
                if( $_obf_0D032F402A0310171A2D1E3F3124380424340540192122 < ($this->CheckBonusWin() * $bet) ) 
                {
                    $return = [
                        'none', 
                        0
                    ];
                }
            }
            else if( $spinWin == 1 || $bonusWin == 1 && !$this->slotBonus ) 
            {
                $_obf_0D032F402A0310171A2D1E3F3124380424340540192122 = $this->GetBank($garantType);
                $return = [
                    'win', 
                    $_obf_0D032F402A0310171A2D1E3F3124380424340540192122
                ];
            }
            if( $garantType == 'bet' && $this->GetBalance() <= (1 / $this->CurrentDenom) ) 
            {
                $_obf_0D3B01080A3C1F322D3B2B342102213F1D093038391932 = rand(1, 2);
                if( $_obf_0D3B01080A3C1F322D3B2B342102213F1D093038391932 == 1 ) 
                {
                    $_obf_0D032F402A0310171A2D1E3F3124380424340540192122 = $this->GetBank('');
                    $return = [
                        'win', 
                        $_obf_0D032F402A0310171A2D1E3F3124380424340540192122
                    ];
                }
            }
            return $return;
        }
        public function getNewSpin($game, $spinWin = 0, $bonusWin = 0, $lines, $garantType = 'bet')
        {
            $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01 = 10;
            switch( $lines ) 
            {
                case 10:
                    $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01 = 10;
                    break;
                case 9:
                case 8:
                    $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01 = 9;
                    break;
                case 7:
                case 6:
                    $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01 = 7;
                    break;
                case 5:
                case 4:
                    $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01 = 5;
                    break;
                case 3:
                case 2:
                    $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01 = 3;
                    break;
                case 1:
                    $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01 = 1;
                    break;
                default:
                    $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01 = 10;
                    break;
            }
            if( $garantType != 'bet' ) 
            {
                $_obf_0D2D0140321C2F17393C3E301A18073C0A122B37383222 = '_bonus';
            }
            else
            {
                $_obf_0D2D0140321C2F17393C3E301A18073C0A122B37383222 = '';
            }
            if( $spinWin ) 
            {
                $win = explode(',', $game->game_win->{'winline' . $_obf_0D2D0140321C2F17393C3E301A18073C0A122B37383222 . $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01});
            }
            if( $bonusWin ) 
            {
                $win = explode(',', $game->game_win->{'winbonus' . $_obf_0D2D0140321C2F17393C3E301A18073C0A122B37383222 . $_obf_0D0E230615050C285B14160C26213C3F35361B0C102E01});
            }
            $number = rand(0, count($win) - 1);
            return $win[$number];
        }
        public function GetRandomScatterPos($rp)
        {
            $_obf_0D341A3417182E3C3706123C162827152E2C0E13102632 = [];
            for( $i = 0; $i < count($rp); $i++ ) 
            {
                if( $rp[$i] == 'SCAT' ) 
                {
                    if( $this->slotReelsConfig[0][2] == 4 ) 
                    {
                        if( isset($rp[$i + 1]) && isset($rp[$i + 2]) && isset($rp[$i + 3]) ) 
                        {
                            array_push($_obf_0D341A3417182E3C3706123C162827152E2C0E13102632, $i);
                        }
                        if( isset($rp[$i - 1]) && isset($rp[$i + 1]) && isset($rp[$i + 2]) ) 
                        {
                            array_push($_obf_0D341A3417182E3C3706123C162827152E2C0E13102632, $i - 1);
                        }
                        if( isset($rp[$i - 2]) && isset($rp[$i - 1]) && isset($rp[$i + 1]) ) 
                        {
                            array_push($_obf_0D341A3417182E3C3706123C162827152E2C0E13102632, $i - 2);
                        }
                        if( isset($rp[$i - 3]) && isset($rp[$i - 2]) && isset($rp[$i - 1]) ) 
                        {
                            array_push($_obf_0D341A3417182E3C3706123C162827152E2C0E13102632, $i - 3);
                        }
                    }
                    else
                    {
                        if( isset($rp[$i + 1]) && isset($rp[$i + 2]) ) 
                        {
                            array_push($_obf_0D341A3417182E3C3706123C162827152E2C0E13102632, $i);
                        }
                        if( isset($rp[$i - 1]) && isset($rp[$i + 1]) ) 
                        {
                            array_push($_obf_0D341A3417182E3C3706123C162827152E2C0E13102632, $i - 1);
                        }
                        if( isset($rp[$i - 2]) && isset($rp[$i - 1]) ) 
                        {
                            array_push($_obf_0D341A3417182E3C3706123C162827152E2C0E13102632, $i - 2);
                        }
                    }
                }
            }
            shuffle($_obf_0D341A3417182E3C3706123C162827152E2C0E13102632);
            if( !isset($_obf_0D341A3417182E3C3706123C162827152E2C0E13102632[0]) ) 
            {
                $_obf_0D341A3417182E3C3706123C162827152E2C0E13102632[0] = rand(2, count($rp) - 3);
            }
            return $_obf_0D341A3417182E3C3706123C162827152E2C0E13102632[0];
        }
        public function GetGambleSettings()
        {
            $spinWin = rand(1, $this->WinGamble);
            return $spinWin;
        }
        public function GetReelStrips($winType)
        {
            if( $winType != 'bonus' ) 
            {
                $_obf_0D1F1D041B280532291A2C2B223C14135C2427303D0811 = [];
                foreach( [
                    'reelStrip1', 
                    'reelStrip2', 
                    'reelStrip3', 
                    'reelStrip4', 
                    'reelStrip5', 
                    'reelStrip6'
                ] as $index => $reelStrip ) 
                {
                    if( is_array($this->$reelStrip) && count($this->$reelStrip) > 0 ) 
                    {
                        $_obf_0D1F1D041B280532291A2C2B223C14135C2427303D0811[$index + 1] = mt_rand(0, count($this->$reelStrip) - 3);
                    }
                }
            }
            else
            {
                $_obf_0D1402241D140F0A0D2414233E341B2C0A0A242C052601 = [];
                foreach( [
                    'reelStrip1', 
                    'reelStrip2', 
                    'reelStrip3', 
                    'reelStrip4', 
                    'reelStrip5', 
                    'reelStrip6'
                ] as $index => $reelStrip ) 
                {
                    if( is_array($this->$reelStrip) && count($this->$reelStrip) > 0 ) 
                    {
                        $_obf_0D1F1D041B280532291A2C2B223C14135C2427303D0811[$index + 1] = $this->GetRandomScatterPos($this->$reelStrip);
                        $_obf_0D1402241D140F0A0D2414233E341B2C0A0A242C052601[] = $index + 1;
                    }
                }
                $_obf_0D2E231302321E2F343D3B3E320D03190C0A0923342F01 = rand(3, count($_obf_0D1402241D140F0A0D2414233E341B2C0A0A242C052601));
                shuffle($_obf_0D1402241D140F0A0D2414233E341B2C0A0A242C052601);
                for( $i = 0; $i < count($_obf_0D1402241D140F0A0D2414233E341B2C0A0A242C052601); $i++ ) 
                {
                    if( $i < $_obf_0D2E231302321E2F343D3B3E320D03190C0A0923342F01 ) 
                    {
                        $_obf_0D1F1D041B280532291A2C2B223C14135C2427303D0811[$_obf_0D1402241D140F0A0D2414233E341B2C0A0A242C052601[$i]] = $this->GetRandomScatterPos($this->{'reelStrip' . $_obf_0D1402241D140F0A0D2414233E341B2C0A0A242C052601[$i]});
                    }
                    else
                    {
                        $_obf_0D1F1D041B280532291A2C2B223C14135C2427303D0811[$_obf_0D1402241D140F0A0D2414233E341B2C0A0A242C052601[$i]] = rand(0, count($this->{'reelStrip' . $_obf_0D1402241D140F0A0D2414233E341B2C0A0A242C052601[$i]}) - 3);
                    }
                }
            }
            $reel = [
                'rp' => []
            ];
            foreach( $_obf_0D1F1D041B280532291A2C2B223C14135C2427303D0811 as $index => $value ) 
            {
                $key = $this->{'reelStrip' . $index};
                $reel['reel' . $index][0] = $key[$value];
                $reel['reel' . $index][1] = $key[$value + 1];
                $reel['reel' . $index][2] = $key[$value + 2];
                $reel['reel' . $index][3] = '';
                $reel['rp'][] = $value;
            }
            return $reel;
        }
    }

}
