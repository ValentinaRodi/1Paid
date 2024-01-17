<?php

namespace app\services;

use Yii;
use app\models\{
    Item,
    Lang
};
use app\services\{
    FileService,
    LangService,
    UserService
};

class ItemService
{
    public static function getList($categoryId) {
        $items = Item::find()
                ->where(['category_id' => $categoryId])
                ->orderBy(['sort' => SORT_DESC])
                ->asArray()->all();
        $langsIds = [];
        $iconsIds = [];
        foreach ($items as $item) {
            $langsIds[] = $item['lang_id'];
            $iconsIds[] = $item['icon_id'];
            $usersIds[] = $item['user_id'];
        }
        $langs = LangService::getLangs($langsIds);
        $files = FileService::getFiles($iconsIds);
        $usersNames = UserService::getUsernames($usersIds);
        foreach ($items as $key => $item) {
            foreach ($files as $file) {
                if ($item['icon_id'] == $file['id']) {
                    $items[$key]['icon'] = $file['fileName'];
                    unset($items[$key]['icon_id']);
                }
            }
            foreach ($langs as $lang) {
                if ($item['lang_id'] == $lang['id']) {
                    $items[$key]['lang'] = $lang['russian'];
                    unset($items[$key]['lang_id']);
                }
            }
            foreach ($usersNames as $user) {
                if ($item['user_id'] == $user['id']) {
                    $items[$key]['username'] = $user['name'];
                }
            }
        }
//        echo '<pre>' . print_r($items, true) . '</pre>';die();
        return $items;
    }
}
