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

            return [
                'name' => $user->name,
                'avatar' => $user->getAvatar(),
                'balance' => $user->balance,
                'bonus' => $user->bonus,
                'registerDate' => $user->created_at,
                'logged' => !Yii::$app->user->isGuest,
                'secret_word' => $user->secret_word,
                'email' => $user->email
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

        // сохранить изменения если корректно
        if ($profileForm->validate()) {
            $profileForm->save();
            $user = &Yii::$app->user->identity;
            return [
                'success' => true,
                'name' => $user->name,
                'avatar' => $user->getAvatar(),
                'balance' => $user->balance,
                'bonus' => $user->bonus,
                'registerDate' => $user->created_at,
                'logged' => !Yii::$app->user->isGuest
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

}