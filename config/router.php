<?php

return [
    'GET,HEAD' => 'main/index',
    'GET,HEAD profile' => 'main/profile',
    'GET,HEAD csrf' => 'main/csrf',
    'GET,HEAD landing' => 'main/landing',
    'GET,HEAD logout' => 'main/logout',
    'GET,HEAD game/get' => 'game/get-list',
    'GET,HEAD category/get-list' => 'category/get-list',
    'GET,HEAD category/get-one-top' => 'category/get-one-top',
    [
        'pattern' => 'catalog/<game>/<category>',
        'route' => 'item/get-list',
        'defaults' => ['game' => 'Warface', 'category' => ''],
        'verb' => ['GET', 'HEAD'],
    ],
    'GET,HEAD catalog/<game>/<category>/<id>-<item>' => 'item/get',
    'GET,HEAD item/get' => 'item/get',
    'GET,HEAD field/get-list/<category>' => 'field/get-list',
    'GET,HEAD field/get-list-filters/<category>' => 'field/get-list-filters',
    'POST profile/<action>' => 'profile/<action>',
    'POST game' => 'game/post',
    'POST game/<action>' => 'game/<action>',
    'POST category' => 'category/post',
    'POST category/<action>' => 'category/<action>',
    'POST <action>' => 'main/<action>',
    'POST field/post' => 'field/post'
/*
    'PUT,PATCH users/<id>' => 'user/update',
    'DELETE users/<id>' => 'user/delete',
    'GET,HEAD users/<id>' => 'user/view',
    'POST users' => 'user/create',
    'GET,HEAD users' => 'user/index',
    'users/<id>' => 'user/options',
    'users' => 'user/options',
 */
];
