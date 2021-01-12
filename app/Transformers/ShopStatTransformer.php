<?php

namespace VanguardLTE\Transformers;

use League\Fractal\TransformerAbstract;
use VanguardLTE\Repositories\Country\CountryRepository;
use VanguardLTE\Repositories\Role\RoleRepository;
use VanguardLTE\ShopStat;

class ShopStatTransformer extends TransformerAbstract
{
    public function transform(ShopStat $stat)
    {

        return [
            'id' => $stat->id,
            'user_id' => $stat->user_id,
            'type' => $stat->type,
            'sum' => $stat->sum,
            'shop_id' => $stat->shop_id,
            'date_time' => $stat->date_time,
        ];
    }
}
