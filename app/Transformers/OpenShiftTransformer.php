<?php

namespace VanguardLTE\Transformers;

use League\Fractal\TransformerAbstract;
use VanguardLTE\Repositories\Country\CountryRepository;
use VanguardLTE\Repositories\Role\RoleRepository;
use VanguardLTE\OpenShift;

class OpenShiftTransformer extends TransformerAbstract
{
    public function transform(OpenShift $stat)
    {

        return [
            'id' => $stat->id,
            'user_id' => $stat->user_id,
            'balance' => $stat->balance,
            'balance_in' => $stat->balance_in,
            'balance_out' => $stat->balance_out,
            'balance_total' =>  number_format ($stat->balance + $stat->balance_in - $stat->balance_out, 2, ".", ""),
            'banks' => !$stat->end_date ? $stat->banks() : $stat->last_banks,
            'returns' => !$stat->end_date ?  $stat->returns() : $stat->last_returns,
            'money' => $stat->users,
            'money_in' => $stat->money_in,
            'money_out' => $stat->money_out,
            'money_total' => number_format ($stat->money_in - $stat->money_out, 2, ".", ""),
            'profit' => number_format ($stat->profit(), 2, ".", ""),
            'old_banks' => $stat->old_banks,
            'old_total' => $stat->old_total,
            'last_banks' => $stat->last_banks,
            'last_returns' => $stat->last_returns,
            'shop_id' => $stat->shop_id,
            'start_date' => $stat->start_date,
            'end_date' => $stat->end_date,
        ];
    }
}
