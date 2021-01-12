<?php

namespace VanguardLTE\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use VanguardLTE\Category;
use VanguardLTE\Game;
use VanguardLTE\GameBank;
use VanguardLTE\GameCategory;
use VanguardLTE\Shop;
use VanguardLTE\ShopCategory;


class StartSync implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct() {}

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle(){


        $shops = Shop::get();

        if( count($shops) ){
            foreach($shops AS $shop){

                Category::where('shop_id', $shop->id)->delete();

                $superCategories = [];
                $oldIds = [];

                // Clear Game Categories
                $games = Game::where('shop_id', $shop->id)->get();
                if( count($games) ){
                    foreach($games AS $game){
                        GameCategory::where('game_id', $game->id)->delete();
                        GameBank::where('game_id', $game->id)->delete();
                    }
                }

                $shopCategories = ShopCategory::where('shop_id', $shop->id)->pluck('category_id')->toArray();

                //Categories
                $categories = Category::where(['shop_id' => 0, 'parent' => 0])->get();
                if( count($categories) ){
                    foreach($categories AS $category){
                        $newCategory = $category->replicate();
                        //$newCategory->original_id = $category->id;
                        $newCategory->shop_id = $shop->id;
                        $newCategory->save();
                        $superCategories[$category->id] = $newCategory->id;
                        // Lv 2
                        $categories_2 = Category::where(['shop_id' => 0, 'parent' => $category->id])->get();
                        if( count($categories_2) ){
                            foreach($categories_2 AS $category_2){
                                $newCategory_2 = $category_2->replicate();
                                $newCategory_2->shop_id = $shop->id;
                                //$newCategory_2->original_id = $category_2->id;
                                $newCategory_2->parent = $newCategory->id;
                                $newCategory_2->save();
                                $superCategories[$category_2->id] = $newCategory_2->id;
                            }
                        }
                    }
                }

                // Games
                $game_ids = [];
                if( count($shopCategories) ){
                    $categories = Category::whereIn('parent', $shopCategories)->where('shop_id', 0 )->pluck('id')->toArray();
                    $categories = array_merge($categories, $shopCategories);
                    $game_ids = GameCategory::whereIn('category_id', $categories)->groupBy('game_id')->pluck('game_id')->toArray();
                }

                if( count($game_ids) ){
                    $games = Game::where('shop_id', 0)->whereIn('id', $game_ids)->get();
                } else {
                    $games = Game::where('shop_id', 0)->get();
                }

                if( count($games) ){
                    foreach($games AS $game){

                        $oldGame = Game::where(['name' => $game->name, 'shop_id' => $shop->id])->orderBy('id', 'ASC')->first();

                        $newGame = $game->replicate();
                        $newGame->original_id = $game->id;
                        $newGame->shop_id = $shop->id;

                        if($oldGame){
                            $oldIds[] = $oldGame->id;
                            $newGame->gamebank = $oldGame->gamebank;
                            $newGame->bids = $oldGame->bids;
                            $newGame->stat_in = $oldGame->stat_in;
                            $newGame->stat_out = $oldGame->stat_out;
                            $newGame->view = $oldGame->view;
                        }

                        $newGame->save();
                        $bank = GameBank::where('game_id', $game->id)->first();
                        if($bank){
                            $newBank = $bank->replicate();
                            $newBank->game_id = $newGame->id;
                            $newBank->save();
                        }
                        $categories = GameCategory::where('game_id', $game->id)->get();
                        if( count($categories) && count($superCategories) ){
                            foreach($categories AS $category){
                                $newCategory = $category->replicate();
                                $newCategory->game_id = $newGame->id;
                                $newCategory->category_id = $superCategories[$category->category_id];
                                $newCategory->save();
                            }
                        }
                    }
                }


                if( count($oldIds)){
                    Game::whereIn('id', $oldIds)->delete();
                }


            }
        }

    }
}
