<?php

namespace app\models;

//use Yii;
use lhs\Yii2SaveRelationsBehavior\SaveRelationsBehavior;
use lhs\Yii2SaveRelationsBehavior\SaveRelationsTrait;

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
    use SaveRelationsTrait;
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
    public function behaviors()
    {
        return [
            [
                'class' => \yii\behaviors\TimestampBehavior::class,
                'createdAtAttribute' => 'created_at',
                'updatedAtAttribute' => 'updated_at',
                'value' => new \yii\db\Expression('NOW()'),
            ],
            'saveRelations' => [
                'class'     => SaveRelationsBehavior::className(),
                'relations' => [
                    'lang' => ['cascadeDelete' => true],
                ],
            ],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['seo_name', 'lang_id', 'type', 'search'], 'required'],
            [['lang_id', 'search'], 'integer'],
            [['lang', 'categories', 'created_at', 'updated_at'], 'safe'],
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
            'seo_name' => 'SEO',
            'lang_id' => 'Lang ID',
            'type' => 'Тип поля',
            'value' => 'Значение по умолчанию',
            'search' => 'Поиск',
            'created_at' => 'Создано',
            'updated_at' => 'Обновлено',
        ];
    }

    public function transactions()
    {
        return [
            self::SCENARIO_DEFAULT => self::OP_ALL,
        ];
    }

    public function getLang()
    {
        return $lang = $this->hasOne(Lang::class, ['id' => 'lang_id']);
    }

    public function getCategories() {
        return $this->hasMany(Category::class, ['id' => 'category_id'])->viaTable('field_category',['field_id' => 'id']);
    }
}
