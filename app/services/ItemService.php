<?php

namespace app\services;

use Yii;
use app\models\{Field, Item};
use app\services\{
//CategoryService,
    FileService,
    LangService,
    UserService
};

class ItemService
{
    public static function getList($categoryId)
    {
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

    public static function saveItem($item_data)
    {
        $gameId = GameService::getIDbySEO($item_data['game']);
        $categoryId = CategoryService::getIDbySEO($gameId, $item_data['category']);
        var_dump($gameId);
        var_dump($categoryId);
        if (isset($categoryId) && !empty($categoryId) && !empty($item_data['items'])) {
            $fields_seo_names = null;
//            получить привязанные

            foreach ($item_data['items'] as $item_fields) {
                foreach ($item_fields as $field_seo_name => $field) {
                    if (!empty($fields_seo_names)) {
                        $fields_seo_names = $fields_seo_names . ', ' . $field_seo_name;
                    } else {
                        $fields_seo_names = $field_seo_name;
                    }
                }
            }


            $fields = Field::find()
                ->where(['in', 'seo_name', $fields_seo_names])
                ->asArray()->all();

            var_dump($fields);
            die();


        }
    }
}
