<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "item".
 *
 * @property int $id
 * @property string $name
 * @property int $category_id
 * @property int $lang_id
 * @property int $user_id
 * @property int $icon_id
 * @property int $new
 * @property int $sort
 * @property float $price
 * @property float $rank
 * @property string $description
 * @property string|null $created_at
 * @property string|null $updated_at
 */
class Item extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'item';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['seo_name', 'category_id', 'lang_id', 'user_id', 'icon_id', 'new', 'sort', 'price', 'rank', 'description'], 'required'],
            [['category_id', 'lang_id', 'user_id', 'icon_id', 'new', 'sort'], 'integer'],
            [['price', 'rank'], 'number'],
            [['description'], 'string'],
            [['created_at', 'updated_at'], 'safe'],
            [['seo_name'], 'string', 'max' => 190],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'seo_name' => 'SEO Name',
            'category_id' => 'Category ID',
            'lang_id' => 'Lang ID',
            'user_id' => 'User ID',
            'icon_id' => 'Icon ID',
            'new' => 'New',
            'sort' => 'Sort',
            'price' => 'Price',
            'rank' => 'Rank',
            'description' => 'Description',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }
}
