<?php

namespace app\forms;

use Yii;
use yii\base\Model;
use app\models\{
    Field,
    FieldCategory
};
use app\services\{
    CategoryService,
    GameService,
    LangService
};

/**
 * LoginForm is the model behind the login form.
 *
 * @property-read User|null $user
 *
 */
class FieldForm extends Model
{
    public $lang;
    public $category;
    public $game;
    public $seo_name;
    public $type;
    public $value;
    public $search;
/*
    private $test = [
        'seo_name' => 'server',
        'type' => 'options',
        'value' => 'wf1|wf2|wf3',
        'category' => 'accwarface',
        'game' => 'Warface',
        'lang' => [
            'russian' => 'Сервер',
            'english' => 'Server',
        ],
    ];*/
    /**
     * @return array the validation rules.
     */
    public function rules()
    {
        return [
            [['seo_name', 'lang', 'type', 'value', 'category', 'game', 'search'], 'required'],
            ['search', 'in', 'range' => [0, 1]],
            [['created_at', 'updated_at'], 'safe'],
            [['seo_name', 'type', 'value', 'category', 'game'], 'string', 'max' => 190],
            ['lang', 'validateLang'],
        ];
    }

    public function validateLang($attribute, $params)
    {
        foreach ($this->lang as $lang) {
//echo '<pre>' . print_r(gettype($lang), true) . '</pre>';
            if (gettype($lang) != 'string' && mb_strlen($lang) < 4 && mb_strlen($lang) > 191) {
                $this->addError($attribute, 'Lang string must be more then 4 symbols and less then 191 symbols.');
            }
        }
    }

    public function save()
    {
        //$model->upload();
        $gameId = GameService::getIDbySEO($this->game);
        if (isset($gameId) && !empty($gameId)) {
            $field = new Field();
            $field->seo_name = $this->seo_name;
            $field->lang_id = LangService::setLangs($this->lang);
            $field->type = $this->type;
            $field->value = $this->value;
            $field->search = $this->search;
            $field->save(false);
            $fieldCategory = new FieldCategory();
            $fieldCategory->field_id = $field->id;
            $fieldCategory->category_id = CategoryService::getIDbySEO($gameId, $this->category); // Добавить обработку ошибки отсутствия категории.
            $fieldCategory->save(false);
//echo '<pre>' . print_r($field->errors, true) . '</pre>';die();
            return $field->id;
        }
        $this->addError('game', 'Game not found!');
        return false;
    }
}
