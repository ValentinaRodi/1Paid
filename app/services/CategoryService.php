<?php

namespace app\services;

use Yii;
use app\models\{
    Category,
    Lang
};
use app\services\{
    LangService
};

class CategoryService
{
    public static function getList($gameId)
    {
        $categories = Category::find()
                ->select(['id', 'game_id', 'lang_id'])
                ->where(['game_id' => $gameId])
                ->orderBy(['sort' => SORT_DESC])
                ->asArray()->all();
        return self::formatCategories($categories);
    }

    public static function getListOfGames($gamesIds)
    {
        $categories = Category::find()
                ->select(['id', 'game_id', 'lang_id'])
                ->where(['in', 'game_id', $gamesIds])
                ->orderBy(['sort' => SORT_DESC])
                ->asArray()->all();
        return self::formatCategories($categories);
    }

    public static function getOneTop($gameId)
    {
        $category = Category::find()
                ->select(['id', 'game_id', 'lang_id'])
                ->where(['game_id' => $gameId])
                ->orderBy(['sort' => SORT_DESC])
                ->asArray()->one();
        return self::formatCategories([$category]);
    }

    public static function get($gameId)
    {
        $category = Category::find()
                ->select(['id', 'game_id', 'lang_id'])
                ->where(['game_id' => $gameId])
                ->asArray()->one();
        return self::formatCategories([$category]);
    }

    private static function formatCategories($categories)
    {
//echo '<pre>' . print_r($categories, true) . '</pre>';die();
        foreach ($categories as $category) {
            $langsIds[] = $category['lang_id'];
        }
        $langs = LangService::getLangs($langsIds);

        foreach ($categories as $key => $category) {
            foreach ($langs as $lang) {
                if ($category['lang_id'] === $lang['id']) {
                    $categories[$key]['name'] = $lang['russian']; // Потом сделать выбор языка.
                }
            }
            unset($categories[$key]['lang_id']);
        }
        return $categories;
    }
}
