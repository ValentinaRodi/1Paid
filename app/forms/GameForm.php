<?php

namespace app\forms;

use Yii;
use yii\base\Model;
use yii\base\Security;
use yii\web\UploadedFile;
use app\models\{
    Game
};
use app\services\{
    FileService,
    LangService
};

/**
 * LoginForm is the model behind the login form.
 *
 * @property-read User|null $user
 *
 */
class GameForm extends Model
{
    public $name;
    public $icon;
    public $bg_image;
    public $lang;
    public $new;

    /**
     * @return array the validation rules.
     */
    public function rules()
    {
        return [
            [['name', /*'icon', 'bg_image',*/ 'lang'], 'required', 'message' => 'Required'],
            ['new', 'integer'],
            ['new', 'in', 'range' => [0, 1]],
            ['new', 'default', 'value' => 0],
            ['name', 'string', 'length' => [4, 191], 'message' => "Some strings is not in 8..191"],
            //[['icon', 'bg_image'], 'file', 'extensions' => ['png', 'jpg', 'gif'], 'maxSize' => 5*1024*1024, 'mimeTypes' => 'image/*', 'skipOnEmpty' => false],
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

    public function upload()
    {
        if ($this->validate()) {
            $icon = FileService::upload($this->bg_image);
            $this->icon_id = $icon->id;
            $this->icon->saveAs('uploads/' . $icon->hashed_name . '.' . $this->icon->extension);
            $bgImage = FileService::upload($this->bg_image);
            $this->background_id = $bgImage->id;
            $this->bg_image->saveAs('uploads/' . $bgImage->hashed_name . '.' . $this->bg_image->extension);
            return true;
        } else {
            return false;
        }
    }

    public function save()
    {
        //$model->upload();
        $game = new Game();
        $game->seo_name = $this->name;
        $game->icon_id = 1;
        $game->background_id = 2;
        $game->lang_id = LangService::setLangs($this->lang);
        $game->new = $this->new;
        $game->save();
//echo '<pre>' . print_r($game->errors, true) . '</pre>';die();
        return $game->id;
    }
}
