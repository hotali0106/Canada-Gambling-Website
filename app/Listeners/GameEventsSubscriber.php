<?php

namespace VanguardLTE\Listeners;

use VanguardLTE\Activity;
use VanguardLTE\Events\Game\NewGame;
use VanguardLTE\Events\Game\GameEdited;
use VanguardLTE\Events\Game\DeleteGame;
use VanguardLTE\Events\User\UserEventContract;
use VanguardLTE\Services\Logging\UserActivity\Logger;

class GameEventsSubscriber
{
    /**
     * @var UserActivityLogger
     */
    private $logger;

    public function __construct(Logger $logger)
    {
        $this->logger = $logger;
    }

    public function onNewGame(NewGame $event)
    {
        $game = $event->getNewGame();

        $this->logger->log('New Game / ' . $game->name . ', Shop ' . $game->shop_id);
    }

    public function onGameEdited(GameEdited $event)
    {
        $game = $event->getEditedGame();
        $changes = $game->getChanges();

        $text = 'Update Game / ' . $game->name . ' / ';

        if( $event->getEditedCategory() ){
            $text .= 'Category / ';
        }
        if( $event->getEditedMatch() ){
            $text .= 'Match / ';
        }

        if( count($changes)){
            foreach($changes AS $key=>$change){
                if($key != 'updated_at'){
                    $text .= $key . '=' . $change . ', ';
                }
            }
        }

        $text = str_replace('  ', ' ', $text);
        $text = trim($text, ' ');
        $text = trim($text, '/');
        $text = trim($text, ',');

        $this->logger->log($text);
    }

    public function onDeleteGame(DeleteGame $event)
    {
        $game = $event->getDeleteGame();
        $this->logger->log('Delete Game / ' . $game->name . ', Shop ' . $game->shop_id);
    }


    /**
     * Register the listeners for the subscriber.
     *
     * @param  \Illuminate\Events\Dispatcher  $events
     */
    public function subscribe($events)
    {
        $class = 'VanguardLTE\Listeners\GameEventsSubscriber';

        $events->listen(NewGame::class, "{$class}@onNewGame");
        $events->listen(GameEdited::class, "{$class}@onGameEdited");
        $events->listen(DeleteGame::class, "{$class}@onDeleteGame");
    }
}
