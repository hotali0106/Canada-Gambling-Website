<?php 
namespace VanguardLTE\Games\BingoAM
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
        { /*
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
            } */
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
            $this->slotExitUrl = '/';
            $this->Bet = explode(',', $game->bet);
            $this->Bet = array_slice($this->Bet, 0, 5);
            $this->Balance = $user->balance;
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
            $this->jpgs = \VanguardLTE\JPG::where('shop_id', $this->shop_id)->lockForUpdate()->get();
            $this->Paytable = [];
            $this->Paytable[0] = [
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0
            ];
            $this->Paytable[1] = [
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0
            ];
            $this->Paytable[2] = [
                0, 
                0, 
                0, 
                2, 
                1, 
                1, 
                0, 
                0, 
                0, 
                0, 
                0
            ];
            $this->Paytable[3] = [
                0, 
                0, 
                0, 
                50, 
                12, 
                5, 
                2, 
                3, 
                0, 
                0, 
                0
            ];
            $this->Paytable[4] = [
                0, 
                0, 
                0, 
                0, 
                100, 
                17, 
                15, 
                5, 
                5, 
                4, 
                3
            ];
            $this->Paytable[5] = [
                0, 
                0, 
                0, 
                0, 
                0, 
                180, 
                60, 
                15, 
                25, 
                10, 
                5
            ];
            $this->Paytable[6] = [
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                500, 
                75, 
                40, 
                15, 
                13
            ];
            $this->Paytable[7] = [
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                1000, 
                200, 
                125, 
                50
            ];
            $this->Paytable[8] = [
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                2000, 
                500, 
                150
            ];
            $this->Paytable[9] = [
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                5000, 
                1500
            ];
            $this->Paytable[10] = [
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                0, 
                15000
            ];
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
                return '';
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
        public function GetCombination($cards, $suits)
        {
            sort($cards, SORT_NUMERIC);
            $_obf_0D321A06332C321101281F3F2408121F123201381D3922 = 0;
            $_obf_0D401A2C10171A10330A272B1737171E36401109193132 = 0;
            $straight = 0;
            $flush = 0;
            $full = 0;
            $_obf_0D112D233B1F020805310A2D273736173C060210110F22 = 0;
            $_obf_0D5B0F052F10120C34130F05300E2E0C190E3D38233F01 = 0;
            $_obf_0D1E2724162F34090910342C1931383421080F2A182F01 = 0;
            $_obf_0D3412061D1527313F1D2103172A1D251E1C023F130511 = 0;
            for( $i = 2; $i <= 14; $i++ ) 
            {
                $_obf_0D373E28400B3133012B2218231F340B5C1C2C0C1E3101 = 0;
                for( $j = 0; $j <= 4; $j++ ) 
                {
                    if( $cards[$j] == $i ) 
                    {
                        $_obf_0D373E28400B3133012B2218231F340B5C1C2C0C1E3101++;
                    }
                }
                if( $_obf_0D373E28400B3133012B2218231F340B5C1C2C0C1E3101 == 4 ) 
                {
                    $_obf_0D112D233B1F020805310A2D273736173C060210110F22 += 1;
                }
                else if( $_obf_0D373E28400B3133012B2218231F340B5C1C2C0C1E3101 == 3 ) 
                {
                    $_obf_0D401A2C10171A10330A272B1737171E36401109193132 += 1;
                }
                else if( $_obf_0D373E28400B3133012B2218231F340B5C1C2C0C1E3101 == 2 ) 
                {
                    if( $i >= 11 ) 
                    {
                        $_obf_0D3412061D1527313F1D2103172A1D251E1C023F130511 = 1;
                    }
                    $_obf_0D321A06332C321101281F3F2408121F123201381D3922 += 1;
                }
            }
            if( $cards[0] + 1 == $cards[1] && $cards[0] + 2 == $cards[2] && $cards[0] + 3 == $cards[3] && $cards[0] + 4 == $cards[4] ) 
            {
                $straight += 1;
            }
            if( $suits[0] == $suits[1] && $suits[1] == $suits[2] && $suits[2] == $suits[3] && $suits[3] == $suits[4] ) 
            {
                $flush += 1;
            }
            if( $_obf_0D321A06332C321101281F3F2408121F123201381D3922 > 0 && $_obf_0D401A2C10171A10330A272B1737171E36401109193132 > 0 ) 
            {
                $full = 1;
            }
            if( $straight > 0 && $flush > 0 ) 
            {
                $_obf_0D5B0F052F10120C34130F05300E2E0C190E3D38233F01 = 1;
            }
            if( $_obf_0D5B0F052F10120C34130F05300E2E0C190E3D38233F01 > 0 && $cards[0] == 8 ) 
            {
                $_obf_0D1E2724162F34090910342C1931383421080F2A182F01 = 1;
            }
            $_obf_0D144030072C09300C13273D0B122A320C3B04012D0B32 = 0;
            if( $_obf_0D321A06332C321101281F3F2408121F123201381D3922 >= 1 && $_obf_0D3412061D1527313F1D2103172A1D251E1C023F130511 >= 1 ) 
            {
                $_obf_0D144030072C09300C13273D0B122A320C3B04012D0B32 = 1;
            }
            if( $_obf_0D321A06332C321101281F3F2408121F123201381D3922 >= 2 ) 
            {
                $_obf_0D144030072C09300C13273D0B122A320C3B04012D0B32 = 2;
            }
            if( $_obf_0D321A06332C321101281F3F2408121F123201381D3922 >= 2 ) 
            {
                $_obf_0D144030072C09300C13273D0B122A320C3B04012D0B32 = 2;
            }
            if( $_obf_0D401A2C10171A10330A272B1737171E36401109193132 >= 1 ) 
            {
                $_obf_0D144030072C09300C13273D0B122A320C3B04012D0B32 = 3;
            }
            if( $straight >= 1 ) 
            {
                $_obf_0D144030072C09300C13273D0B122A320C3B04012D0B32 = 4;
            }
            if( $flush >= 1 ) 
            {
                $_obf_0D144030072C09300C13273D0B122A320C3B04012D0B32 = 6;
            }
            if( $full >= 1 ) 
            {
                $_obf_0D144030072C09300C13273D0B122A320C3B04012D0B32 = 9;
            }
            if( $_obf_0D112D233B1F020805310A2D273736173C060210110F22 >= 1 ) 
            {
                $_obf_0D144030072C09300C13273D0B122A320C3B04012D0B32 = 25;
            }
            if( $_obf_0D5B0F052F10120C34130F05300E2E0C190E3D38233F01 >= 1 ) 
            {
                $_obf_0D144030072C09300C13273D0B122A320C3B04012D0B32 = 50;
            }
            if( $_obf_0D1E2724162F34090910342C1931383421080F2A182F01 >= 1 ) 
            {
                $_obf_0D144030072C09300C13273D0B122A320C3B04012D0B32 = 250;
            }
            return $_obf_0D144030072C09300C13273D0B122A320C3B04012D0B32;
        }
        public function HexFormat($num)
        {
            $str = strlen(dechex($num)) . dechex($num);
            return $str;
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
        public function GetGambleSettings()
        {
            $spinWin = rand(1, $this->WinGamble);
            return $spinWin;
        }
    }

}
