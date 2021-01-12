<?php

namespace VanguardLTE\Events\Jackpot;

use VanguardLTE\Jackpot;

class JackpotEdited
{
    /**
     * @var Jackpots
     */
    protected $editedJackpot;

    public function __construct(Jackpot $editedJackpot)
    {
        $this->editedJackpot = $editedJackpot;
    }

    /**
     * @Jackpot Jackpots
     */
    public function getEditedJackpot()
    {
        return $this->editedJackpot;
    }

}
