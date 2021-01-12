<?php

namespace VanguardLTE\Events\Returns;

use VanguardLTE\Returns;

class ReturnEdited
{
    /**
     * @var Returns
     */
    protected $editedReturn;

    public function __construct(Returns $editedReturn)
    {
        $this->editedReturn = $editedReturn;
    }

    /**
     * @return Returns
     */
    public function getEditedReturn()
    {
        return $this->editedReturn;
    }
}
