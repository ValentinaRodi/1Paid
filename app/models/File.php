<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "file".
 *
 * @property int $id
 * @property string $original_name
 * @property string $hashed_name
 * @property string $extension
 * @property int $user_id
 * @property int $size
 * @property string|null $created_at
 * @property string|null $updated_at
 */
class File extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'file';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['original_name', 'hashed_name', 'extension', 'user_id', 'size'], 'required'],
            [['user_id', 'size'], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
            [['original_name', 'hashed_name', 'extension'], 'string', 'max' => 190],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'original_name' => 'Original Name',
            'hashed_name' => 'Hashed Name',
            'extension' => 'Extension',
            'user_id' => 'User ID',
            'size' => 'Size',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }
}
