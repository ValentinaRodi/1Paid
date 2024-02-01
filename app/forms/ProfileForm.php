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

    public function rules()
    {
        return [
            [['email', 'name', 'secret_word'], 'checkEditedFields'],
            ['secret_word', 'string', 'length' => [8, 191], 'message' => "Some strings is not in 8..191"],
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

    public function save()
    {
        Yii::$app->user->identity->save(false);
    }
}