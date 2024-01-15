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

    /**
     * @return array the validation rules.
     */
    public function rules()
    {
        return [
            [['email', 'name', 'password', 'password_confirmation', 'secret_word'], 'required'],
            [['password', 'password_confirmation', 'secret_word'], 'string', 'length' => [8, 191], 'message' => "Some strings is not in 8..191"],
            ['email', 'email', 'message' => "Email is wrong"],
            ['name', 'string', 'length' => [8, 40]],
            //[['password', 'password_confirmation'], 'validatePassword'],
            ['password_confirmation', 'compare', 'compareAttribute'=>'password', 'message' => "Passwords don't match"],
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
