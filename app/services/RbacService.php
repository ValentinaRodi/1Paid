<?php

namespace app\services;

use Yii;
use yii\db\Query;

class RbacService
{
    public static function getRole($viewing_or_editing)
    {

        //SELECT user.id as user_id, user_permission.permission_id, lang.english, lang.russian  FROM `user`
        //Left join user_permission on user_permission.user_id = user.id
        //Left join permission on permission.id = user_permission.permission_id
        //Left join lang on lang.id = permission.lang_id
        //WHERE user.id =1;

        $query = new Query;
        $query->select(['user.id', 'user_permission.permission_id', 'lang.english', 'lang.russian'])
            ->from('user')
            ->join('LEFT JOIN', 'user_permission', 'user_permission.user_id = user.id')
            ->join('LEFT JOIN', 'permission', 'permission.id = user_permission.permission_id')
            ->join('LEFT JOIN', 'lang', 'lang.id = permission.lang_id')
            ->where(['user.id' => \Yii::$app->user->id])
            ->all();
        $userPermissions = $query->all();
//        var_dump($userPermissions);
//        var_dump(\Yii::$app->user->id);
//        var_dump(\Yii::$app->user->isGuest);
        foreach ($userPermissions as $permission) {
            if ($permission['english'] == $viewing_or_editing) {
//                var_dump('true');
                return true;
            }
        }
        return false;
    }
}