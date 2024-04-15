<?php

namespace app\services;

use Yii;
use app\models\{
    Game
};
use app\services\{
    CategoryService,
    FileService,
    LangService
};

class GameService
{
    public static function getList($offset)
    {
        $games = Game::find()
                ->limit(8)
                ->offset((int) $offset)
                ->asArray()->all();
        $langsIds = [];
        $filesIds = [];
        $gamesIds = [];
        foreach ($games as $game) {
            $langsIds[] = $game['lang_id'];
            $filesIds[] = $game['icon_id'];
            $filesIds[] = $game['background_id'];
            $gamesIds[] = $game['id'];
        }

        $categories = CategoryService::getListOfGames($gamesIds);
        $files = FileService::getFiles($filesIds);
		$langs = LangService::getLangs($langsIds);

        foreach ($games as $key => $game) {
            foreach ($langs as $lang) {
                if ($game['lang_id'] === $lang['id']) {
                    $games[$key]['name'] = $lang['russian']; // Потом сделать выбор языка.
                }
            }
            foreach ($files as $file) {
                if ($game['icon_id'] === $file['id']) {
                    $games[$key]['icon'] = $file['fileName'];
                }
                if ($game['background_id'] === $file['id']) {
                    $games[$key]['bg_image'] = $file['fileName'];
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

    public static function checkGameID($gameId)
    {
        return Game::find()
                ->where(['id' => $gameId])
                ->count();
    }

    public static function getIDbySEO($seoName)
    {
        return Game::find()
                ->select('id')
                ->where(['seo_name' => $seoName])
                ->asArray()->one()['id'];
    }

    public static function getGamesArray()
    {
        return Game::find()
                ->select(['id', 'seo_name'])
                ->asArray()->all();
    }
}
