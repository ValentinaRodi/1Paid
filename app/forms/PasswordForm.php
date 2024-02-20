<?php

namespace app\forms;

use app\models\User;
use app\models\UserToken;
use Yii;
use yii\base\Model;

class PasswordForm extends Model
{
    public $password;
    public $password_confirmation;

    public function rules()
    {
        return [
            [['password', 'password_confirmation'], 'required'],
            [['password', 'password_confirmation'], 'string', 'length' => [8, 191], 'message' => "Some strings is not in 8..191"],
            ['password_confirmation', 'compare', 'compareAttribute' => 'password', 'message' => "Passwords don't match"],
        ];
    }

    public function editPassword()
    {
        if ($this->validate()) {
            $user = &Yii::$app->user->identity;
            $user->setPassword($this->password);

            return true;
        }
        return false;
    }

    public function save()
    {
        Yii::$app->user->identity->save(false);
    }

}