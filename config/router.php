<?php

return [
    'GET,HEAD' => 'main/index',
    'GET,HEAD my-notifications' => 'main/index',
    'GET,HEAD my-tovars' => 'main/index',
    'GET,HEAD my-finance' => 'main/index',
    'GET,HEAD order-table' => 'main/index',
    'GET,HEAD tech-support' => 'main/index',
    'GET,HEAD history_sales' => 'main/index',
    'GET,HEAD my-achievements' => 'main/index',
    'GET,HEAD history_views' => 'main/index',
    'GET,HEAD tab' => 'main/index',
    'GET,HEAD random-items' => 'main/index',
    'GET,HEAD feedbacks' => 'main/index',
    'GET,HEAD guarantees' => 'main/index',
    'GET,HEAD top_users' => 'main/index',
    'GET,HEAD refs' => 'main/index',
    'GET,HEAD faq' => 'main/index',
    'GET,HEAD my-messages' => 'main/index',
    'GET,HEAD giveaway' => 'main/index',
    'GET,HEAD roulette' => 'main/index',
    'GET,HEAD forum' => 'main/index',
    'GET,HEAD contacts' => 'main/index',
    'GET,HEAD profile/edit' => 'main/index',
//    'GET,HEAD catalog/Warface/1-account' => 'main/index', Правильный маршрут вот 'GET,HEAD catalog/<game>/<category>/<id>-<item>' => 'item/get',
    'GET,HEAD profile' => 'profile/get',
    // 'GET,HEAD profile/edit' => 'profile/get',
    'GET,HEAD csrf' => 'main/csrf',
    'GET,HEAD landing' => 'main/landing',
    'GET,HEAD logout' => 'main/logout',
    [
        'pattern' => 'game/get/<offset>',
        'route' => 'game/get-list',
        'defaults' => ['offset' => 0],
        'verb' => ['GET', 'HEAD'],
    ],
    'GET,HEAD category/get-list' => 'category/get-list',
    'GET,HEAD category/get-one-top' => 'category/get-one-top',
    [
        'pattern' => 'catalog/<game>/<category>',
        'route' => 'item/get-list',
        'defaults' => ['game' => 'Warface', 'category' => ''],
        'verb' => ['GET', 'HEAD'],
    ],
    'GET,HEAD catalog/<game>/<category>/<id>-<item>' => 'item/get',
//    'GET,HEAD item/get' => 'item/get',
    'GET,HEAD field/get-list/<category>' => 'field/get-list',
    'GET,HEAD field/get-list-filters/<category>' => 'field/get-list-filters',
    'POST <action>' => 'main/<action>',
    'POST profile/edit' => 'profile/post',
    'POST profile/<action>' => 'profile/<action>',
    'POST game' => 'game/post',
    'POST game/<action>' => 'game/<action>',
    'POST category' => 'category/post',
    'POST category/<action>' => 'category/<action>',
    'POST field/post' => 'field/post',
    'GET, HEAD operator/user' => 'operator/user',
    'GET, HEAD operator/lang' => 'operator/lang',
    'GET, HEAD operator/item' => 'operator/item',
    'GET, HEAD operator/game' => 'operator/game',
    'GET, HEAD operator/file' => 'operator/file',
    'GET, HEAD operator/field' => 'operator/field',
    'GET, HEAD operator/categories' => 'operator/categories',
    'GET, HEAD operator/permission' => 'operator/permission'
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
