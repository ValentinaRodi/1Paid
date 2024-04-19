<?php

namespace app\models;

use Yii;
use yii\base\NotSupportedException;
use yii\behaviors\TimestampBehavior;
use yii\db\ActiveRecord;
use yii\web\IdentityInterface;
use app\models\{
    UserToken
};

/**
 * User model
 *
 * @property integer $id
 * @property string $name
 * @property string $email
 * @property integer $email_verified
 * @property integer $email_verified_at
 * @property string $password
 * @property string $secret_word
 * @property string $remember_token
 * // * @property integer $status
 * @property integer $created_at
 * @property integer $updated_at
 * @property string $avatar
 * @property integer $balance
 * @property integer $bonus
 * @property integer $notify_sound
 * @property integer $mailing
 */
class User extends ActiveRecord implements IdentityInterface
{
    const STATUS_DELETED = 0;
    const STATUS_BANNED = 1;
    const STATUS_INACTIVE = 9;
    const STATUS_ACTIVE = 10;

    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%user}}';
    }

    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            [
                'class' => \yii\behaviors\TimestampBehavior::class,
                'createdAtAttribute' => 'created_at',
                'updatedAtAttribute' => 'updated_at',
                'value' => new \yii\db\Expression('NOW()'),
            ],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
//            ['status', 'default', 'value' => self::STATUS_INACTIVE],
//            ['status', 'in', 'range' => [self::STATUS_ACTIVE, self::STATUS_INACTIVE, self::STATUS_DELETED, self::STATUS_BANNED]],
            [['name', 'email', 'password', 'secret_word'], 'required'],
            ['email', 'email'],
            ['email', 'unique', 'targetClass' => self::className(), 'message' => 'Такая почта уже зарегестрирована.'],
            ['name', 'unique', 'targetClass' => self::className(), 'message' => 'Такое имя уже зарегестрировано.'],
            [['created_at', 'updated_at', 'email_verified_at', 'balance', 'bonus'], 'safe'],
            [['name', 'password', 'secret_word', 'remember_token'], 'string', 'max' => 191],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Имя',
            'email' => 'Email',
            'status' => 'Статус',
            'password' => 'Пароль',
            'secret_word' => 'Секретное слово',
            'email_verified' => 'Email подтвержден',
            'email_verified_at' => 'Дата подтверждения',
            'created_at' => 'Создан',
            'updated_at' => 'Изменен',
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function getToken()
    {
        return $this->hasOne(UserToken::class, ['id' => 'user_id']);
    }

    public function getAvatar()
    {
        return $this->hasOne(File::class, ['avatar' => 'id']);
    }

    /**
     * {@inheritdoc}
     */
    public static function findIdentity($id)
    {
        return static::findOne(['id' => $id, 'status' => [self::STATUS_ACTIVE, self::STATUS_INACTIVE]]);
    }

    /**
     * {@inheritdoc}
     */
    public static function findIdentityByAccessToken($token, $type = null)
    {
        throw new NotSupportedException('"findIdentityByAccessToken" is not implemented.');
    }

    /**
     * Finds user by username
     *
     * @param string $username
     * @return static|null
     *//*
    public static function findByUsername($name)
    {
        return static::findOne(['name' => $name, 'status' => self::STATUS_ACTIVE]);
    }
*/
    /**
     * {@inheritdoc}
     */
    public function getId()
    {
        return $this->getPrimaryKey();
    }

    /**
     * {@inheritdoc}
     */
    public function getSecretWord()
    {
        return $this->secret_word;
    }

    public function getMailing()
    {
        return $this->mailing;
    }

    public function getNotifySound()
    {
        return $this->notify_sound;
    }

    /**
     * {@inheritdoc}
     */
    public function getAuthKey()
    {
        return $this->remember_token;
    }

    /**
     * {@inheritdoc}
     */
    public function validateAuthKey($authKey)
    {
        return $this->getAuthKey() === $authKey;
    }

    /**
     * Validates password
     *
     * @param string $password password to validate
     * @return bool if password provided is valid for current user
     */
    public function validatePassword($password)
    {
        return Yii::$app->security->validatePassword($password, $this->password);
    }

    /**
     * Generates password hash from password and sets it to the model
     *
     * @param string $password
     */
    public function setPassword(string $password)
    {
        $this->password = Yii::$app->security->generatePasswordHash($password);
    }

    /**
     * Generates "remember me" authentication key
     */
    public function generateAuthKey()
    {
        $this->remember_token = Yii::$app->security->generateRandomString();
    }

    /**
     * Removes password reset token
     */
    public function removePasswordResetToken()
    {
        $this->password_reset_token = null;
    }

    public static function findByEmail($email)
    {
        return static::findOne(['email' => $email, 'status' => [self::STATUS_ACTIVE, self::STATUS_INACTIVE]]);
    }

    /**
     * @param $avatar
     * @return void
     */
    public function setAvatar($avatar)
    {
        $this->avatar = $avatar;
    }

    public function setMailing($mailing)
    {
        $this->mailing = $mailing;
    }

    public function setNotifySound($notify_sound)
    {
        $this->notify_sound = $notify_sound;
    }
}
