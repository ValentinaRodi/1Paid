<?php

namespace app\forms;

use app\models\User;
use Yii;
use yii\base\Model;

class ProfileForm extends Model
{

    public $name;
    public $email;
    public $secret_word;
    public $notify_sound;
    public $mailing;

    public function rules()
    {
        return [
            [['email', 'name', 'secret_word'], 'checkEditedFields'],
            ['secret_word', 'string', 'length' => [8, 191], 'message' => "Some strings is not in 8..191"],
            [['mailing', 'notify_sound'], 'integer'],
//            ['notify_sound', 'integer', 'message' => 'Field "notify_sound" must be type integer'],
            ['email', 'email', 'message' => "Email is wrong"],
            ['name', 'string', 'length' => [8, 40]],
            //[['password', 'password_confirmation'], 'validatePassword'],
        ];
    }

    public function checkEditedFields($attribute, $params)
    {
        $user = &Yii::$app->user->identity;
        if ($user->{$attribute} != $this->{$attribute}) {
            if (empty($this->{$attribute})) {
                $this->addError($attribute, 'Field is required.');
            } else {
                $user->{$attribute} = $this->{$attribute};
            }
        }
    }

    public function setNotification(){
        $user = &Yii::$app->user->identity;
        $user->setMailing($this->mailing);
        $user->setNotifySound($this->notify_sound);
    }


    public function save()
    {
        Yii::$app->user->identity->save(false);
    }
}