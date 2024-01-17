<?php

namespace app\services;

use Yii;
use app\models\{
    File
};

class FileService
{
    public static function getFiles($filesIds)
    {
        $files = File::find()
                ->where(['in', 'id', $filesIds])
                ->asArray()->all();
        foreach ($files as $key => $file) {
            $files[$key]['fileName'] = '/img/' . $file['hashed_name'] . '.' . $file['extension'];
        }
        return $files;
    }

    public static function upload($fileData)
    {
            $file = new File();
            $file->original_name = $fileData->icon->baseName;
            $file->hashed_name = Security::generateRandomString() . time();
            $file->extension = $fileData->icon->extension;
            $file->size = $fileData->icon->size;
            $file->save();
            return $file;
    }
}
