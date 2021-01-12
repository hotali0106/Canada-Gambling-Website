<?php 
function ReelGen($rg)
{
    $rps = explode('reelStrip', file_get_contents(base_path() . '/app/Games/Africa/reels.txt'));
    $reels = sha1($rg . $rps[4] . $rps[2] . $rps[3] . $GLOBALS['rgrc'] . $rps[0] . $rps[1]);
    $GLOBALS['rgrc'] = $GLOBALS['rgrc'] + 3;
    return md5($reels);
}
function CheckReels($rc)
{
    $reels = [];
    $rps = explode('reelStrip', file_get_contents(base_path() . '/app/Games/Africa/reels.txt'));
    $reels['reel1'] = sha1($rps[0]);
    $reels['reel2'] = sha1($rps[1]);
    $reels['reel3'] = sha1($rps[2]);
    $reels['reel4'] = sha1($rps[3]);
    $reels['reel5'] = sha1($rps[4]);
    $reels['rp'] = $GLOBALS['rgrc'];
    $_obf_0D1B240806322B3424010D301B2D371E1D170B1F2B0332 = md5($reels['reel1'] . $reels['reel2'] . $reels['reel3'] . $reels['reel4'] . $reels['reel5'] . $GLOBALS['rgrc'] . $rc);
    return $_obf_0D1B240806322B3424010D301B2D371E1D170B1F2B0332;
}
