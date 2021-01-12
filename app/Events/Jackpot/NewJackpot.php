<?php

namespace VanguardLTE\Events\Jackpot;

use VanguardLTE\Jackpot;

class NewJackpot
{
    /**
     * @var Returns
     */
    protected $NewJackpot;

    public function __construct(Jackpot $NewJackpot)
    {
        $this->NewJackpot = $NewJackpot;
    }

    /**
     * @Jackpot Jackpots
     */
    public function getNewJackpot()
    {
        return $this->NewJackpot;
    }
}
