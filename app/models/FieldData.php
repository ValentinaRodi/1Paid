<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "field_data".
 *
 * @property int $id
 * @property int $field_id
 * @property int $item_id
 * @property string $value
 */
class FieldData extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'field_data';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['field_id', 'item_id', 'value'], 'required'],
            [['field_id', 'item_id'], 'integer'],
            [['value'], 'string'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'field_id' => 'Field ID',
            'item_id' => 'Item ID',
            'value' => 'Value',
        ];
    }
}
