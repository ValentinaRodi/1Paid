<?php


namespace app\services;

use Yii;
use app\models\{
    Category,
    Game,
    File,
    Lang
};

class GameService
{
    public static function getList($offset)
    {
        $games = Game::find()
                ->limit(8)
                ->offset((int) $offset)
                ->asArray()->all();
//echo '<pre>' . print_r($games, true) . '</pre>';die();
        $langsIds = [];
        $filesIds = [];
        $gamesIds = [];
        foreach ($games as $game) {
            $langsIds[] = $game['lang_id'];
            $filesIds[] = $game['icon_id'];
            $filesIds[] = $game['background_id'];
            $gamesIds[] = $game['id'];
        }
        $categories = Category::find()
                ->select(['id', 'game_id', 'lang_id'])
                ->where(['in', 'game_id', $gamesIds])
                ->orderBy(['sort' => SORT_DESC])
                ->asArray()->all();
        foreach ($categories as $category) {
            $langsIds[] = $category['lang_id'];
        }
        $langs = Lang::find()
                ->where(['in', 'id', $langsIds])
                ->asArray()->all();

        foreach ($categories as $key => $category) {
            foreach ($langs as $lang) {
                if ($category['lang_id'] === $lang['id']) {
                    $categories[$key]['name'] = $lang['russian']; // Потом сделать выбор языка.
                }
            }
            unset($categories[$key]['lang_id']);
        }

        $files = File::find()
                ->where(['in', 'id', $filesIds])
                ->asArray()->all();

        foreach ($games as $key => $game) {
            foreach ($langs as $lang) {
                if ($game['lang_id'] === $lang['id']) {
                    $games[$key]['name'] = $lang['russian']; // Потом сделать выбор языка.
                }
            }
            foreach ($files as $file) {
                if ($game['icon_id'] === $file['id']) {
                    $games[$key]['icon'] = '/img/' . $file['hashed_name'] . '.' . $file['extension'];
                }
                if ($game['background_id'] === $file['id']) {
                    $games[$key]['bg_image'] = '/img/' . $file['hashed_name'] . '.' . $file['extension'];
                }
            }
            foreach ($categories as $category) {
                if ($category['game_id'] === $game['id']) {
                    unset($category['game_id']);
                    $games[$key]['categories'][] = $category;
                }
            }
            unset($games[$key]['lang_id']);
            unset($games[$key]['icon_id']);
            unset($games[$key]['background_id']);
        }
        $count = Game::find()->count();
        return [
            'games' => $games,
            'offset' => $offset,
            'count' => $count,
            ];
    }
}