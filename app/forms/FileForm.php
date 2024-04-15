<?php

namespace app\forms;

use app\models\File;
use app\services\{
    FileService
};
use Yii;
use yii\base\Model;
use yii\web\UploadedFile;

class FileForm extends Model
{
    /**
     * @var UploadedFile
     */
    public $icon;
    public $background;

    public function rules()
    {
        return [
            [['icon', 'background'], 'file', 'skipOnEmpty' => true, 'extensions' => 'png, jpg'],
        ];
    }

    public function getData($type, $user_id)
    {
        if ($this->validate()) {
            return FileService::upload($this->{$type}, $user_id);
        }
    }

    public function upload($path)
    {
        $this->imageFile->saveAs('uploads/'. $path . $this->imageFile->baseName . '.' . $this->imageFile->extension);
    }
}
