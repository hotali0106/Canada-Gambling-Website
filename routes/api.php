<?php

Route::group(['middleware' => ['ipcheck']], function () {

	Route::post('login', 'Auth\AuthController@login');
	Route::post('logout', 'Auth\AuthController@logout');

    if (settings('reg_enabled')) {
        Route::post('register', 'Auth\RegistrationController@index');
        if (settings('use_email')) {
            Route::post('register/verify-email/{token}', 'Auth\RegistrationController@verifyEmail');
        }
    }

    if (settings('forgot_password')) {
        Route::post('password/remind', 'Auth\Password\RemindController@index');
        Route::post('password/reset', 'Auth\Password\ResetController@index');
    }


	Route::get('stats', 'StatsController@index');

	Route::get('me', 'Profile\DetailsController@index');
	Route::patch('me/details', 'Profile\DetailsController@update');
	Route::patch('me/details/auth', 'Profile\AuthDetailsController@update');
	Route::put('me/avatar', 'Profile\AvatarController@update');
	Route::delete('me/avatar', 'Profile\AvatarController@destroy');
	Route::put('me/avatar/external', 'Profile\AvatarController@updateExternal');
	Route::get('me/sessions', 'Profile\SessionsController@index');
	Route::get('me/return', 'Profile\DetailsController@returns');

	Route::get('games', 'Games\GamesController@index');
	Route::get('games/{game}', 'Games\GamesController@go');
	Route::post('game/{game}/server', 'Games\GamesController@server');

    Route::get('category', 'Categories\CategoriesController@index');


	Route::get('jackpots', 'Jackpots\JackpotsController@index');
	Route::get('transactions', 'Transactions\TransactionsController@index');


	Route::get('stats/pay', 'GameStats\GameStatsController@pay');
    Route::get('stats/game', 'GameStats\GameStatsController@game');
    Route::get('stats/bank', 'GameStats\GameStatsController@bank');
    Route::get('stats/shop', 'GameStats\GameStatsController@shop');
    Route::get('stats/shift', 'GameStats\GameStatsController@shift');

    Route::put('shifts/start', 'OpenShiftController@start_shift');
    Route::get('shifts/info', 'OpenShiftController@info');

    Route::get('shops/currency', 'ShopController@currency');
    Route::put('shops/balance/{type}', 'ShopController@balance');
    Route::put('shops/block', 'ShopController@shop_block');
    Route::put('shops/unblock', 'ShopController@shop_unblock');
    Route::get('shops/get', 'ShopController@shop');


	Route::resource('users', 'Users\UsersController', [
		'except' => 'create'
	]);

	Route::put('users/{user}/avatar', 'Users\AvatarController@update');
	Route::put('users/{user}/avatar/external', 'Users\AvatarController@updateExternal');
	Route::delete('users/{user}/avatar', 'Users\AvatarController@destroy');


	Route::get('users/{user}/activity', 'Users\ActivityController@index');
	Route::get('users/{user}/sessions', 'Users\SessionsController@index');

	Route::put('users/{user}/balance/{type}', 'Users\BalanceController@balance');

	Route::get('/sessions/{session}', 'SessionsController@show');
	Route::delete('/sessions/{session}', 'SessionsController@destroy');

	Route::get('/activity', 'ActivityController@index');

	/*
	Route::resource('roles', 'Authorization\RolesController', [
		'except' => 'create'
	]);
	Route::get("roles/{role}/permissions", 'Authorization\RolePermissionsController@show');
	Route::put("roles/{role}/permissions", 'Authorization\RolePermissionsController@update');

	Route::resource('permissions', 'Authorization\PermissionsController', [
		'except' => 'create'
	]);
	*/
	Route::get('/settings', 'SettingsController@index');



});

