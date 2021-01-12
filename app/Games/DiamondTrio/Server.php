<?php 
namespace VanguardLTE\Games\DiamondTrio
{
    include('CheckReels.php');
    class Server
    {
        public function get($request, $game)
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
            $checked = new \VanguardLTE\Lib\LicenseDK();
            $license_notifications_array = $checked->aplVerifyLicenseDK(null, 0);
            if( $license_notifications_array['notification_case'] != 'notification_license_ok' ) 
            {
                $response = '{"responseEvent":"error","responseType":"error","serverResponse":"Error LicenseDK"}';
                exit( $response );
            }             */
$response = ''; 
            \DB::beginTransaction();
            $userId = \Auth::id();
            if( $userId == null ) 
            {
                $response = '{"responseEvent":"error","responseType":"","serverResponse":"invalid login"}';
                exit( $response );
            }
            $slotSettings = new SlotSettings($game, $userId);
            $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22 = json_decode(trim(file_get_contents('php://input')), true);
            if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'update' ) 
            {
                $response = '{"responseEvent":"error","responseType":"' . $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] . '","serverResponse":"' . $slotSettings->GetBalance() . '"}';
                exit( $response );
            }
            if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'bet' || $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'freespin' || $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'respin' ) 
            {
                if( !in_array($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotLines'], $slotSettings->gameLine) || !in_array($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotBet'], $slotSettings->Bet) ) 
                {
                    $response = '{"responseEvent":"error","responseType":"' . $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] . '","serverResponse":"invalid bet state"}';
                    exit( $response );
                }
                if( $slotSettings->GetBalance() < ($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotLines'] * $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotBet']) && $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'bet' ) 
                {
                    $response = '{"responseEvent":"error","responseType":"' . $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] . '","serverResponse":"invalid balance"}';
                    exit( $response );
                }
                if( $slotSettings->GetGameData($slotSettings->slotId . 'FreeGames') <= $slotSettings->GetGameData($slotSettings->slotId . 'CurrentFreeGame') && $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'freespin' ) 
                {
                    $response = '{"responseEvent":"error","responseType":"' . $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] . '","serverResponse":"invalid bonus state"}';
                    exit( $response );
                }
            }
            else if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'slotGamble' && $slotSettings->GetGameData($slotSettings->slotId . 'TotalWin') <= 0 ) 
            {
                $response = '{"responseEvent":"error","responseType":"' . $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] . '","serverResponse":"invalid gamble state"}';
                exit( $response );
            }
            if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'getSettings' ) 
            {
                $lastEvent = $slotSettings->GetHistory();
                if( $lastEvent != 'NULL' ) 
                {
                    if( isset($lastEvent->serverResponse->expSymbol) ) 
                    {
                        $slotSettings->SetGameData($slotSettings->slotId . 'ExpSymbol', $lastEvent->serverResponse->expSymbol);
                    }
                    if( isset($lastEvent->serverResponse->bonusWin) ) 
                    {
                        $slotSettings->SetGameData($slotSettings->slotId . 'BonusWin', $lastEvent->serverResponse->bonusWin);
                    }
                    else
                    {
                        $slotSettings->SetGameData($slotSettings->slotId . 'BonusWin', $lastEvent->serverResponse->totalWin);
                    }
                    $slotSettings->SetGameData($slotSettings->slotId . 'FreeGames', $lastEvent->serverResponse->totalFreeGames);
                    $slotSettings->SetGameData($slotSettings->slotId . 'CurrentFreeGame', $lastEvent->serverResponse->currentFreeGames);
                    $slotSettings->SetGameData($slotSettings->slotId . 'TotalWin', $lastEvent->serverResponse->totalWin);
                    $slotSettings->SetGameData($slotSettings->slotId . 'FreeBalance', $lastEvent->serverResponse->Balance);
                    $slotSettings->SetGameData($slotSettings->slotId . 'RespinMode', $lastEvent->serverResponse->RespinMode);
                    $slotSettings->SetGameData($slotSettings->slotId . 'RespinReel', $lastEvent->serverResponse->RespinReel);
                    $slotSettings->SetGameData($slotSettings->slotId . 'Reels', (array)$lastEvent->serverResponse->Reels);
                }
                $_obf_0D2307370C401A042D310F070D313207280830055B2A32 = json_encode($slotSettings);
                $lang = json_encode(\Lang::get('games.' . $game));
                $slotSettings->SetGameData('DiamondTrioRespinMode', false);
                $slotSettings->SetGameData('DiamondTrioRespinWin', 0);
                $response = '{"responseEvent":"getSettings","slotLanguage":' . $lang . ',"serverResponse":' . $_obf_0D2307370C401A042D310F070D313207280830055B2A32 . '}';
            }
            else if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'gamble5GetUserCards' ) 
            {
                $Balance = $slotSettings->GetBalance();
                $_obf_0D2F3C2804395C38101A1C05232C1040362D390D1D3301 = rand(1, $slotSettings->GetGambleSettings());
                $_obf_0D040B162710402D331E2209370C14231F2C252B172601 = $slotSettings->GetGameData('DiamondTrioDealerCard');
                $totalWin = $slotSettings->GetGameData('DiamondTrioTotalWin');
                $_obf_0D2D1D15122B0303242922110A351334341A371C0C3101 = 0;
                $gambleChoice = $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['gambleChoice'] - 2;
                $_obf_0D1C0D102A3D1F22280124351A230D33190A15123B2522 = '';
                $_obf_0D150D131414123F011E1F09403221085B233717403C22 = [
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13, 
                    14
                ];
                $_obf_0D0A0B32260E260B5C152A0C3C0717270A3B2C192C0211 = [
                    'C', 
                    'S', 
                    'D', 
                    'H'
                ];
                $_obf_0D5B182E0E11371B271E18193E040A1A28262E2A303611 = [
                    '', 
                    '', 
                    '2', 
                    '3', 
                    '4', 
                    '5', 
                    '6', 
                    '7', 
                    '8', 
                    '9', 
                    '10', 
                    'J', 
                    'Q', 
                    'K', 
                    'A'
                ];
                $_obf_0D1411191609280C1434232A2B0823093517151A283922 = 0;
                $_obf_0D31140A120E1B3D282A06280B27103B250935092B1F01 = $totalWin;
                if( $slotSettings->GetBank((isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']) ? $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] : '')) < ($totalWin * 2) ) 
                {
                    $_obf_0D2F3C2804395C38101A1C05232C1040362D390D1D3301 = 0;
                }
                if( $_obf_0D2F3C2804395C38101A1C05232C1040362D390D1D3301 == 1 ) 
                {
                    $_obf_0D1411191609280C1434232A2B0823093517151A283922 = rand($_obf_0D040B162710402D331E2209370C14231F2C252B172601, 14);
                }
                else
                {
                    $_obf_0D1411191609280C1434232A2B0823093517151A283922 = rand(2, $_obf_0D040B162710402D331E2209370C14231F2C252B172601);
                }
                if( $_obf_0D040B162710402D331E2209370C14231F2C252B172601 < $_obf_0D1411191609280C1434232A2B0823093517151A283922 ) 
                {
                    $_obf_0D2D1D15122B0303242922110A351334341A371C0C3101 = $totalWin;
                    $totalWin = $totalWin * 2;
                    $_obf_0D1C0D102A3D1F22280124351A230D33190A15123B2522 = 'win';
                }
                else if( $_obf_0D1411191609280C1434232A2B0823093517151A283922 < $_obf_0D040B162710402D331E2209370C14231F2C252B172601 ) 
                {
                    $_obf_0D2D1D15122B0303242922110A351334341A371C0C3101 = -1 * $totalWin;
                    $totalWin = 0;
                    $_obf_0D1C0D102A3D1F22280124351A230D33190A15123B2522 = 'lose';
                }
                else
                {
                    $_obf_0D2D1D15122B0303242922110A351334341A371C0C3101 = $totalWin;
                    $totalWin = $totalWin;
                    $_obf_0D1C0D102A3D1F22280124351A230D33190A15123B2522 = 'draw';
                }
                if( $_obf_0D2D1D15122B0303242922110A351334341A371C0C3101 != $totalWin ) 
                {
                    $slotSettings->SetBalance($_obf_0D2D1D15122B0303242922110A351334341A371C0C3101);
                    $slotSettings->SetBank((isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']) ? $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] : ''), $_obf_0D2D1D15122B0303242922110A351334341A371C0C3101 * -1);
                }
                $_obf_0D18161E352E061A0433191E381C2E0B222A272A2D3E22 = $slotSettings->GetBalance();
                $_obf_0D0F0A0C0B11232E3F18330D2F283003181C24311E0F32 = [
                    rand(2, 14), 
                    rand(2, 14), 
                    rand(2, 14), 
                    rand(2, 14)
                ];
                $_obf_0D0F0A0C0B11232E3F18330D2F283003181C24311E0F32[$gambleChoice] = $_obf_0D1411191609280C1434232A2B0823093517151A283922;
                for( $i = 0; $i < 4; $i++ ) 
                {
                    $_obf_0D0F0A0C0B11232E3F18330D2F283003181C24311E0F32[$i] = '"' . $_obf_0D5B182E0E11371B271E18193E040A1A28262E2A303611[$_obf_0D0F0A0C0B11232E3F18330D2F283003181C24311E0F32[$i]] . $_obf_0D0A0B32260E260B5C152A0C3C0717270A3B2C192C0211[rand(0, 3)] . '"';
                }
                $_obf_0D3504060F0735361A0C112A5C231C1E08031E3B0B3D32 = implode(',', $_obf_0D0F0A0C0B11232E3F18330D2F283003181C24311E0F32);
                $slotSettings->SetGameData('DiamondTrioTotalWin', $totalWin);
                $_obf_0D2307370C401A042D310F070D313207280830055B2A32 = '{"dealerCard":"' . $_obf_0D040B162710402D331E2209370C14231F2C252B172601 . '","playerCards":[' . $_obf_0D3504060F0735361A0C112A5C231C1E08031E3B0B3D32 . '],"gambleState":"' . $_obf_0D1C0D102A3D1F22280124351A230D33190A15123B2522 . '","totalWin":' . $totalWin . ',"afterBalance":' . $_obf_0D18161E352E061A0433191E381C2E0B222A272A2D3E22 . ',"Balance":' . $Balance . '}';
                $response = '{"responseEvent":"gambleResult","deb":' . $_obf_0D0F0A0C0B11232E3F18330D2F283003181C24311E0F32[$gambleChoice] . ',"serverResponse":' . $_obf_0D2307370C401A042D310F070D313207280830055B2A32 . '}';
            }
            else if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'gamble5GetDealerCard' ) 
            {
                $_obf_0D150D131414123F011E1F09403221085B233717403C22 = [
                    2, 
                    3, 
                    4, 
                    5, 
                    6, 
                    7, 
                    8, 
                    9, 
                    10, 
                    11, 
                    12, 
                    13, 
                    14
                ];
                $_obf_0D5B182E0E11371B271E18193E040A1A28262E2A303611 = [
                    '', 
                    '', 
                    '2', 
                    '3', 
                    '4', 
                    '5', 
                    '6', 
                    '7', 
                    '8', 
                    '9', 
                    '10', 
                    'J', 
                    'Q', 
                    'K', 
                    'A'
                ];
                $_obf_0D0A0B32260E260B5C152A0C3C0717270A3B2C192C0211 = [
                    'C', 
                    'S', 
                    'D', 
                    'H'
                ];
                $_obf_0D5B5C0F232838114030190505402A241E131019332901 = $_obf_0D150D131414123F011E1F09403221085B233717403C22[rand(0, 12)];
                $slotSettings->SetGameData('DiamondTrioDealerCard', $_obf_0D5B5C0F232838114030190505402A241E131019332901);
                $_obf_0D040B162710402D331E2209370C14231F2C252B172601 = $_obf_0D5B182E0E11371B271E18193E040A1A28262E2A303611[$_obf_0D5B5C0F232838114030190505402A241E131019332901] . $_obf_0D0A0B32260E260B5C152A0C3C0717270A3B2C192C0211[rand(0, 3)];
                $_obf_0D2307370C401A042D310F070D313207280830055B2A32 = '{"dealerCard":"' . $_obf_0D040B162710402D331E2209370C14231F2C252B172601 . '"}';
                $response = '{"responseEvent":"gamble5DealerCard","serverResponse":' . $_obf_0D2307370C401A042D310F070D313207280830055B2A32 . '}';
            }
            else if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'slotGamble' ) 
            {
                $Balance = $slotSettings->GetBalance();
                $_obf_0D2F3C2804395C38101A1C05232C1040362D390D1D3301 = rand(1, $slotSettings->GetGambleSettings());
                $_obf_0D040B162710402D331E2209370C14231F2C252B172601 = '';
                $totalWin = $slotSettings->GetGameData('DiamondTrioTotalWin');
                $_obf_0D2D1D15122B0303242922110A351334341A371C0C3101 = 0;
                $_obf_0D31140A120E1B3D282A06280B27103B250935092B1F01 = $totalWin;
                if( $slotSettings->GetBank((isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']) ? $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] : '')) < ($totalWin * 2) ) 
                {
                    $_obf_0D2F3C2804395C38101A1C05232C1040362D390D1D3301 = 0;
                }
                if( $_obf_0D2F3C2804395C38101A1C05232C1040362D390D1D3301 == 1 ) 
                {
                    $_obf_0D1C0D102A3D1F22280124351A230D33190A15123B2522 = 'win';
                    $_obf_0D2D1D15122B0303242922110A351334341A371C0C3101 = $totalWin;
                    $totalWin = $totalWin * 2;
                    if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['gambleChoice'] == 'red' ) 
                    {
                        $_obf_0D1D3229361F0A3E062B2224050A0E013D0F1911072E01 = [
                            'D', 
                            'H'
                        ];
                        $_obf_0D040B162710402D331E2209370C14231F2C252B172601 = $_obf_0D1D3229361F0A3E062B2224050A0E013D0F1911072E01[rand(0, 1)];
                    }
                    else
                    {
                        $_obf_0D1D3229361F0A3E062B2224050A0E013D0F1911072E01 = [
                            'C', 
                            'S'
                        ];
                        $_obf_0D040B162710402D331E2209370C14231F2C252B172601 = $_obf_0D1D3229361F0A3E062B2224050A0E013D0F1911072E01[rand(0, 1)];
                    }
                }
                else
                {
                    $_obf_0D1C0D102A3D1F22280124351A230D33190A15123B2522 = 'lose';
                    $_obf_0D2D1D15122B0303242922110A351334341A371C0C3101 = -1 * $totalWin;
                    $totalWin = 0;
                    if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['gambleChoice'] == 'red' ) 
                    {
                        $_obf_0D1D3229361F0A3E062B2224050A0E013D0F1911072E01 = [
                            'C', 
                            'S'
                        ];
                        $_obf_0D040B162710402D331E2209370C14231F2C252B172601 = $_obf_0D1D3229361F0A3E062B2224050A0E013D0F1911072E01[rand(0, 1)];
                    }
                    else
                    {
                        $_obf_0D1D3229361F0A3E062B2224050A0E013D0F1911072E01 = [
                            'D', 
                            'H'
                        ];
                        $_obf_0D040B162710402D331E2209370C14231F2C252B172601 = $_obf_0D1D3229361F0A3E062B2224050A0E013D0F1911072E01[rand(0, 1)];
                    }
                }
                $slotSettings->SetGameData('DiamondTrioTotalWin', $totalWin);
                $slotSettings->SetBalance($_obf_0D2D1D15122B0303242922110A351334341A371C0C3101);
                $slotSettings->SetBank((isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']) ? $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] : ''), $_obf_0D2D1D15122B0303242922110A351334341A371C0C3101 * -1);
                $_obf_0D18161E352E061A0433191E381C2E0B222A272A2D3E22 = $slotSettings->GetBalance();
                $_obf_0D2307370C401A042D310F070D313207280830055B2A32 = '{"dealerCard":"' . $_obf_0D040B162710402D331E2209370C14231F2C252B172601 . '","gambleState":"' . $_obf_0D1C0D102A3D1F22280124351A230D33190A15123B2522 . '","totalWin":' . $totalWin . ',"afterBalance":' . $_obf_0D18161E352E061A0433191E381C2E0B222A272A2D3E22 . ',"Balance":' . $Balance . '}';
                $response = '{"responseEvent":"gambleResult","serverResponse":' . $_obf_0D2307370C401A042D310F070D313207280830055B2A32 . '}';
                $slotSettings->SaveLogReport($response, $_obf_0D31140A120E1B3D282A06280B27103B250935092B1F01, 1, $_obf_0D2D1D15122B0303242922110A351334341A371C0C3101, $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']);
            }
            else if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'bet' || $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'freespin' ) 
            {
                if( !isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['gameCommand']) ) 
                {
                    $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['gameCommand'] = 'none';
                }
                $linesId = [];
                $linesId[0] = [
                    2, 
                    2, 
                    2, 
                    2, 
                    2
                ];
                $linesId[1] = [
                    1, 
                    1, 
                    1, 
                    1, 
                    1
                ];
                $linesId[2] = [
                    3, 
                    3, 
                    3, 
                    3, 
                    3
                ];
                $linesId[3] = [
                    1, 
                    2, 
                    3, 
                    2, 
                    1
                ];
                $linesId[4] = [
                    3, 
                    2, 
                    1, 
                    2, 
                    3
                ];
                $linesId[5] = [
                    2, 
                    1, 
                    1, 
                    1, 
                    2
                ];
                $linesId[6] = [
                    2, 
                    3, 
                    3, 
                    3, 
                    2
                ];
                $linesId[7] = [
                    1, 
                    1, 
                    2, 
                    3, 
                    3
                ];
                $linesId[8] = [
                    3, 
                    3, 
                    2, 
                    1, 
                    1
                ];
                $_obf_0D360F0140113330275B14311E3516150112390A0F1B22 = $slotSettings->GetSpinSettings($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'], $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotBet'] * $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotLines'], $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotLines']);
                $winType = $_obf_0D360F0140113330275B14311E3516150112390A0F1B22[0];
                $_obf_0D3030072F273706293C133F2F072B113B383322291201 = $_obf_0D360F0140113330275B14311E3516150112390A0F1B22[1];
                if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['gameCommand'] == 'respin' ) 
                {
                    $winType = 'win';
                    $_obf_0D3030072F273706293C133F2F072B113B383322291201 = $slotSettings->GetBank((isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']) ? $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] : ''));
                }
                if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] != 'freespin' && $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['gameCommand'] != 'respin' ) 
                {
                    if( !isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']) ) 
                    {
                        $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] = 'bet';
                    }
                    $slotSettings->SetBalance(-1 * ($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotBet'] * $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotLines']), $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']);
                    $_obf_0D2A0526273612293511363C26193E1C130B2719192611 = ($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotBet'] * $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotLines']) / 100 * $slotSettings->GetPercent();
                    $slotSettings->SetBank((isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']) ? $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] : ''), $_obf_0D2A0526273612293511363C26193E1C130B2719192611, $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']);
                    $bonusMpl = 1;
                    $slotSettings->SetGameData('DiamondTrioBonusWin', 0);
                    $slotSettings->SetGameData('DiamondTrioFreeGames', 0);
                    $slotSettings->SetGameData('DiamondTrioCurrentFreeGame', 0);
                    $slotSettings->SetGameData('DiamondTrioTotalWin', 0);
                    $slotSettings->SetGameData('DiamondTrioFreeBalance', 0);
                    $slotSettings->SetGameData('DiamondTrioRespinMode', true);
                    $slotSettings->SetGameData('DiamondTrioRespinReel', 0);
                    $slotSettings->SetGameData('DiamondTrioReels', []);
                }
                else
                {
                    if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['gameCommand'] != 'respin' ) 
                    {
                        $slotSettings->SetGameData('DiamondTrioCurrentFreeGame', $slotSettings->GetGameData('DiamondTrioCurrentFreeGame') + 1);
                    }
                    $bonusMpl = $slotSettings->slotFreeMpl;
                }
                $Balance = $slotSettings->GetBalance();
                if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] != 'freespin' ) 
                {
                    $slotSettings->UpdateJackpots($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotBet'] * $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotLines']);
                }
                for( $i = 0; $i <= 2000; $i++ ) 
                {
                    $totalWin = 0;
                    $lineWins = [];
                    $cWins = [
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
                    $wild = ['SCAT'];
                    $scatter = 'SCAT';
                    $reels = $slotSettings->GetReelStrips($winType);
                    if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['gameCommand'] == 'respin' ) 
                    {
                        $_obf_0D1D190732303117182A032A083236110B03405B101A01 = $slotSettings->GetGameData('DiamondTrioReels');
                        $_obf_0D1D190732303117182A032A083236110B03405B101A01['reel' . $slotSettings->GetGameData('DiamondTrioRespinReel')] = $reels['reel' . $slotSettings->GetGameData('DiamondTrioRespinReel')];
                        $reels = $_obf_0D1D190732303117182A032A083236110B03405B101A01;
                    }
                    for( $k = 0; $k < $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotLines']; $k++ ) 
                    {
                        $_obf_0D02100911023C3C260E0C262F5B2C1D2839310E112A32 = '';
                        for( $j = 0; $j < count($slotSettings->SymbolGame); $j++ ) 
                        {
                            $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 = $slotSettings->SymbolGame[$j];
                            if( $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 == $scatter || !isset($slotSettings->Paytable[$_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11]) ) 
                            {
                            }
                            else
                            {
                                $s = [];
                                $s[0] = $reels['reel1'][$linesId[$k][0] - 1];
                                $s[1] = $reels['reel2'][$linesId[$k][1] - 1];
                                $s[2] = $reels['reel3'][$linesId[$k][2] - 1];
                                $s[3] = $reels['reel4'][$linesId[$k][3] - 1];
                                $s[4] = $reels['reel5'][$linesId[$k][4] - 1];
                                if( ($s[0] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($s[0], $wild)) && ($s[1] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($s[1], $wild)) ) 
                                {
                                    $mpl = 1;
                                    if( in_array($s[0], $wild) && in_array($s[1], $wild) ) 
                                    {
                                        $mpl = 1;
                                    }
                                    else if( in_array($s[0], $wild) || in_array($s[1], $wild) ) 
                                    {
                                        $mpl = $slotSettings->slotWildMpl;
                                    }
                                    $_obf_0D365B172533170712222423300A1B092C161521071B32 = $slotSettings->Paytable[$_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11][2] * $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotBet'] * $mpl * $bonusMpl;
                                    if( $cWins[$k] < $_obf_0D365B172533170712222423300A1B092C161521071B32 ) 
                                    {
                                        $cWins[$k] = $_obf_0D365B172533170712222423300A1B092C161521071B32;
                                        $_obf_0D02100911023C3C260E0C262F5B2C1D2839310E112A32 = '{"Count":2,"Line":' . $k . ',"Win":' . ($totalWin + $cWins[$k]) . ',"stepWin":' . ($cWins[$k] + $totalWin + $slotSettings->GetGameData('DiamondTrioBonusWin') + $slotSettings->GetGameData('DiamondTrioRespinWin')) . ',"winReel1":[' . ($linesId[$k][0] - 1) . ',"' . $s[0] . '"],"winReel2":[' . ($linesId[$k][1] - 1) . ',"' . $s[1] . '"],"winReel3":["none","none"],"winReel4":["none","none"],"winReel5":["none","none"]}';
                                    }
                                }
                                if( ($s[0] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($s[0], $wild)) && ($s[1] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($s[1], $wild)) && ($s[2] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($s[2], $wild)) ) 
                                {
                                    $mpl = 1;
                                    if( in_array($s[0], $wild) && in_array($s[1], $wild) && in_array($s[2], $wild) ) 
                                    {
                                        $mpl = 1;
                                    }
                                    else if( in_array($s[0], $wild) || in_array($s[1], $wild) || in_array($s[2], $wild) ) 
                                    {
                                        $mpl = $slotSettings->slotWildMpl;
                                    }
                                    $_obf_0D365B172533170712222423300A1B092C161521071B32 = $slotSettings->Paytable[$_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11][3] * $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotBet'] * $mpl * $bonusMpl;
                                    if( $cWins[$k] < $_obf_0D365B172533170712222423300A1B092C161521071B32 ) 
                                    {
                                        $cWins[$k] = $_obf_0D365B172533170712222423300A1B092C161521071B32;
                                        $_obf_0D02100911023C3C260E0C262F5B2C1D2839310E112A32 = '{"Count":3,"Line":' . $k . ',"Win":' . ($totalWin + $cWins[$k]) . ',"stepWin":' . ($cWins[$k] + $totalWin + $slotSettings->GetGameData('DiamondTrioBonusWin') + $slotSettings->GetGameData('DiamondTrioRespinWin')) . ',"winReel1":[' . ($linesId[$k][0] - 1) . ',"' . $s[0] . '"],"winReel2":[' . ($linesId[$k][1] - 1) . ',"' . $s[1] . '"],"winReel3":[' . ($linesId[$k][2] - 1) . ',"' . $s[2] . '"],"winReel4":["none","none"],"winReel5":["none","none"]}';
                                    }
                                }
                                if( ($s[0] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($s[0], $wild)) && ($s[1] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($s[1], $wild)) && ($s[2] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($s[2], $wild)) && ($s[3] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($s[3], $wild)) ) 
                                {
                                    $mpl = 1;
                                    if( in_array($s[0], $wild) && in_array($s[1], $wild) && in_array($s[2], $wild) && in_array($s[3], $wild) ) 
                                    {
                                        $mpl = 1;
                                    }
                                    else if( in_array($s[0], $wild) || in_array($s[1], $wild) || in_array($s[2], $wild) || in_array($s[3], $wild) ) 
                                    {
                                        $mpl = $slotSettings->slotWildMpl;
                                    }
                                    $_obf_0D365B172533170712222423300A1B092C161521071B32 = $slotSettings->Paytable[$_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11][4] * $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotBet'] * $mpl * $bonusMpl;
                                    if( $cWins[$k] < $_obf_0D365B172533170712222423300A1B092C161521071B32 ) 
                                    {
                                        $cWins[$k] = $_obf_0D365B172533170712222423300A1B092C161521071B32;
                                        $_obf_0D02100911023C3C260E0C262F5B2C1D2839310E112A32 = '{"Count":4,"Line":' . $k . ',"Win":' . ($totalWin + $cWins[$k]) . ',"stepWin":' . ($cWins[$k] + $totalWin + $slotSettings->GetGameData('DiamondTrioBonusWin') + $slotSettings->GetGameData('DiamondTrioRespinWin')) . ',"winReel1":[' . ($linesId[$k][0] - 1) . ',"' . $s[0] . '"],"winReel2":[' . ($linesId[$k][1] - 1) . ',"' . $s[1] . '"],"winReel3":[' . ($linesId[$k][2] - 1) . ',"' . $s[2] . '"],"winReel4":[' . ($linesId[$k][3] - 1) . ',"' . $s[3] . '"],"winReel5":["none","none"]}';
                                    }
                                }
                                if( ($s[0] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($s[0], $wild)) && ($s[1] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($s[1], $wild)) && ($s[2] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($s[2], $wild)) && ($s[3] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($s[3], $wild)) && ($s[4] == $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 || in_array($s[4], $wild)) ) 
                                {
                                    $mpl = 1;
                                    if( in_array($s[0], $wild) && in_array($s[1], $wild) && in_array($s[2], $wild) && in_array($s[3], $wild) && in_array($s[4], $wild) ) 
                                    {
                                        $mpl = 1;
                                    }
                                    else if( in_array($s[0], $wild) || in_array($s[1], $wild) || in_array($s[2], $wild) || in_array($s[3], $wild) || in_array($s[4], $wild) ) 
                                    {
                                        $mpl = $slotSettings->slotWildMpl;
                                    }
                                    $_obf_0D365B172533170712222423300A1B092C161521071B32 = $slotSettings->Paytable[$_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11][5] * $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotBet'] * $mpl * $bonusMpl;
                                    if( $cWins[$k] < $_obf_0D365B172533170712222423300A1B092C161521071B32 ) 
                                    {
                                        $cWins[$k] = $_obf_0D365B172533170712222423300A1B092C161521071B32;
                                        $_obf_0D02100911023C3C260E0C262F5B2C1D2839310E112A32 = '{"Count":5,"Line":' . $k . ',"Win":' . ($totalWin + $cWins[$k]) . ',"stepWin":' . ($cWins[$k] + $totalWin + $slotSettings->GetGameData('DiamondTrioBonusWin') + $slotSettings->GetGameData('DiamondTrioRespinWin')) . ',"winReel1":[' . ($linesId[$k][0] - 1) . ',"' . $s[0] . '"],"winReel2":[' . ($linesId[$k][1] - 1) . ',"' . $s[1] . '"],"winReel3":[' . ($linesId[$k][2] - 1) . ',"' . $s[2] . '"],"winReel4":[' . ($linesId[$k][3] - 1) . ',"' . $s[3] . '"],"winReel5":[' . ($linesId[$k][4] - 1) . ',"' . $s[4] . '"]}';
                                    }
                                }
                            }
                        }
                        if( $cWins[$k] > 0 && $_obf_0D02100911023C3C260E0C262F5B2C1D2839310E112A32 != '' ) 
                        {
                            array_push($lineWins, $_obf_0D02100911023C3C260E0C262F5B2C1D2839310E112A32);
                            $totalWin += $cWins[$k];
                        }
                    }
                    $scattersWin = 0;
                    $scattersStr = '{';
                    $scattersCount = 0;
                    for( $r = 1; $r <= 5; $r++ ) 
                    {
                        for( $_obf_0D31403C0837332A1A1711312A3415151610280F122122 = 0; $_obf_0D31403C0837332A1A1711312A3415151610280F122122 <= 3; $_obf_0D31403C0837332A1A1711312A3415151610280F122122++ ) 
                        {
                            if( $reels['reel' . $r][$_obf_0D31403C0837332A1A1711312A3415151610280F122122] == $scatter ) 
                            {
                                $scattersCount++;
                                $scattersStr .= ('"winReel' . $r . '":[' . $_obf_0D31403C0837332A1A1711312A3415151610280F122122 . ',"' . $reels['reel' . $r][$_obf_0D31403C0837332A1A1711312A3415151610280F122122] . '"],');
                            }
                        }
                    }
                    $scattersWin = $slotSettings->Paytable[$scatter][$scattersCount] * $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotBet'] * $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotLines'];
                    if( $scattersCount >= 3 ) 
                    {
                        $scattersStr .= '"scattersType":"bonus",';
                    }
                    else if( $scattersWin > 0 ) 
                    {
                        $scattersStr .= '"scattersType":"win",';
                    }
                    else
                    {
                        $scattersStr .= '"scattersType":"none",';
                    }
                    $scattersStr .= ('"scattersWin":' . $scattersWin . '}');
                    $totalWin += $scattersWin;
                    $_obf_0D1E172D073611242E5B19211B5C032E02020419091411 = '';
                    $_obf_0D2E1E1B243B1539121217063D0F0B300437362A172C01 = 0;
                    $_obf_0D0C0835282D1E0F072206361C132E3632160F28341001 = [
                        0, 
                        0, 
                        0, 
                        0, 
                        0, 
                        0
                    ];
                    for( $m = 1; $m <= 5; $m += 2 ) 
                    {
                        if( $reels['reel' . $m][0] == $scatter ) 
                        {
                            $_obf_0D0C0835282D1E0F072206361C132E3632160F28341001[$m] = true;
                        }
                        else if( $reels['reel' . $m][1] == $scatter ) 
                        {
                            $_obf_0D0C0835282D1E0F072206361C132E3632160F28341001[$m] = true;
                        }
                        else if( $reels['reel' . $m][2] == $scatter ) 
                        {
                            $_obf_0D0C0835282D1E0F072206361C132E3632160F28341001[$m] = true;
                        }
                    }
                    $_obf_0D2E1E1B243B1539121217063D0F0B300437362A172C01 = 0;
                    $_obf_0D2B18400B340B2518401A0F24223E22330E1332391632 = 0;
                    $_obf_0D072D110F26313601160A5B5B5C401C5C0C2C1E2B1632 = 0;
                    if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'freespin' ) 
                    {
                        $_obf_0D1E172D073611242E5B19211B5C032E02020419091411 = '';
                        for( $m = 1; $m <= 5; $m += 2 ) 
                        {
                            if( $reels['reel' . $m][0] == $scatter ) 
                            {
                                $_obf_0D2B18400B340B2518401A0F24223E22330E1332391632 += 2;
                                if( $m == 1 ) 
                                {
                                    $_obf_0D072D110F26313601160A5B5B5C401C5C0C2C1E2B1632 = 1;
                                }
                                else if( $m == 3 ) 
                                {
                                    $_obf_0D072D110F26313601160A5B5B5C401C5C0C2C1E2B1632 = 2;
                                }
                                else if( $m == 5 ) 
                                {
                                    $_obf_0D072D110F26313601160A5B5B5C401C5C0C2C1E2B1632 = 3;
                                }
                                $_obf_0D2E1E1B243B1539121217063D0F0B300437362A172C01 = $totalWin * ($_obf_0D2B18400B340B2518401A0F24223E22330E1332391632 - 1);
                                $_obf_0D1E172D073611242E5B19211B5C032E02020419091411 .= ('["SCAT_' . $_obf_0D072D110F26313601160A5B5B5C401C5C0C2C1E2B1632 . '_FS",0,"X2",' . ($totalWin + $_obf_0D2E1E1B243B1539121217063D0F0B300437362A172C01 + $slotSettings->GetGameData('DiamondTrioTotalWin')) . ',' . ($totalWin * $_obf_0D2B18400B340B2518401A0F24223E22330E1332391632) . ',' . $m . '],');
                            }
                            else if( $reels['reel' . $m][1] == $scatter ) 
                            {
                                $_obf_0D2B18400B340B2518401A0F24223E22330E1332391632 += 2;
                                if( $m == 1 ) 
                                {
                                    $_obf_0D072D110F26313601160A5B5B5C401C5C0C2C1E2B1632 = 1;
                                }
                                else if( $m == 3 ) 
                                {
                                    $_obf_0D072D110F26313601160A5B5B5C401C5C0C2C1E2B1632 = 2;
                                }
                                else if( $m == 5 ) 
                                {
                                    $_obf_0D072D110F26313601160A5B5B5C401C5C0C2C1E2B1632 = 3;
                                }
                                $_obf_0D2E1E1B243B1539121217063D0F0B300437362A172C01 = $totalWin * ($_obf_0D2B18400B340B2518401A0F24223E22330E1332391632 - 1);
                                $_obf_0D1E172D073611242E5B19211B5C032E02020419091411 .= ('["SCAT_' . $_obf_0D072D110F26313601160A5B5B5C401C5C0C2C1E2B1632 . '_FS",1,"X2",' . ($totalWin + $_obf_0D2E1E1B243B1539121217063D0F0B300437362A172C01 + $slotSettings->GetGameData('DiamondTrioTotalWin')) . ',' . ($totalWin * $_obf_0D2B18400B340B2518401A0F24223E22330E1332391632) . ',' . $m . '],');
                            }
                            else if( $reels['reel' . $m][2] == $scatter ) 
                            {
                                $_obf_0D2B18400B340B2518401A0F24223E22330E1332391632 += 2;
                                if( $m == 1 ) 
                                {
                                    $_obf_0D072D110F26313601160A5B5B5C401C5C0C2C1E2B1632 = 1;
                                }
                                else if( $m == 3 ) 
                                {
                                    $_obf_0D072D110F26313601160A5B5B5C401C5C0C2C1E2B1632 = 2;
                                }
                                else if( $m == 5 ) 
                                {
                                    $_obf_0D072D110F26313601160A5B5B5C401C5C0C2C1E2B1632 = 3;
                                }
                                $_obf_0D2E1E1B243B1539121217063D0F0B300437362A172C01 = $totalWin * ($_obf_0D2B18400B340B2518401A0F24223E22330E1332391632 - 1);
                                $_obf_0D1E172D073611242E5B19211B5C032E02020419091411 .= ('["SCAT_' . $_obf_0D072D110F26313601160A5B5B5C401C5C0C2C1E2B1632 . '_FS",2,"X2",' . ($totalWin + $_obf_0D2E1E1B243B1539121217063D0F0B300437362A172C01 + $slotSettings->GetGameData('DiamondTrioTotalWin')) . ',' . ($totalWin * $_obf_0D2B18400B340B2518401A0F24223E22330E1332391632) . ',' . $m . '],');
                            }
                        }
                        if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'freespin' && $_obf_0D1E172D073611242E5B19211B5C032E02020419091411 != '' ) 
                        {
                            $_obf_0D1E172D073611242E5B19211B5C032E02020419091411 = '"freeMultiplier":[' . $_obf_0D1E172D073611242E5B19211B5C032E02020419091411 . '[]],';
                        }
                    }
                    if( $i > 1000 ) 
                    {
                        $winType = 'none';
                    }
                    if( $slotSettings->increaseRTP && $winType == 'win' && $totalWin < ($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotLines'] * $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotBet'] * rand(2, 5)) ) 
                    {
                    }
                    else if( !$slotSettings->increaseRTP && $winType == 'win' && $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotLines'] * $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotBet'] < $totalWin ) 
                    {
                    }
                    else
                    {
                        if( $i > 1500 ) 
                        {
                            $response = '{"responseEvent":"error","responseType":"' . $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] . '","serverResponse":"Bad Reel Strip"}';
                            exit( $response );
                        }
                        if( $scattersCount >= 3 && $winType != 'bonus' ) 
                        {
                        }
                        else if( $totalWin + $_obf_0D2E1E1B243B1539121217063D0F0B300437362A172C01 <= $_obf_0D3030072F273706293C133F2F072B113B383322291201 && $winType == 'bonus' ) 
                        {
                            $_obf_0D195C0F2915230B5C17342A08251204342D3C1F024001 = $slotSettings->GetBank((isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']) ? $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] : ''));
                            if( $_obf_0D195C0F2915230B5C17342A08251204342D3C1F024001 < $_obf_0D3030072F273706293C133F2F072B113B383322291201 ) 
                            {
                                $_obf_0D3030072F273706293C133F2F072B113B383322291201 = $_obf_0D195C0F2915230B5C17342A08251204342D3C1F024001;
                            }
                            else
                            {
                                break;
                            }
                        }
                        else if( $totalWin + $_obf_0D2E1E1B243B1539121217063D0F0B300437362A172C01 > 0 && $totalWin + $_obf_0D2E1E1B243B1539121217063D0F0B300437362A172C01 <= $_obf_0D3030072F273706293C133F2F072B113B383322291201 && $winType == 'win' ) 
                        {
                            $_obf_0D195C0F2915230B5C17342A08251204342D3C1F024001 = $slotSettings->GetBank((isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']) ? $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] : ''));
                            if( $_obf_0D195C0F2915230B5C17342A08251204342D3C1F024001 < $_obf_0D3030072F273706293C133F2F072B113B383322291201 ) 
                            {
                                $_obf_0D3030072F273706293C133F2F072B113B383322291201 = $_obf_0D195C0F2915230B5C17342A08251204342D3C1F024001;
                            }
                            else
                            {
                                break;
                            }
                        }
                        else if( $totalWin == 0 && $winType == 'none' ) 
                        {
                            break;
                        }
                    }
                }
                $_obf_0D380D3616071735341A041E07241E2834231E130D2532 = '"respinMode":false,"respinReel":1,';
                if( $scattersCount == 2 && $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['gameCommand'] != 'respin' ) 
                {
                    $_obf_0D3D193C1D02330B090422352F080E1927070A143D1722 = 1;
                    if( $_obf_0D0C0835282D1E0F072206361C132E3632160F28341001[1] && $_obf_0D0C0835282D1E0F072206361C132E3632160F28341001[3] ) 
                    {
                        $_obf_0D3D193C1D02330B090422352F080E1927070A143D1722 = 5;
                    }
                    else if( $_obf_0D0C0835282D1E0F072206361C132E3632160F28341001[5] && $_obf_0D0C0835282D1E0F072206361C132E3632160F28341001[3] ) 
                    {
                        $_obf_0D3D193C1D02330B090422352F080E1927070A143D1722 = 1;
                    }
                    else if( $_obf_0D0C0835282D1E0F072206361C132E3632160F28341001[5] && $_obf_0D0C0835282D1E0F072206361C132E3632160F28341001[1] ) 
                    {
                        $_obf_0D3D193C1D02330B090422352F080E1927070A143D1722 = 3;
                    }
                    $_obf_0D380D3616071735341A041E07241E2834231E130D2532 = '"respinMode":true,"respinReel":' . $_obf_0D3D193C1D02330B090422352F080E1927070A143D1722 . ',';
                    $slotSettings->SetGameData('DiamondTrioRespinMode', true);
                    $slotSettings->SetGameData('DiamondTrioRespinReel', $_obf_0D3D193C1D02330B090422352F080E1927070A143D1722);
                    $slotSettings->SetGameData('DiamondTrioReels', $reels);
                }
                if( $slotSettings->GetGameData('DiamondTrioRespinMode') && $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['gameCommand'] == 'respin' ) 
                {
                    $slotSettings->SetGameData('DiamondTrioRespinMode', false);
                }
                if( $totalWin > 0 ) 
                {
                    $slotSettings->SetBank((isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']) ? $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] : ''), -1 * $totalWin + $_obf_0D2E1E1B243B1539121217063D0F0B300437362A172C01);
                    if( $slotSettings->GetGameData('DiamondTrioRespinMode') && $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] != 'freespin' ) 
                    {
                        $slotSettings->SetGameData('DiamondTrioRespinWin', $totalWin);
                    }
                    else
                    {
                        $slotSettings->SetGameData('DiamondTrioRespinWin', 0);
                    }
                }
                if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'freespin' && $slotSettings->GetGameData('DiamondTrioFreeGames') <= $slotSettings->GetGameData('DiamondTrioCurrentFreeGame') && $winType != 'bonus' && $slotSettings->GetGameData('DiamondTrioTotalWin') + $totalWin > 0 ) 
                {
                    $slotSettings->SetBalance($slotSettings->GetGameData('DiamondTrioTotalWin') + $totalWin + $_obf_0D2E1E1B243B1539121217063D0F0B300437362A172C01);
                }
                else if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] != 'freespin' && $winType != 'bonus' && $totalWin + $_obf_0D2E1E1B243B1539121217063D0F0B300437362A172C01 > 0 ) 
                {
                    $slotSettings->SetBalance($totalWin + $_obf_0D2E1E1B243B1539121217063D0F0B300437362A172C01);
                }
                $_obf_0D0C361D2E35362209025C2317232809271D34270D3232 = $totalWin + $_obf_0D2E1E1B243B1539121217063D0F0B300437362A172C01;
                if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] == 'freespin' ) 
                {
                    $slotSettings->SetGameData('DiamondTrioBonusWin', $slotSettings->GetGameData('DiamondTrioBonusWin') + $totalWin + $_obf_0D2E1E1B243B1539121217063D0F0B300437362A172C01);
                    $slotSettings->SetGameData('DiamondTrioTotalWin', $slotSettings->GetGameData('DiamondTrioTotalWin') + $totalWin + $_obf_0D2E1E1B243B1539121217063D0F0B300437362A172C01);
                    $totalWin = $slotSettings->GetGameData('DiamondTrioBonusWin');
                    $Balance = $slotSettings->GetGameData('DiamondTrioFreeBalance');
                }
                else
                {
                    $slotSettings->SetGameData('DiamondTrioTotalWin', $totalWin);
                }
                if( $scattersCount >= 3 ) 
                {
                    if( $slotSettings->GetGameData('DiamondTrioFreeGames') > 0 ) 
                    {
                        $slotSettings->SetGameData('DiamondTrioFreeBalance', $Balance);
                        $slotSettings->SetGameData('DiamondTrioBonusWin', $totalWin);
                        $slotSettings->SetGameData('DiamondTrioFreeGames', $slotSettings->GetGameData('DiamondTrioFreeGames') + $slotSettings->slotFreeCount);
                    }
                    else
                    {
                        $slotSettings->SetGameData('DiamondTrioFreeBalance', $Balance);
                        $slotSettings->SetGameData('DiamondTrioBonusWin', $totalWin);
                        $slotSettings->SetGameData('DiamondTrioFreeGames', $slotSettings->slotFreeCount);
                    }
                }
                $_obf_0D273522403840350F0A36072E150A0524143F382C3B32 = '' . json_encode($reels) . '';
                $_obf_0D28393910101E062539311B3F371C121912162B061E32 = '' . json_encode($slotSettings->Jackpots) . '';
                $_obf_0D5B5C2E0D1C3D1F232F3E051D3225380127293C2A2432 = implode(',', $lineWins);
                $response = '{"responseEvent":"spin","responseType":"' . $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] . '","serverResponse":{"RespinReel":' . $slotSettings->GetGameData('DiamondTrioRespinReel') . ',"Reels":' . json_encode($slotSettings->GetGameData('DiamondTrioReels')) . ',"RespinMode":"' . $slotSettings->GetGameData('DiamondTrioRespinMode') . '","slotLines":' . $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotLines'] . ',"slotBet":' . $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotBet'] . ',' . $_obf_0D1E172D073611242E5B19211B5C032E02020419091411 . $_obf_0D380D3616071735341A041E07241E2834231E130D2532 . '"totalFreeGames":' . $slotSettings->GetGameData('DiamondTrioFreeGames') . ',"currentFreeGames":' . $slotSettings->GetGameData('DiamondTrioCurrentFreeGame') . ',"Balance":' . $Balance . ',"afterBalance":' . $slotSettings->GetBalance() . ',"totalWin":' . $totalWin . ',"winLines":[' . $_obf_0D5B5C2E0D1C3D1F232F3E051D3225380127293C2A2432 . '],"bonusInfo":' . $scattersStr . ',"Jackpots":' . $_obf_0D28393910101E062539311B3F371C121912162B061E32 . ',"reelsSymbols":' . $_obf_0D273522403840350F0A36072E150A0524143F382C3B32 . '}}';
                $slotSettings->SaveLogReport($response, $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotBet'], $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotLines'], $_obf_0D0C361D2E35362209025C2317232809271D34270D3232, $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']);
            }
            $slotSettings->SaveGameData();
            \DB::commit();
            return $response;
        }
    }

}
