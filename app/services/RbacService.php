<?php

namespace app\services;

use Yii;
use yii\db\Query;

class RbacService
{
    public static function getRole($viewing_or_editing)
    {
        $userPermissions = self::getPermissionByUserId();

        foreach ($userPermissions as $permission) {
            if ($permission['english'] == $viewing_or_editing) {
                return true;
            }
        }
        return false;
    }

    public static function getUserPermission()
    {
        $userPermissions = self::getPermissionByUserId();
        $permission_array =[];
        foreach ($userPermissions as $permission) {
            $permission_array[] = $permission['english'];
        }
        return $permission_array;
    }

    private static function getPermissionByUserId()
    {
//        SELECT user.id as user_id, user_permission.permission_id, lang.english, lang.russian  FROM `user`
//        Left join user_permission on user_permission.user_id = user.id
//        Left join permission on permission.id = user_permission.permission_id
//        Left join lang on lang.id = permission.lang_id
//        WHERE user.id =1;

        $query = new Query;
        $query->select([ 'lang.english'])
            ->from('user')
            ->join('LEFT JOIN', 'user_permission', 'user_permission.user_id = user.id')
            ->join('LEFT JOIN', 'permission', 'permission.id = user_permission.permission_id')
            ->join('LEFT JOIN', 'lang', 'lang.id = permission.lang_id')
            ->where(['user.id' => \Yii::$app->user->id])
            ->all();

        return $query->all();
    }
}