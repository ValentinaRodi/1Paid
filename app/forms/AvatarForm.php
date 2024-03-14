<?php

namespace app\forms;

use app\models\User;
use Yii;
use yii\base\Model;
use yii\web\UploadedFile;

class AvatarForm extends Model
{
    /**
     * @var UploadedFile
     */
    public $imageFile;

    public function rules()
    {
        return [
            [['imageFile'], 'file', 'skipOnEmpty' => false, 'extensions' => 'png, jpg'],
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