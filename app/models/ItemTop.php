<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "item_top".
 *
 * @property int $id
 * @property int $user_id
 * @property int $game_id
 * @property string|null $time
 */
class ItemTop extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'item_top';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['user_id', 'game_id'], 'required'],
            [['user_id', 'game_id'], 'integer'],
            [['time'], 'safe'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'user_id' => 'User ID',
            'game_id' => 'Game ID',
            'time' => 'Time',
        ];
    }
}
