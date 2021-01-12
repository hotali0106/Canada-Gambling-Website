<?php 
namespace VanguardLTE\Games\SuperHotWD
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
            } */
            \DB::beginTransaction();
            $userId = \Auth::id();
            if( $userId == null ) 
            {
                $response = '{"responseEvent":"error","responseType":"","serverResponse":"invalid login"}';
                exit( $response );
            }
            $slotSettings = new SlotSettings($game, $userId);
            $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22 = json_decode(trim(file_get_contents('php://input')), true);
            $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201 = [];
            $_obf_0D12171C1D085B3F26182A243D113C033B133B10353011 = $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['id'];
            if( !isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['cid']) ) 
            {
                $_obf_0D321327124019390E1F2F17263913251C190A2A240F22 = '';
            }
            else
            {
                $_obf_0D321327124019390E1F2F17263913251C190A2A240F22 = $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['cid'];
            }
            if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['act'] == '464529TBNS' && $slotSettings->GetGameData('SuperHotWDTotalWin') <= 0 ) 
            {
                $response = '{"responseEvent":"error","responseType":"' . $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] . '","serverResponse":"invalid gamble state"}';
                exit( $response );
            }
            if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['act'] == 'WXMNPP7H8F' ) 
            {
                if( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['arg']['stake'] / 100 <= 0 ) 
                {
                    $response = '{"responseEvent":"error","responseType":"' . $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] . '","serverResponse":"invalid bet state"}';
                    exit( $response );
                }
                if( $slotSettings->GetBalance() < ($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['arg']['stake'] / 100) ) 
                {
                    $response = '{"responseEvent":"error","responseType":"' . $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] . '","serverResponse":"invalid balance"}';
                    exit( $response );
                }
            }
            switch( $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['act'] ) 
            {
                case 'setup':
                    $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = '{"a": "LW9XuzrO", "cid": "DRUXHWsV", "id": ' . $_obf_0D12171C1D085B3F26182A243D113C033B133B10353011 . ', "res": {"pv": 3, "ver": 3}, "s": "ok"}';
                    break;
                case 'nCGuJ1R7Iw98aD7o':
                    $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = '{"a": "4t88et2k", "cid": "' . $_obf_0D321327124019390E1F2F17263913251C190A2A240F22 . '", "id": ' . $_obf_0D12171C1D085B3F26182A243D113C033B133B10353011 . ', "res": {"aa": "no", "accepted_regulations": "1", "account_id": "2550983", "cbe": "no", "ct": "C", "fb_id": "", "flags": "m[AhT]", "gA": "yes", "hk": "450570", "id": "B481B7993021583C66F38048930AC095BD4FFDA7", "level_changed": "0", "level_up_possible": "0", "mbos": "no", "payin_limit_reached": "0", "sa": "no", "session_id": "3472002", "stamp": "97d367519a7a50acbb124d70a1c03896bdb6fa3181c216da3730fd9782a8e2432228c42904bfe774e66046a287251b38c82d2519e2348226877d5d0b34ee704775a180d65b45c24bb0abacfe19d5f8f3960b9a5efcc65729f89d4175a7adbe1bb4d2637c6e8eb10f9c8c81f11a69009e825d9dab7ab75acd1fa21a883b5122d8", "sv": "43.87", "token": "", "user_id": "0000000", "version": ""}, "s": "ok"}';
                    break;
                case 'TZE8GXY14X':
                    $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = '{"a": "j8Z5KXX1", "cid": "' . $_obf_0D321327124019390E1F2F17263913251C190A2A240F22 . '", "id": ' . $_obf_0D12171C1D085B3F26182A243D113C033B133B10353011 . ', "res": {"currency": "' . $slotSettings->slotCurrency . '", "currency_display_as": "' . $slotSettings->slotCurrency . '", "currency_format_separ_type": "0", "currency_format_symbol_placement": "1", "point_ratio": "0.01", "screenShotMaxSize": "", "screenShotMinPrize": "", "screenShotType": "", "screenShotUrl": "", "screen_orientation_type": "", "show_currency": "C"}, "s": "ok"}';
                    break;
                case 'F18RRVF55I':
                    $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = '{"a": "KQDqJMsl", "cid": "' . $_obf_0D321327124019390E1F2F17263913251C190A2A240F22 . '", "id": ' . $_obf_0D12171C1D085B3F26182A243D113C033B133B10353011 . ', "res": {"autoGameType": "0", "autoPrizeAfter": "120", "capi": "no", "cardEnable": "yes", "connectLoginEnable": "no", "couponHasBank": "no", "creditOnly": "yes", "demoMode": "no", "gA": "yes", "gamblingMaxLevel": "4", "gameConfiguration": "1", "gaming_allowed": "yes", "highScorePeriod": "0", "highScoreValue": "0", "highScoreValuesMaxCount": "0", "highStake": "100", "highStakeBankMode": "0", "higherStake": "50000", "histJackpotCount": "4", "histJackpotRange": "60", "histJackpotTime": "5", "histPrizeCount": "4", "histPrizeRange": "60", "histPrizeStart": "10000", "histPrizeTime": "5", "immediateHighScoreValue": "0", "itGameCredits": "0", "itMaxEnergy": "0", "jackpotDisplayStep": "1000", "jackpotIsBonus": "no", "jackpotName": "0", "jackpotPercent": "10", "maxBank": "0", "maxCouponValue": "0", "maxCredit": "100000", "maxCreditPayin": "10000", "maxCreditStake": "10000", "maxCreditToBlock": "100000", "maxGamblePrize": "0", "maxHopperPayout": "0", "maxNotes": "0", "maxPrize": "0", "maxPrizeToCredit": "no", "maxRiskGames": "0", "maxRiskGamesStake": "0", "maxStake": "10000", "maxTransfer": "0", "minCouponCreateValue": "0", "minCouponUseToPayout": "0", "minGamesToPayout": "20", "minStake": "10", "moneyInsertLimit": "10000", "newCouponEnable": "no", "newCouponEnableOnKiosk": "no", "noCouponPass": "no", "notesType": "0", "oneCouponInGroup": "no", "payoutFromBank": "no", "plusSignsEnabled": "0", "prizeTo": "-1", "quizEnabled": "no", "redemptionEnable": "no", "riskBankInterval": "0", "riskDispersion": "1", "riskEnabled": "yes", "roundSuperGames": "yes", "sasMetersEnabled": "no", "semiRoundSuperGames": "no", "showRecord": "no", "showTrademark": "1", "singleCouponEnable": "no", "skillGames": "0", "skillWheelGames": "no", "specVersion": "0", "stakeFromCreditOnly": "no", "superGameStake": "0", "superGamesAfterLostOnly": "no", "superGamesEnterType": "0", "superGamesFreq": "0", "superGamesMaxPrize": "0", "superGamesProb": "80", "superGamesRandom": "no", "superGamesRandomX2": "no", "superOnJPCounter": "1", "sweepEnable": "no", "sweepEnable2": "no", "transferB2K": "0", "transferB2KMode": "0", "transferEnable": "yes", "veryHighScoreValue": "0", "vltLogo": "yes", "voucherEnable": "no", "wbContinues": "no", "winBank2Credit": "yes", "winProfile": "82%", "winProfileSelect": "1"}, "s": "ok"}';
                    break;
                case 'P2AB7RC9UU':
                    $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = '{"a": "23cFxJWS", "cid": "' . $_obf_0D321327124019390E1F2F17263913251C190A2A240F22 . '", "id": ' . $_obf_0D12171C1D085B3F26182A243D113C033B133B10353011 . ', "res": ["<config countdown_time=\"15\" currency_factor=\"1\" currency_type=\"KC\" date_format_type=\"1\" demo=\"0\" demo_anims_after=\"17\" disconnected_text_jp=\"Jackpot disconnected\" disconnected_text_jp_show=\"1\" disconnected_text_scroll_game=\"Jackpot disconnected\" disconnected_text_scroll_game_delay=\"5\" disconnected_text_scroll_game_show=\"0\" disconnected_text_scroll_main=\"Jackpot disconnected\" disconnected_text_scroll_main_delay=\"5\" disconnected_text_scroll_main_show=\"1\" effect_delay=\"60\" scroll_text_1=\"\" scroll_text_2=\"\" scroll_text_3=\"\" scroll_text_count=\"5\" scroll_text_delay=\"30\" scroll_text_game_1=\"\" scroll_text_game_2=\"\" scroll_text_game_3=\"\" scroll_text_game_count=\"2\" scroll_text_game_delay=\"10\" scroll_text_game_show=\"1\" scroll_text_show=\"1\" scroll_type=\"1\" show_alter_text_after=\"35\" stake_share=\"0\" /><sub_config currency=\"CP.\" point_ratio=\"1\" show_currency=\"C\" type=\"real\" />"], "s": "ok"}';
                    break;
                case 'GNNNVGVTKP':
                    $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = '{"a": "pfosYn2N", "cid": "' . $_obf_0D321327124019390E1F2F17263913251C190A2A240F22 . '", "id": ' . $_obf_0D12171C1D085B3F26182A243D113C033B133B10353011 . ', "res": {"mode": "autorefill"}, "s": "ok"}';
                    break;
                case 'QE8J5MIKCA':
                    $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = '{"a": "DRUXHWsV", "cid": "' . $_obf_0D321327124019390E1F2F17263913251C190A2A240F22 . '", "id": ' . $_obf_0D12171C1D085B3F26182A243D113C033B133B10353011 . ', "res": {"manual! lines": "9", "manual! lines! enabled": "0", "max.! stake": "10000", "min.! stake": "1", "min.! treasure": "100", "stake! per! line": "1"}, "s": "ok"}';
                    break;
                case 'DVVRWT9K7D':
                    $_obf_0D131333153E3B3F113536290D1D1A025B0D3F16341932 = $slotSettings->Bet;
                    for( $i = 0; $i < count($_obf_0D131333153E3B3F113536290D1D1A025B0D3F16341932); $i++ ) 
                    {
                        $_obf_0D131333153E3B3F113536290D1D1A025B0D3F16341932[$i] = $_obf_0D131333153E3B3F113536290D1D1A025B0D3F16341932[$i] * 5 * 100;
                    }
                    $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = '{"a": "sxYumxhx", "cid": "' . $_obf_0D321327124019390E1F2F17263913251C190A2A240F22 . '", "id": ' . $_obf_0D12171C1D085B3F26182A243D113C033B133B10353011 . ', "res": {"bank": "0", "coins": "1", "credit": "10000", "difficulty_level_mode": "0", "energy": "1", "flags": "0", "free_rounds": "0", "iv": "3", "lines": "5", "maxstake": "' . ($_obf_0D131333153E3B3F113536290D1D1A025B0D3F16341932[count($_obf_0D131333153E3B3F113536290D1D1A025B0D3F16341932) - 1] * 5) . '", "minstake": "1", "notes": "0", "prize": "0", "protocol_version": "1", "risk": "1", "skill_games": "0", "skill_record": "0", "stake": "' . $_obf_0D131333153E3B3F113536290D1D1A025B0D3F16341932[0] . '", "stake_list": "' . implode(',', $_obf_0D131333153E3B3F113536290D1D1A025B0D3F16341932) . '", "stake_per_line": "1", "time": "0"}, "s": "ok"}';
                    break;
                case '1KI735SFY5':
                    $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = '{"a": "bTjXKLkS", "cid": "' . $_obf_0D321327124019390E1F2F17263913251C190A2A240F22 . '", "id": ' . $_obf_0D12171C1D085B3F26182A243D113C033B133B10353011 . ', "res": {"bank": "0", "credit": "' . round($slotSettings->GetBalance() * 100) . '", "notes": "0", "time": "0"}, "s": "ok"}';
                    break;
                case 'D3425KPHW1':
                    $lastEvent = $slotSettings->GetHistory();
                    if( $lastEvent != 'NULL' ) 
                    {
                        $_obf_0D3F14183D400D0F112604243C0E1D10091418090C5C11 = implode(',', $lastEvent->serverResponse->reelsSymbols->rp);
                        $_obf_0D213E03190A2E1C3F0C042322243D2F2F0E260C132D01 = '' . $lastEvent->serverResponse->reelsSymbols->reel1[0] . ',' . $lastEvent->serverResponse->reelsSymbols->reel2[0] . ',' . $lastEvent->serverResponse->reelsSymbols->reel3[0] . '';
                        $_obf_0D213E03190A2E1C3F0C042322243D2F2F0E260C132D01 .= (',' . $lastEvent->serverResponse->reelsSymbols->reel1[1] . ',' . $lastEvent->serverResponse->reelsSymbols->reel2[1] . ',' . $lastEvent->serverResponse->reelsSymbols->reel3[1] . '');
                        $_obf_0D213E03190A2E1C3F0C042322243D2F2F0E260C132D01 .= (',' . $lastEvent->serverResponse->reelsSymbols->reel1[2] . ',' . $lastEvent->serverResponse->reelsSymbols->reel2[2] . ',' . $lastEvent->serverResponse->reelsSymbols->reel3[2] . '');
                    }
                    else
                    {
                        $_obf_0D3F14183D400D0F112604243C0E1D10091418090C5C11 = implode(',', [
                            rand(0, count($slotSettings->reelStrip1) - 3), 
                            rand(0, count($slotSettings->reelStrip2) - 3), 
                            rand(0, count($slotSettings->reelStrip3) - 3)
                        ]);
                        $_obf_0D1D1602123E111135310F291B1E2D1F5C093330060C11 = rand(0, count($slotSettings->reelStrip1) - 3);
                        $_obf_0D0604240F1C395B24320B081531013C21325C313D0411 = rand(0, count($slotSettings->reelStrip2) - 3);
                        $_obf_0D0F165C131F181A305B35143E311D3F5B162C092E1622 = rand(0, count($slotSettings->reelStrip3) - 3);
                        $_obf_0D041A03372F5B105B14173E062729130715362F264022 = $slotSettings->reelStrip1[$_obf_0D1D1602123E111135310F291B1E2D1F5C093330060C11];
                        $_obf_0D0E0B3E0D330E2311253815331A301013160A222C1F11 = $slotSettings->reelStrip2[$_obf_0D0604240F1C395B24320B081531013C21325C313D0411];
                        $_obf_0D2C3C2C013F351305193626380103333D3B0907350111 = $slotSettings->reelStrip3[$_obf_0D0F165C131F181A305B35143E311D3F5B162C092E1622];
                        $_obf_0D213E03190A2E1C3F0C042322243D2F2F0E260C132D01 = '' . $_obf_0D041A03372F5B105B14173E062729130715362F264022 . ',' . $_obf_0D0E0B3E0D330E2311253815331A301013160A222C1F11 . ',' . $_obf_0D2C3C2C013F351305193626380103333D3B0907350111 . '';
                        $_obf_0D041A03372F5B105B14173E062729130715362F264022 = $slotSettings->reelStrip1[$_obf_0D1D1602123E111135310F291B1E2D1F5C093330060C11 + 1];
                        $_obf_0D0E0B3E0D330E2311253815331A301013160A222C1F11 = $slotSettings->reelStrip2[$_obf_0D0604240F1C395B24320B081531013C21325C313D0411 + 1];
                        $_obf_0D2C3C2C013F351305193626380103333D3B0907350111 = $slotSettings->reelStrip3[$_obf_0D0F165C131F181A305B35143E311D3F5B162C092E1622 + 1];
                        $_obf_0D213E03190A2E1C3F0C042322243D2F2F0E260C132D01 .= (',' . $_obf_0D041A03372F5B105B14173E062729130715362F264022 . ',' . $_obf_0D0E0B3E0D330E2311253815331A301013160A222C1F11 . ',' . $_obf_0D2C3C2C013F351305193626380103333D3B0907350111 . '');
                        $_obf_0D041A03372F5B105B14173E062729130715362F264022 = $slotSettings->reelStrip1[$_obf_0D1D1602123E111135310F291B1E2D1F5C093330060C11 + 2];
                        $_obf_0D0E0B3E0D330E2311253815331A301013160A222C1F11 = $slotSettings->reelStrip2[$_obf_0D0604240F1C395B24320B081531013C21325C313D0411 + 2];
                        $_obf_0D2C3C2C013F351305193626380103333D3B0907350111 = $slotSettings->reelStrip3[$_obf_0D0F165C131F181A305B35143E311D3F5B162C092E1622 + 2];
                        $_obf_0D213E03190A2E1C3F0C042322243D2F2F0E260C132D01 .= (',' . $_obf_0D041A03372F5B105B14173E062729130715362F264022 . ',' . $_obf_0D0E0B3E0D330E2311253815331A301013160A222C1F11 . ',' . $_obf_0D2C3C2C013F351305193626380103333D3B0907350111 . '');
                        $bet = $slotSettings->Bet[0] * 100 * 5;
                    }
                    $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = '{"a": "XtlT6LoA", "cid": "' . $_obf_0D321327124019390E1F2F17263913251C190A2A240F22 . '", "id": ' . $_obf_0D12171C1D085B3F26182A243D113C033B133B10353011 . ', "res": {"symb": "' . $_obf_0D213E03190A2E1C3F0C042322243D2F2F0E260C132D01 . '"}, "s": "ok"}';
                    break;
                case 'PTUDQQMKZB':
                    $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = '{"a": "CRc5ya6I", "cid": "Gm4VyA0w", "id": 11, "res": {"limit_count": "0"}, "s": "ok"}';
                    break;
                case 'ping':
                    $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = '{"a": "KuaCagnK", "cid": "' . $_obf_0D321327124019390E1F2F17263913251C190A2A240F22 . '", "id": ' . $_obf_0D12171C1D085B3F26182A243D113C033B133B10353011 . ', "s": "ok"}';
                    break;
                case 'close':
                    exit();
                    break;
                case 'pause':
                    $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = '{"a": "VfgEano2", "cid": "ewPLsKP1", "id": ' . $_obf_0D12171C1D085B3F26182A243D113C033B133B10353011 . ', "s": "ok"}';
                    break;
                case 'resume':
                    $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = '{"a": "o8W9ap6u", "cid": "gC55xpDm", "id": ' . $_obf_0D12171C1D085B3F26182A243D113C033B133B10353011 . ', "s": "ok"}';
                    break;
                case 'resume':
                    $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = '{"a": "aU0MYEP3", "cid": "MNVKfRUv", "id": ' . $_obf_0D12171C1D085B3F26182A243D113C033B133B10353011 . ', "res": {"pv": 3, "ver": 3}, "s": "ok"}';
                    break;
                case 'WXMNPP7H8F':
                    $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] = 'bet';
                    $bonusMpl = 1;
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
                    $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet'] = $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['arg']['stake'] / 100;
                    $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['lines'] = 5;
                    $lines = $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['lines'];
                    $betLine = $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet'] / $lines;
                    if( !isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']) ) 
                    {
                        $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] = 'bet';
                    }
                    $slotSettings->SetBalance(-1 * $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet'], $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']);
                    $_obf_0D2A0526273612293511363C26193E1C130B2719192611 = $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet'] / 100 * $slotSettings->GetPercent();
                    $slotSettings->SetBank((isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']) ? $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] : ''), $_obf_0D2A0526273612293511363C26193E1C130B2719192611, $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']);
                    $slotSettings->UpdateJackpots($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet']);
                    $balance = sprintf('%01.2f', $slotSettings->GetBalance());
                    $slotSettings->SetGameData('SuperHotWDBonusWin', 0);
                    $slotSettings->SetGameData('SuperHotWDFreeGames', 0);
                    $slotSettings->SetGameData('SuperHotWDCurrentFreeGame', 0);
                    $slotSettings->SetGameData('SuperHotWDTotalWin', 0);
                    $slotSettings->SetGameData('SuperHotWDFreeBalance', 0);
                    $slotSettings->SetGameData('SuperHotWDFreeStartWin', 0);
                    $_obf_0D360F0140113330275B14311E3516150112390A0F1B22 = $slotSettings->GetSpinSettings($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'], $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['bet'], $lines);
                    $winType = $_obf_0D360F0140113330275B14311E3516150112390A0F1B22[0];
                    $_obf_0D3030072F273706293C133F2F072B113B383322291201 = $_obf_0D360F0140113330275B14311E3516150112390A0F1B22[1];
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
                            0, 
                            0, 
                            0, 
                            0, 
                            0, 
                            0, 
                            0, 
                            0
                        ];
                        $wild = [''];
                        $scatter = '';
                        $reels = $slotSettings->GetReelStrips($winType, $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']);
                        for( $k = 0; $k < $lines; $k++ ) 
                        {
                            $_obf_0D02100911023C3C260E0C262F5B2C1D2839310E112A32 = '';
                            for( $j = 0; $j < count($slotSettings->SymbolGame); $j++ ) 
                            {
                                $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 = $slotSettings->SymbolGame[$j];
                                if( $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11 == $scatter || !isset($slotSettings->Paytable['SYM_' . $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11]) ) 
                                {
                                }
                                else
                                {
                                    $s = [];
                                    $s[0] = $reels['reel1'][$linesId[$k][0] - 1];
                                    $s[1] = $reels['reel2'][$linesId[$k][1] - 1];
                                    $s[2] = $reels['reel3'][$linesId[$k][2] - 1];
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
                                        $_obf_0D365B172533170712222423300A1B092C161521071B32 = $slotSettings->Paytable['SYM_' . $_obf_0D350901162A195B273D0F282B290A2A0B1811330C0E11][3] * $betLine * $mpl * $bonusMpl;
                                        if( $cWins[$k] < $_obf_0D365B172533170712222423300A1B092C161521071B32 ) 
                                        {
                                            $cWins[$k] = $_obf_0D365B172533170712222423300A1B092C161521071B32;
                                            $_obf_0D02100911023C3C260E0C262F5B2C1D2839310E112A32 = '{"Count":3,"Line":' . $k . ',"Win":' . $cWins[$k] . ',"stepWin":' . ($cWins[$k] + $totalWin + $slotSettings->GetGameData('SuperHotWDBonusWin')) . ',"winReel1":[' . ($linesId[$k][0] - 1) . ',"' . $s[0] . '"],"winReel2":[' . ($linesId[$k][1] - 1) . ',"' . $s[1] . '"],"winReel3":[' . ($linesId[$k][2] - 1) . ',"' . $s[2] . '"],"winReel4":["none","none"],"winReel5":["none","none"]}';
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
                        for( $r = 1; $r <= 3; $r++ ) 
                        {
                            $_obf_0D03240E37331E0E1A1E32273B0F353202150B2F2A1C11 = false;
                            for( $_obf_0D31403C0837332A1A1711312A3415151610280F122122 = 0; $_obf_0D31403C0837332A1A1711312A3415151610280F122122 <= 3; $_obf_0D31403C0837332A1A1711312A3415151610280F122122++ ) 
                            {
                                if( $reels['reel' . $r][$_obf_0D31403C0837332A1A1711312A3415151610280F122122] == $scatter || $reels['reel' . $r][$_obf_0D31403C0837332A1A1711312A3415151610280F122122] == '0' ) 
                                {
                                    $scattersCount++;
                                    $scattersStr .= ('"winReel' . $r . '":[' . $_obf_0D31403C0837332A1A1711312A3415151610280F122122 . ',"' . $scatter . '"],');
                                    $_obf_0D03240E37331E0E1A1E32273B0F353202150B2F2A1C11 = true;
                                }
                            }
                            if( !$_obf_0D03240E37331E0E1A1E32273B0F353202150B2F2A1C11 ) 
                            {
                                break;
                            }
                        }
                        $scattersWin = 0;
                        if( $scattersCount >= 3 && $slotSettings->slotBonus ) 
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
                        if( $i > 1000 ) 
                        {
                            $winType = 'none';
                        }
                        if( $slotSettings->increaseRTP && $winType == 'win' && $totalWin < ($lines * $betLine * rand(2, 5)) ) 
                        {
                        }
                        else if( !$slotSettings->increaseRTP && $winType == 'win' && $lines * $betLine < $totalWin ) 
                        {
                        }
                        else
                        {
                            if( $i > 1500 ) 
                            {
                                $response = '{"responseEvent":"error","responseType":"' . $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] . '","serverResponse":"Bad Reel Strip"}';
                                $slotSettings->SaveGameData();
                                \DB::commit();
                                return $response;
                            }
                            if( $totalWin > 0 && $totalWin <= $_obf_0D3030072F273706293C133F2F072B113B383322291201 && $winType == 'win' ) 
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
                    if( $totalWin > 0 ) 
                    {
                        $slotSettings->SetBank((isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']) ? $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] : ''), -1 * $totalWin);
                        $slotSettings->SetBalance($totalWin);
                    }
                    $_obf_0D0C361D2E35362209025C2317232809271D34270D3232 = $totalWin;
                    $slotSettings->SetGameData('SuperHotWDTotalWin', $totalWin);
                    $_obf_0D273522403840350F0A36072E150A0524143F382C3B32 = '' . json_encode($reels) . '';
                    $_obf_0D28393910101E062539311B3F371C121912162B061E32 = '' . json_encode($slotSettings->Jackpots) . '';
                    $_obf_0D5B5C2E0D1C3D1F232F3E051D3225380127293C2A2432 = implode(',', $lineWins);
                    $response = '{"responseEvent":"spin","responseType":"' . $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] . '","serverResponse":{"slotLines":' . $lines . ',"slotBet":' . $betLine . ',"totalFreeGames":' . $slotSettings->GetGameData('SuperHotWDFreeGames') . ',"currentFreeGames":' . $slotSettings->GetGameData('SuperHotWDCurrentFreeGame') . ',"Balance":' . $slotSettings->GetBalance() . ',"afterBalance":' . $slotSettings->GetBalance() . ',"bonusWin":' . $slotSettings->GetGameData('SuperHotWDBonusWin') . ',"freeStartWin":' . $slotSettings->GetGameData('SuperHotWDFreeStartWin') . ',"totalWin":' . $totalWin . ',"winLines":[' . $_obf_0D5B5C2E0D1C3D1F232F3E051D3225380127293C2A2432 . '],"bonusInfo":' . $scattersStr . ',"Jackpots":' . $_obf_0D28393910101E062539311B3F371C121912162B061E32 . ',"reelsSymbols":' . $_obf_0D273522403840350F0A36072E150A0524143F382C3B32 . '}}';
                    $_obf_0D022B1D302939073721192F1D2C2B5B1137141E152111 = $reels['reel1'][0] . ',' . $reels['reel2'][0] . ',' . $reels['reel3'][0] . ',' . $reels['reel1'][1] . ',' . $reels['reel2'][1] . ',' . $reels['reel3'][1] . ',' . $reels['reel1'][2] . ',' . $reels['reel2'][2] . ',' . $reels['reel3'][2];
                    $slotSettings->SaveLogReport($response, $betLine, $lines, $_obf_0D0C361D2E35362209025C2317232809271D34270D3232, $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']);
                    $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = '{"a": "l0TVF5xh", "cid": "Gm4VyA0w", "id": ' . $_obf_0D12171C1D085B3F26182A243D113C033B133B10353011 . ', "res": {"bank": "0", "cprize": "0", "credit": "' . round($balance * 100) . '", "flags": "6", "jprize": "0", "prize": "' . round($_obf_0D0C361D2E35362209025C2317232809271D34270D3232 * 100) . '", "symb": "' . $_obf_0D022B1D302939073721192F1D2C2B5B1137141E152111 . '"}, "s": "ok"}';
                    break;
                case '9MHKS5E2Z2':
                    $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = '{"a": "8PIOHLo2", "cid": "FCj5rHuI", "id": ' . $_obf_0D12171C1D085B3F26182A243D113C033B133B10353011 . ', "res": {"bank": "0", "credit": "' . round($slotSettings->GetBalance() * 100) . '", "flags": "0"}, "s": "ok"}';
                    break;
                case 'VKYHTCZVTN':
                    $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = '{"a": "8PIOHLo2", "cid": "FCj5rHuI", "id": ' . $_obf_0D12171C1D085B3F26182A243D113C033B133B10353011 . ', "res": {"bank": "0", "credit": "' . round($slotSettings->GetBalance() * 100) . '", "flags": "0"}, "s": "ok"}';
                    break;
                case 'KZHGWHDL9T':
                    $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = '{"a": "rWJBqTiq", "cid": "FCj5rHuI", "id": ' . $_obf_0D12171C1D085B3F26182A243D113C033B133B10353011 . ', "s": "ok"}';
                    break;
                case '464529TBNS':
                    $Balance = $slotSettings->GetBalance();
                    $_obf_0D2F3C2804395C38101A1C05232C1040362D390D1D3301 = rand(1, $slotSettings->GetGambleSettings());
                    $_obf_0D040B162710402D331E2209370C14231F2C252B172601 = '';
                    $totalWin = $slotSettings->GetGameData('SuperHotWDTotalWin');
                    $_obf_0D2D1D15122B0303242922110A351334341A371C0C3101 = 0;
                    $_obf_0D31140A120E1B3D282A06280B27103B250935092B1F01 = $totalWin;
                    $_obf_0D120224135B032B0B2515021F2F240D2B1E025B1E0801 = 0;
                    if( $slotSettings->GetBank((isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']) ? $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] : '')) < ($totalWin * 2) ) 
                    {
                        $_obf_0D2F3C2804395C38101A1C05232C1040362D390D1D3301 = 0;
                    }
                    if( $_obf_0D2F3C2804395C38101A1C05232C1040362D390D1D3301 == 1 ) 
                    {
                        $_obf_0D1C0D102A3D1F22280124351A230D33190A15123B2522 = 'win';
                        $_obf_0D2D1D15122B0303242922110A351334341A371C0C3101 = $totalWin;
                        $totalWin = $totalWin * 2;
                        $_obf_0D120224135B032B0B2515021F2F240D2B1E025B1E0801 = 1;
                        $_obf_0D1E37030316182739402614222206242211283D101F01 = '6';
                    }
                    else
                    {
                        $_obf_0D1C0D102A3D1F22280124351A230D33190A15123B2522 = 'lose';
                        $_obf_0D2D1D15122B0303242922110A351334341A371C0C3101 = -1 * $totalWin;
                        $totalWin = 0;
                        $_obf_0D120224135B032B0B2515021F2F240D2B1E025B1E0801 = 0;
                        $_obf_0D1E37030316182739402614222206242211283D101F01 = '0';
                    }
                    $slotSettings->SetGameData('SuperHotWDTotalWin', $totalWin);
                    $slotSettings->SetBalance($_obf_0D2D1D15122B0303242922110A351334341A371C0C3101);
                    $slotSettings->SetBank((isset($_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent']) ? $_obf_0D1027172F0A071202030538280B3D0B12241B16110E22['slotEvent'] : ''), $_obf_0D2D1D15122B0303242922110A351334341A371C0C3101 * -1);
                    $_obf_0D18161E352E061A0433191E381C2E0B222A272A2D3E22 = $slotSettings->GetBalance();
                    $_obf_0D2307370C401A042D310F070D313207280830055B2A32 = '{"dealerCard":"' . $_obf_0D040B162710402D331E2209370C14231F2C252B172601 . '","gambleState":"' . $_obf_0D1C0D102A3D1F22280124351A230D33190A15123B2522 . '","totalWin":' . $totalWin . ',"afterBalance":' . $_obf_0D18161E352E061A0433191E381C2E0B222A272A2D3E22 . ',"Balance":' . $Balance . '}';
                    $response = '{"responseEvent":"gambleResult","serverResponse":' . $_obf_0D2307370C401A042D310F070D313207280830055B2A32 . '}';
                    $slotSettings->SaveLogReport($response, $_obf_0D31140A120E1B3D282A06280B27103B250935092B1F01, 1, $_obf_0D31140A120E1B3D282A06280B27103B250935092B1F01 + $_obf_0D2D1D15122B0303242922110A351334341A371C0C3101, 'slotGamble');
                    $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = '{"a": "JtxxRtC8", "cid": "FCj5rHuI", "id": ' . $_obf_0D12171C1D085B3F26182A243D113C033B133B10353011 . ', "res": {"bank": "0", "cprize": "0", "credit": "' . round($_obf_0D18161E352E061A0433191E381C2E0B222A272A2D3E22 * 100) . '", "flags": "' . $_obf_0D1E37030316182739402614222206242211283D101F01 . '", "prize": "' . round($totalWin * 100) . '", "win": "' . $_obf_0D120224135B032B0B2515021F2F240D2B1E025B1E0801 . '", "x": "0"}, "s": "ok"}';
                    break;
                case 'W42THTUT96':
                    $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201[] = '{"a": "aTjH2yIT", "cid": "FCj5rHuI", "id": ' . $_obf_0D12171C1D085B3F26182A243D113C033B133B10353011 . ', "res": {"flags": "0"}, "s": "ok"}';
                    break;
            }
            $response = implode('------', $_obf_0D15240C2724212608283D0C5B1E141D0230162D100201);
            $slotSettings->SaveGameData();
            \DB::commit();
            return ':::' . $response;
        }
    }

}
