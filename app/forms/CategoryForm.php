<?php

namespace app\forms;

use Yii;
use yii\base\Model;
use app\models\{
    Category
};
use app\services\{
    GameService,
    LangService
};

/**
 * LoginForm is the model behind the login form.
 *
 * @property-read User|null $user
 *
 */
class CategoryForm extends Model
{
    public $seo_name;
    public $lang;
    public $game_id;

    /**
     * @return array the validation rules.
     */
    public function rules()
    {
        return [
            [['seo_name', 'lang'], 'required', 'message' => 'Required'],
            ['seo_name', 'string', 'length' => [4, 191], 'message' => "Some strings is not in 8..191"],
            ['game_id', 'integer'],
            ['game_id', 'validateGame'],
            ['lang', 'validateLang'],
        ];
    }

    public function validateGame($attribute, $params)
    {
        return GameService::checkGameID($this->game_id);
    }

    public function validateLang($attribute, $params)
    {
        foreach ($this->lang as $lang) {
            if (gettype($lang) != 'string' && mb_strlen($lang) < 4 && mb_strlen($lang) > 191) {
                $this->addError($attribute, 'Lang string must be more then 4 symbols and less then 191 symbols.');
            }
        }
    }

    public function save()
    {
        $category = new Category();
        $category->seo_name = $this->seo_name;
        $category->lang_id = LangService::setLangs($this->lang);
        $category->game_id = $this->game_id;
        $category->save();
        return $category->id;
    }
}
