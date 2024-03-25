<?php

namespace app\forms;

use app\models\User;
use Yii;
use yii\base\Model;
use yii\web\UploadedFile;

class BackgroundFileForm extends Model
{
    /**
     * @var UploadedFile
     */
    public $background;

    public function rules()
    {
        return [
            [['background'], 'file', 'skipOnEmpty' => false, 'extensions' => 'png, jpg'],
        ];
    }

    public function upload()
    {
        if ($this->validate()) {
//            $this->imageFile->saveAs('uploads/' . $this->imageFile->baseName . '.' . $this->imageFile->extension);

            var_dump($_POST);

            return true;
        } else {
            return false;
        }
    }
}