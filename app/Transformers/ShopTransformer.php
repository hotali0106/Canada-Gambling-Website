<?php

namespace VanguardLTE\Transformers;

use League\Fractal\TransformerAbstract;
use VanguardLTE\Shop;

class ShopTransformer extends TransformerAbstract
{
    public function transform(Shop $game)
    {
        return [
            'id' => $game->id,
            'name' => $game->name,
            'balance' => $game->balance,
            'percent' => $game->percent,
            'frontend' => $game->frontend,
            'category_id' => $game->category_id,
            'currency' => $game->currency,
            'is_blocked' => $game->is_blocked,
            'orderby' => $game->orderby,
            //'created_at' => (string) $game->created_at,
            //'updated_at' => (string) $game->updated_at
        ];
    }
}
