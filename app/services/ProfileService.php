<?php

namespace app\services;

use app\forms\PasswordForm;
use app\forms\ProfileForm;
use Yii;

class ProfileService
{

    public static function get(): array
    {
        if (!Yii::$app->user->isGuest) {
            $user = &Yii::$app->user->identity;
//            var_dump($user);
//            var_dump($user);
            return [
                'success' => true,
                'name' => $user->name,
                'avatar' => json_decode(UserService::getAvatar($user->id)['avatar'], true),
                'balance' => $user->balance,
                'bonus' => $user->bonus,
                'registerDate' => $user->created_at,
                'logged' => !Yii::$app->user->isGuest,
                'secret_word' => $user->secret_word,
                'email' => $user->email,
                'mailing' => boolval($user->mailing),
                'notify_sound' => boolval($user->notify_sound)
            ];
        }
        return ['logged' => false];
    }

    public static function edit($post): array
    {
        $profileForm = new ProfileForm();
        foreach ($post as $key => $value) {
            $profileForm->{$key} = $value;
        }
        if ($profileForm->validate()) {
            $profileForm->setNotification();
            $profileForm->save();
            $user = &Yii::$app->user->identity;

            return [
                'success' => true,
                'name' => $user->name,
                'email' => $user->email,
                'secret_word' => $user->secret_word,
                'avatar' => json_decode(UserService::getAvatar($user->id)['avatar'], true),
                'balance' => $user->balance,
                'bonus' => $user->bonus,
                'registerDate' => $user->created_at,
                'logged' => !Yii::$app->user->isGuest,
                'mailing' => boolval($user->mailing),
                'notify_sound' => boolval($user->notify_sound)
            ];
        } else {
            // указать ошибки
            return [
                'success' => false,
                'errors' => $profileForm->errors
            ];
        }
    }

    public static function editPassword($post): array
    {
        $passwordForm = new PasswordForm();
        foreach ($post as $key => $value) {
            $passwordForm->{$key} = $value;
        }
        // сохранить изменения если корректно
        if ($passwordForm->editPassword()) {
            $passwordForm->save();
            return [
                'success' => true
            ];
        } else {
            // указать ошибки
            return [
                'success' => false,
                'errors' => $passwordForm->errors
            ];
        }

    }

    public static function uploadImage($img): array
    {
        return FileService::uploadImage($img);

    }

}