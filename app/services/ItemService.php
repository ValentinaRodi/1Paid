<?php

namespace app\services;

use Yii;
use app\models\{
    Item,
//    Lang
};
use app\services\{
//CategoryService,
    FileService,
    LangService,
    UserService
};

class ItemService
{
    public static function getList($categoryId) {
        if (isset($categoryId) && !empty($categoryId)) {
            $items = Item::find()
                    ->where(['category_id' => $categoryId])
                    ->orderBy(['sort' => SORT_DESC])
                    ->asArray()->all();
            return self::formatItems($items);
        }
        return false;
    }

    public static function formatItems($items)
    {
        if (isset($items) && !empty($items) && is_array($items)) {
            $langsIds = [];
            $iconsIds = [];
//echo '<pre>' . print_r($items, true) . '</pre>';die();
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
                        $items[$key]['name'] = $lang['russian'];
                        unset($items[$key]['lang_id']);
                    }
                }
                foreach ($usersNames as $user) {
                    if ($item['user_id'] == $user['id']) {
                        $items[$key]['username'] = $user['name'];
                    }
                }
            }

            return $items;
        }
        return [];
    }

    public static function get($params)
    {
        $gameId = GameService::getIDbySEO($params['game']);
        $categoryId = CategoryService::getIDbySEO($gameId, $params['category']);
        if (isset($categoryId) && !empty($categoryId)) {
            $items = Item::find()
                    ->where([
                        'category_id' => $categoryId,
                        'id' => $params['id'],
                        'seo_name' => $params['item'],
                        ])
                    ->orderBy(['sort' => SORT_DESC])
                    ->asArray()->one();
            return self::formatItems([$items])[0];
        }
        return false;
    }
}
