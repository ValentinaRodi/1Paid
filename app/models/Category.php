<?php

namespace app\models;

//use Yii;
use lhs\Yii2SaveRelationsBehavior\SaveRelationsBehavior;
use lhs\Yii2SaveRelationsBehavior\SaveRelationsTrait;

/**
 * This is the model class for table "category".
 *
 * @property int $id
 * @property int $game_id
 * @property int $lang_id
 * @property string $seo_name
 * @property int $sort
 * @property string|null $created_at
 * @property string|null $updated_at
 */
class Category extends \yii\db\ActiveRecord
{
    use SaveRelationsTrait;
    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'category';
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
                    'game',
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
            [['game_id', 'lang_id', 'seo_name'], 'required', 'message' => 'Поле не может быть пустым'],
            [['game_id', 'lang_id', 'sort'], 'integer'],
            [['game', 'lang', 'created_at', 'updated_at'], 'safe'],
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
            'game_id' => 'Игра',
            'lang_id' => 'Lang ID',
            'seo_name' => 'SEO',
            'sort' => 'Сортировка',
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

    public function getGame()
    {
        return $game = $this->hasOne(Game::class, ['id' => 'game_id']);
    }

    public function getLang()
    {
        return $lang = $this->hasOne(Lang::class, ['id' => 'lang_id']);
    }

    public function getFields()
    {
        return $fields = $this->hasMany(Field::class, ['id' => 'field_id'])->viaTable('field_category',['category_id' => 'id']);
    }
}
