<?php

namespace VanguardLTE\Listeners;

use VanguardLTE\Activity;
use VanguardLTE\Events\Shop\ShopEdited;
use VanguardLTE\Services\Logging\UserActivity\Logger;

class ShopEventsSubscriber
{

    private $logger;

    public function __construct(Logger $logger)
    {
        $this->logger = $logger;
    }

    public function onShopEdit(ShopEdited $event)
    {
        $shop = $event->getEditedshop();
        $changes = $shop->getChanges();

        $text = 'Update Shop / ' . $shop->name . ' / ';

        if( count($changes)){
            foreach($changes AS $key=>$change){
                $text .= $key . '=' . $change . ', ';
            }
        }

        $text = str_replace('  ', ' ', $text);
        $text = trim($text, ' ');
        $text = trim($text, '/');
        $text = trim($text, ',');

        $this->logger->log($text);
    }


    /**
     * Register the listeners for the subscriber.
     *
     * @param  \Illuminate\Events\Dispatcher  $events
     */
    public function subscribe($events)
    {
        $class = 'VanguardLTE\Listeners\ShopEventsSubscriber';

        $events->listen(ShopEdited::class, "{$class}@onShopEdit");
    }
}
