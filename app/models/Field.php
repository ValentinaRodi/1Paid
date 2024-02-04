<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "field".
 *
 * @property int $id
 * @property string $seo_name
 * @property int $lang_id
 * @property string $type
 * @property string $value
 * @property string|null $created_at
 * @property string|null $updated_at
 */
class Field extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'field';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['seo_name', 'lang_id', 'type', 'value', 'search'], 'required'],
            [['lang_id', 'search'], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
            [['seo_name', 'type', 'value'], 'string', 'max' => 190],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'seo_name' => 'Seo Name',
            'lang_id' => 'Lang ID',
            'type' => 'Type',
            'value' => 'Value',
            'search' => 'Search',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
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

    public function getLang()
    {
        return $lang = $this->hasOne(Lang::class, ['id' => 'lang_id']);
    }

    public function getCategories() {
        return $this->hasMany(Category::class, ['id' => 'field_id'])->viaTable('field_category', ['category_id' => 'id']);
    }
}
