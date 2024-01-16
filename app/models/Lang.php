<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "lang".
 *
 * @property int $id
 * @property string|null $russian
 * @property string|null $english
 * @property string|null $created_at
 * @property string|null $updated_at
 */
class Lang extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'lang';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['created_at', 'updated_at'], 'safe'],
            [['russian', 'english'], 'string', 'max' => 190],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'russian' => 'Russian',
            'english' => 'English',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }
}
