<?php

namespace app\forms;

use Yii;
use yii\base\Model;
use app\models\{
    User,
    UserToken
};

/**
 * LoginForm is the model behind the login form.
 *
 * @property-read User|null $user
 *
 */
class RegisterForm extends Model
{
    public $name;
    public $email;
    public $password;
    public $password_confirmation;
    public $secret_word;

    private $_user = false;

    public function attributeLabels()
    {
        return [
            'name' => 'Имя',
            'email' => 'Почта',
            'password' => 'Пароль',
            'password_confirmation' => 'Повторный пароль',
            'secret_word' => 'Секретное слово',
        ];
    }

    /**
     * @return array the validation rules.
     */
    public function rules()
    {
        return [
            [['email', 'name', 'password', 'password_confirmation', 'secret_word'], 'required'],
            [
                ['password', 'password_confirmation', 'secret_word'],
                'string',
                'length' => [8],
                'tooShort' => "{attribute} должен быть от 8 символов",
            ],
            ['email', 'email', 'message' => "Почта не верная."],
            ['email', 'unique', 'targetClass' => User::className(), 'message' => 'Такая почта уже зарегестрирована'],
            ['name', 'unique', 'targetClass' => User::className(), 'message' => 'Такое имя уже зарегестрировано'],
            [['name', 'secret_word'], 'string', 'length' => [8, 16], 'message' => '{attribute} должно быть от 8 до 16 символов'],
            //[['password', 'password_confirmation'], 'validatePassword'],
            ['password_confirmation', 'compare', 'compareAttribute' => 'password', 'message' => "Пароли не совпадают"],
        ];
    }

    public function register() {
        if ($this->validate()) {
            $user = new User();
            $user->name = $this->name;
            $user->email = $this->email;
            $user->setPassword($this->password);
            $user->secret_word = $this->secret_word;
            $errors['user'] = $user->save();
            $tokens = new UserToken();
            $tokens->id_user = $user->id;
            $tokens->generateEmailVerificationToken();
            $errors['tokens'] = $tokens->save();
            return true;
        }
        return false;
    }

}
