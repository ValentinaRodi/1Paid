<?php

namespace app\models;

//use Yii;
use lhs\Yii2SaveRelationsBehavior\SaveRelationsBehavior;
use lhs\Yii2SaveRelationsBehavior\SaveRelationsTrait;

/**
 * This is the model class for table "game".
 *
 * @property int $id
 * @property int $icon_id
 * @property int $background_id
 * @property string $seo_name
 * @property int $lang_id
 * @property int $new
 * @property string|null $created_at
 * @property string|null $updated_at
 * @property string $icon
 * @property string $background
 * @property string $lang
 */
//  class Game extends \yii\db\ActiveRecord
//  {
//      use SaveRelationsTrait;
//      /**
//       * {@inheritdoc}
//       */
//      public static function tableName()
//      {
//          return '{{%game}}';
//      }

//      /**
//       * {@inheritdoc}
//       */
//      public function behaviors()
//      {
//          return [
//              [
//                  'class' => \yii\behaviors\TimestampBehavior::class,
//                  'createdAtAttribute' => 'created_at',
//                  'updatedAtAttribute' => 'updated_at',
//                  'value' => new \yii\db\Expression('NOW()'),
//              ],
//              'saveRelations' => [
//                  'class'     => SaveRelationsBehavior::className(),
//                  'relations' => [
//                      'lang' => ['cascadeDelete' => true],
//                  ],
//              ],
//          ];
//      }

//      /**
//       * {@inheritdoc}
//       */
//      public function rules()
//      {
//          return [
//              [['icon_id', 'background_id', 'seo_name', 'lang_id', 'new'], 'required', 'message' => 'Поле не может быть пустым'],
//              [['icon_id', 'background_id', 'lang_id', 'new'], 'integer'],
//              [['created_at', 'updated_at'], 'safe'],
//              [['seo_name'], 'string', 'max' => 100],
//              [['lang'], 'safe'],
//          ];
//      }

//      /**
//       * {@inheritdoc}
//       */
//      public function attributeLabels()
//      {
//          return [
//              'id' => 'ID',
//              'icon_id' => 'Icon ID',
//              'background_id' => 'Background ID',
//              'seo_name' => 'SEO',
//              'lang_id' => 'Lang ID',
//              'new' => 'Новая игра',
//              'created_at' => 'Создано',
//              'updated_at' => 'Обновлено',
//          ];
//      }

//      public function transactions()
//      {
//          return [
//              self::SCENARIO_DEFAULT => self::OP_ALL,
//          ];
//      }

//      public function getLang()
//      {
//          return $lang = $this->hasOne(Lang::class, ['id' => 'lang_id']);
//      }

//      public function getIcon()
//      {
//          return $icon = $this->hasOne(File::class, ['id' => 'icon_id']);
//      }

//      public function getBackground()
//      {
//          return $background = $this->hasOne(File::class, ['id' => 'background_id']);
//      }

//      public function getCategories()
//      {
//          return $lang = $this->hasMany(Category::class, ['game_id' => 'id']);
//      }

//  }
