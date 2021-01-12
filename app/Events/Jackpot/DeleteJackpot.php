<?php

namespace VanguardLTE\Events\Jackpot;

use VanguardLTE\Jackpot;

class DeleteJackpot
{
    /**
     * @var Returns
     */
    protected $DeleteJackpot;

    public function __construct(Jackpot $DeleteJackpot)
    {
        $this->DeleteJackpot = $DeleteJackpot;
    }

    /**
     * @Jackpot Jackpots
     */
    public function getDeleteJackpot()
    {
        return $this->DeleteJackpot;
    }
}
