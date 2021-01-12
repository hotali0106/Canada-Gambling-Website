<?php

namespace VanguardLTE\Events\Returns;

use VanguardLTE\Returns;

class NewReturn
{
    /**
     * @var Returns
     */
    protected $NewReturn;

    public function __construct(Returns $NewReturn)
    {
        $this->NewReturn = $NewReturn;
    }

    /**
     * @return Returns
     */
    public function getNewReturn()
    {
        return $this->NewReturn;
    }
}
