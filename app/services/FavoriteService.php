<?php

namespace app\services;

use app\models\Favorite;
use yii\db\Exception;

class FavoriteService
{
    public static function getBy($by_user_id_or_favorite_id, $id)
    {
        try {
            $favorite = Favorite::find()
                ->where([$by_user_id_or_favorite_id => $id])
                ->asArray()->all();
            if ($favorite){
                return [
                    'success' => true,
                    'favorite' => $favorite
                ];
            }
            return [
                'success' => false,
                'favorite' => 'not found'
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'errors' => $e

            ];
        }

    }
    public static function getByItem($user_id, $item_id)
    {
        try {
            $favorite = Favorite::find()
                ->where(['user_id' => $user_id, 'item_id'=>$item_id])
                ->asArray()->all();
            if ($favorite){
                return [
                    'success' => true,
                    'favorite' => $favorite
                ];
            }
            return [
                'success' => false,
                'favorite' => 'not found'
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'errors' => $e

            ];
        }
    }
    public static function getAll($user_id)
    {
        try {
            $favorite = Favorite::find()
                ->where(['user_id' => $user_id])
                ->asArray()->all();
            if ($favorite){
                return [
                    'success' => true,
                    'favorite' => $favorite
                ];
            }
            return [
                'success' => false,
                'favorite' => 'not found'
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'errors' => $e

            ];
        }
    }

    public static function add($item_id, $user_id): array
    {
        try {
            $favorite = new Favorite();
            $favorite->item_id = $item_id;
            $favorite->user_id = $user_id;
            $favorite->save();
            return [
                'success' => true,
                'id' => $favorite->id
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'errors' => $e

            ];
        }
    }

    public static function deleteBy($by_user_id_or_item_id, $id)
    {
        try {
            $sql = 'DELETE FROM favorite
                    WHERE ' . $by_user_id_or_item_id . ' = ' . $id;
            \Yii::$app->db->createCommand($sql)->execute();
            return [
                'success' => true
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'errors' => $e

            ];
        }
    }

}