<?php

namespace app\models;

//use Yii;
use lhs\Yii2SaveRelationsBehavior\SaveRelationsBehavior;
use lhs\Yii2SaveRelationsBehavior\SaveRelationsTrait;

/**
 * This is the model class for table "item".
 *
 * @property int $id
 * @property string $seo_name
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
    use SaveRelationsTrait;
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
            [['seo_name', 'category_id', 'lang_id', 'user_id', 'new', 'sort', 'price', 'rank', 'description'], 'required', 'message' => 'Поле не может быть пустым'],
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
            'seo_name' => 'SEO',
            'category_id' => 'Категория',
            'lang_id' => 'Lang ID',
            'user_id' => 'User ID',
            'icon_id' => 'Icon ID',
            'new' => 'Новый',
            'sort' => 'Сортировка',
            'price' => 'Цена',
            'rank' => 'Ранк',
            'description' => 'Описание',
            'created_at' => 'Создан',
            'updated_at' => 'Изменен',
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

    public function getCategory()
    {
        return $lang = $this->hasOne(Category::class, ['id' => 'category_id']);
    }

    public function getUser()
    {
        return $user = $this->hasOne(User::class, ['id' => 'user_id']);
    }
}
