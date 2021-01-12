<?php

namespace VanguardLTE\Transformers;

use League\Fractal\TransformerAbstract;
use VanguardLTE\Repositories\Country\CountryRepository;
use VanguardLTE\Repositories\Role\RoleRepository;
use VanguardLTE\Game;

class GameTransformer extends TransformerAbstract
{
    public function transform(Game $game)
    {
		
        return [
            'id' => $game->id,
            'name' => $game->name,
            'title' => $game->title,
            'category' => $game->categories->pluck('category_id')->toArray(),
            'device' => $game->device,
            'denomination' => $game->denomination,
            //'gamebank' => round($game->gamebank),
			//'percent' => $game->percent,
            //'garant_win' => $game->garant_win,
            //'garant_bonus' => $game->garant_bonus,
			//'winline' => $game->game_win->winline,
			//'winbonus' => $game->game_win->winbonus,
			//'rezerv' => $game->rezerv,
			//'cask' => $game->cask,
			//'bon1_1' => $game->bon1_1, поля называются по другому: 'jp_1', 'jp_2', 'jp_3', 'jp_4', 'jp_5', 'jp_6', 'jp_7', 'jp_8', 'jp_9', 'jp_10', 'jp_1_percent', 'jp_2_percent', 'jp_3_percent', 'jp_4_percent', 'jp_5_percent', 'jp_6_percent', 'jp_7_percent', 'jp_8_percent', 'jp_9_percent', 'jp_10_percent'
			//'bon1_2' => $game->bon1_2,
			//'bon1_3' => $game->bon1_3,
			//'bon1' => $game->bon1,
			//'bon2' => $game->bon2,
			//'bon3' => $game->bon3,
			//'gameline' => $game->gameline,
			//'bet' => $game->bet,
			'view' => $game->view,
            
            //'created_at' => (string) $game->created_at,
            //'updated_at' => (string) $game->updated_at
        ];
    }
}
