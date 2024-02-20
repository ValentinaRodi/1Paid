<?php

namespace app\services;

use Yii;
use app\models\{
    File
};
use function PHPUnit\Framework\throwException;

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

    public static function uploadImage($fileData)
    {
        $validateFile = self::validateImage($fileData);
        if ($validateFile['success'] == true) {
            $path = $_SERVER["DOCUMENT_ROOT"] ."/uploads/tmp/";
// save file and resize
            var_dump($path);
            var_dump($fileData['tmp_name']);
            var_dump(basename($_FILES['img_file']['name']));

//            $uploadfile = $path . basename($_FILES['img_file']['name']);
            $uploadfile = $path . 'test.png';
            var_dump('op');
            var_dump($_FILES['img_file']['tmp_name']);
            var_dump($uploadfile);






            if (move_uploaded_file($_FILES['img_file']['tmp_name'], $uploadfile)) {
                echo "Файл успешно загружен.\n";
            } else {
                echo "Возникла ошибка при загрузке файла.\n";
            }


//           if (copy($fileData['tmp_name'], $path)){
//               var_dump('copy +');
//           }
//            var_dump(move_uploaded_file($fileData['tmp_name'], $path));
        }

//        return [
//            'success' => false,
//            'errors' => $validateFile['errors']
//        ];
    }

    public static function validateMimeType($file, $allowedMimeTypes)
    {
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $file['tmp_name']);

        if (!in_array($mimeType, $allowedMimeTypes)) {
            return false;
        }
        return true;
    }
    public static function validateFileSize($file, $allowedSize)
    {

    }

    public static function validateImage($file)
    {
        $allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
        $errors = null;
        //min 250 x 250
        //max 2000 2000

        if (!self::validateMimeType($file, $allowedMimeTypes)) {
            $errors['mimeType'] = 'mime-type wrong.';
        }
//        if (!self::validateFileSize($file, $allowedMimeTypes)) {
//            $errors['fileSize'] = 'file-size wrong.';
//        }
        if (!$errors) {
            return [
                'success' => true
            ];
        }
        return [
            'success' => false,
            'errors' => $errors
        ];
    }
}
