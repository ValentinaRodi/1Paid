<?php

namespace app\services;

use Yii;
use app\models\{
    Category
};
use app\services\{
//    GameService,
    LangService
};

class CategoryService
{
    public static function getList($gameId)
    {
        $categories = Category::find()
                ->select(['id', 'game_id', 'lang_id', 'seo_name'])
                ->where(['game_id' => $gameId])
                ->orderBy(['sort' => SORT_DESC])
                ->asArray()->all();
        return self::formatCategories($categories);
    }

    public static function getListOfGames($gamesIds)
    {
        $categories = Category::find()
                ->select(['id', 'game_id', 'lang_id', 'seo_name'])
                ->where(['in', 'game_id', $gamesIds])
                ->orderBy(['sort' => SORT_DESC])
                ->asArray()->all();
        return self::formatCategories($categories);
    }

    public static function getOneTop($gameId)
    {
        if (isset($gameId) && !empty($gameId)) {
            $category = Category::find()
                    ->select(['id', 'game_id', 'lang_id', 'seo_name'])
                    ->where(['game_id' => $gameId])
                    ->orderBy(['sort' => SORT_DESC])
                    ->asArray()->one();
            return self::formatCategories([$category]);
        }
        return false;
    }

    public static function get($gameId)
    {
        $category = Category::find()
                ->select(['id', 'game_id', 'lang_id', 'seo_name'])
                ->where(['game_id' => $gameId])
                ->asArray()->one();
        return self::formatCategories([$category]);
    }

    public static function getIDbySEO($gameId, $categorySeoName)
    {
        //$gameId = GameService::getIDbySEO($gameSeoName);
//echo '<pre>' . print_r($gameId, true) . '</pre>';die();
        if (isset($gameId) && !empty($gameId)) {
            return Category::find()
                    ->select('id')
                    ->where(['seo_name' => $categorySeoName, 'game_id' => $gameId])
                    ->asArray()->one()['id'];
        }
        return false;
    }

    public static function getOneTopId($gameId)
    {
        if (isset($gameId) && !empty($gameId)) {
            return Category::find()
                    ->select(['id', 'game_id', 'lang_id', 'seo_name'])
                    ->where(['game_id' => $gameId])
                    ->orderBy(['sort' => SORT_DESC])
                    ->asArray()->one()['id'];
        }
        return false;
    }

    public static function getCategoriesArray()
    {
        $categories = Category::find()
                ->select(['id', 'seo_name'])
                ->asArray()->all();
        return $categories;
    }

    public static function unlinkField($id, $field_id)
    {
        $connection = Yii::$app->getDb();
        $command = $connection->createCommand('DELETE FROM `field_category` WHERE `category_id`=' . $id . ' AND `field_id`=' . $field_id);
        $command->queryAll();
    }

    private static function formatCategories($categories)
    {
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
