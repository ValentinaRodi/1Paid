<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "field_category".
 *
 * @property int $id
 * @property int $field_id
 * @property int $category_id
 */
class FieldCategory extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'field_category';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['field_id', 'category_id'], 'required'],
            [['field_id', 'category_id'], 'integer'],
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
            'category_id' => 'Category ID',
        ];
    }
}
