<?php

$api = app('Dingo\Api\Routing\Router');
$api->version('v1',function($api){
    header('Access-Control-Allow-Origin: http://localhost:4200');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, PATCH, DELETE');

    // API
    $api->group(['namespace'=>'App\Http\Controllers\Api'],function($api){
        // Auth
        $api->post('auth/login','Auth\AuthController@postLogin');
        $api->post('auth/token-refresh','Auth\AuthController@refreshToken');
        $api->post('users','Auth\UsersController@store');
        // Protected methods (require auth)
        $api->group(['middleware'=>'api.auth'],function($api){


        });

        // Public methods (move member update to auth in production)
        $api->post('update-member', 'Auth\UsersController@update');
        $api->get('locations','Auth\YelpController@initLocation');
        $api->get('search-histories','Auth\YelpController@initHistory');
        $api->get('load-locations','Auth\YelpController@search');
        $api->get('load-search-histories','Auth\YelpController@searchHistory');
    });
});
/*
// Catchall - Displays Ember app
Route::any('{catchall}',function(){
    return view('app');
})->where('catchall', '(.*)');

