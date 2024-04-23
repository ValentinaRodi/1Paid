<?php

namespace app\services;

use Yii;
use app\models\{File, Game};
use yii\base\ErrorException;
use yii\base\Security;
use yii\db\Query;
use yii\web\UploadedFile;

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

    public static function upload($fileData, $user_id)
    {
        $file = new File();
//echo '<pre>' . print_r($fileData, true) . '</pre>';
        $file->original_name = $fileData->name;
        $file->hashed_name = Yii::$app->getSecurity()->generateRandomString() . time();
        $file->extension = $fileData->extension;
        $file->size = $fileData->size;
        $file->user_id = $user_id;
        $file->save();
//echo '<pre>' . print_r($file, true) . '</pre>';
        return $file;
    }

    public static function saveFile(UploadedFile $file, $info, $type)
    {
        switch ($type) {
            case 'icon':
            case 'background' : 
                $path = 'uploads/files/games/';
                if ($file->saveAs($path . $info->hashed_name . '.' . $info->extension)) {
                    return true;
                } else {
                    echo '<pre>' . print_r($file->error, true) . '</pre>';die();
                }
                break;
//            case 'avatar'
        }
        return false;
    }

    public static function uploadGameImage($fileData, $game_id, $img_id_name, $size)
    {
        $validateFile = self::validateImage($fileData);
        if ($validateFile['success'] == true) {


//            $size = 256;
            $path = $_SERVER["DOCUMENT_ROOT"] . "/uploads/files/games";

            // запись файла в бд, получение его id
            // запись нового id в табл. game - icon_id
            try {
                $img = self::resizeImage($fileData, $size[0], $size[1]);

                $hashedName = Yii::$app->getSecurity()->generateRandomString();
                $directoryAndFileName = $path . '/' . $hashedName . '.png';

                imagepng($img, $directoryAndFileName);

                // Освобождаем память
                imagedestroy($img);
//                imagedestroy($img);

                $file = new File();
                $file->original_name = preg_replace('/\.[^.]+$/', '', $fileData['name']);;
                $file->hashed_name = $hashedName;
                $file->extension = 'png';
                $file->user_id = Yii::$app->user->id;
                $file->size = $fileData['size'];
                $file->created_at = date('Y-m-d H:i:s');
                $file->path = '/files/games';
                $file->save();

                    $sql = 'UPDATE game
                        SET ' . $img_id_name . '=' . $file->id .
                        ' WHERE id=' . $game_id;
//var_dump($file->id);
//var_dump($sql);
//die();
                    \Yii::$app->db->createCommand($sql)->execute();
//                    $game = Game::findOne(['background_id' => 1]);
//                    $game->icon_id = $file->id;
//                    $game->save();


                if (!isset($file['_errors'])) {


                    return [
                        'success' => true,
                        'file_id' => $file->id
                    ];
                }
                return [
                    'success' => false,
                    'errors' => $file['_errors']
                ];
            } catch (ErrorException $error) {
                var_dump($error);
                return [
                    'success' => false,
                    'errors' => $error
                ];
            }
        }
        return [
            'success' => false,
            'errors' => $validateFile['errors']
        ];
    }

    public static function uploadImage($fileData, $user_id = null): array
    {

        $validateFile = self::validateImage($fileData);

        if (empty($user_id)) {
            $user_id = Yii::$app->user->id;
        }

        if ($validateFile['success'] == true) {
            $path = $_SERVER["DOCUMENT_ROOT"] . "/uploads/avatars/";

            $sizeList = [
                'big' => 256,
                'medium' => 128,
                'small' => 32
            ];
            $fileNamesList = [

            ];
            $avatarDbName = '{';
            foreach ($sizeList as $directory => $size) {
                try {
                    $img = self::resizeImage($fileData, $size, $size);

                    // Сохраняем новое изображение в папку uploads
                    $hashedName = Yii::$app->getSecurity()->generateRandomString();
                    $directoryAndFileName = $path . $directory . '/' . $hashedName . '.png';

                    imagepng($img, $directoryAndFileName);

                    // Освобождаем память
                    imagedestroy($img);
                    imagedestroy($img);

                    $file = new File();
                    $file->original_name = preg_replace('/\.[^.]+$/', '', $fileData['name']);;
                    $file->hashed_name = $hashedName;
                    $file->extension = 'png';
                    $file->user_id = $user_id;
                    $file->size = $fileData['size'];
                    $file->created_at = date('Y-m-d H:i:s');
                    $file->path = '/avatars/' . $directory;
                    $file->save();

                    $fileNamesList[$directory] = $hashedName;
                    if ($directory != 'small') {
                        $avatarDbName = $avatarDbName . '"' . $directory . '":"' . $hashedName . '", ';
                    } else {
                        $avatarDbName = $avatarDbName . '"' . $directory . '":"' . $hashedName . '"}';
                    }

                } catch (ErrorException $error) {
                    return [
                        'success' => false,
                        'errors' => $error
                    ];
                }

            }

            Yii::$app->user->identity->setAvatar($avatarDbName);
            Yii::$app->user->identity->save(false);

            return [
                'success' => true,
                'avatar' => $fileNamesList,
                'errors' => $file->errors
            ];
        }
        return [
            'success' => false,
            'errors' => $validateFile['errors']
        ];
    }

    public static function deleteFile($id)
    {
        $path = $_SERVER["DOCUMENT_ROOT"] . "/uploads";
        $fileData = File::find()
            ->where(['id' => $id])
            ->asArray()->all();
        $fileData = $fileData[0];

        if ($fileData['path'] != '0' && unlink($path . $fileData['path'] . '/' . $fileData['hashed_name'] . '.' . $fileData['extension'])) {

            return [
                'success' => 'true',
            ];
        }/* else {

            $full_path_with_file_name = self::searchFileFolder($path, $fileData['hashed_name'] . '.' . $fileData['extension']);
            if (unlink($full_path_with_file_name[0])) {
                return [
                    'success' => 'true',
                ];
            }

            return [
                'success' => 'false',
                'error' => 'path not found'
            ];
        }*/
    }

    public static function searchFileFolder($folderName, $fileName)
    {
        $found = array();
        $folderName = rtrim($folderName, '/');

        $dir = opendir($folderName); // открываем текущую папку

        // перебираем папку, пока есть файлы
        while (($file = readdir($dir)) !== false) {
            $file_path = "$folderName/$file";

            if ($file == '.' || $file == '..') continue;

            // это файл проверяем имя
            if (is_file($file_path)) {
                // если имя файла искомое, то вернем путь до него
                if (false !== strpos($file, $fileName)) $found[] = $file_path;
            } // это папка, то рекурсивно вызываем search_file
            elseif (is_dir($file_path)) {
                $res = self::searchFileFolder($file_path, $fileName);
                $found = array_merge($found, $res);
            }

        }

        closedir($dir); // закрываем папку

        return $found;
    }

    public static function resizeImage($fileData, $sizeWidth, $sizeHeight)
    {
        $image = imagecreatefromstring(file_get_contents($fileData['tmp_name']));

        // Получаем новые размеры изображения
        $width = imagesx($image);
        $height = imagesy($image);
        $newWidth = $sizeWidth;
        $newHeight = $sizeHeight;

        // Создаем новое изображение нужного размера
        $newImage = imagecreatetruecolor($newWidth, $newHeight);

        // Масштабируем изображение
        imagecopyresampled($newImage, $image, 0, 0, 0, 0, $newWidth, $newHeight, $width, $height);

        return $newImage;
    }

    public static function validateMimeType($file, $allowedMimeTypes): bool
    {
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $file['tmp_name']);

        if (!in_array($mimeType, $allowedMimeTypes)) {
            return false;
        }
        return true;
    }

    public static function validateFileSize($file_size, $allowedSize): bool
    {
        if ($file_size <= $allowedSize) {
            return true;
        }

        return false;
    }

    public static function validateImage($file): array
    {
        $allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
        $errors = null;
        //min 250 x 250
        //max 2000 2000

        if (!self::validateMimeType($file, $allowedMimeTypes)) {
            $errors['mimeType'] = 'mime-type wrong.';
        }
        if (!self::validateFileSize($file['size'], 5 * 1024 * 1024)) {
            $errors['fileSize'] = 'file-size wrong. Size > 5MB.';
        }
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
