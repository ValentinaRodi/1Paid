<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "game".
 *
 * @property int $id
 * @property int $icon_id
 * @property int $background_id
 * @property string $name
 * @property int $lang_id
 * @property int $new
 * @property string|null $created_at
 * @property string|null $updated_at
 * @property string $icon
 * @property string $background
 * @property string $lang
 */
class Game extends \yii\db\ActiveRecord
{
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return '{{%game}}';
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
            [['icon_id', 'background_id', 'name', 'lang_id', 'new'], 'required'],
            [['icon_id', 'background_id', 'lang_id', 'new'], 'integer'],
            [['created_at', 'updated_at'], 'safe'],
            [['name'], 'string', 'max' => 100],
            [['icon', 'background'], 'string'],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'icon_id' => 'Icon ID',
            'background_id' => 'Background ID',
            'name' => 'SEO name',
            'lang_id' => 'Lang ID',
            'new' => 'New',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
        ];
    }

    public function getLang()
    {
        return $lang = $this->hasOne(Lang::class, ['id' => 'lang_id']);
    }

    public function getIcon()
    {
        return $icon = $this->hasOne(File::class, ['icon_id' => 'id']);
    }

    public function getBackground()
    {
        return $background = $this->hasOne(File::class, ['background_id' => 'id']);
    }

}
