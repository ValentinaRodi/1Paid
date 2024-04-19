<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "rank".
 *
 * @property int $id
 * @property int $rank
 * @property int $object
 * @property int $object_id
 * @property int $user_id
 */
class Rank extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'rank';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['rank', 'object', 'object_id', 'user_id'], 'required'],
            [['rank', 'object', 'object_id', 'user_id'], 'integer'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'rank' => 'Ранк',
            'object' => 'Объект', // 0 - User, 1 - Item
            'object_id' => 'Object ID',
            'user_id' => 'User ID',
        ];
    }
}
