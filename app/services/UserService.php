<?php

namespace app\services;

use Yii;
use app\models\{
    User
};

class UserService
{
    public static function getUsernames($ids)
    {
        $users = User::find()
            ->select(['id', 'name'])
            ->where(['in', 'id', $ids])//->createCommand()->getRawSql();
            ->asArray()->all();
        return $users;
    }

    public static function getAvatar($id)
    {
        $avatar = User::find()
            ->select('avatar')
            ->where(['id'=> $id])
            ->asArray()->one();
        return $avatar;
    }
}

