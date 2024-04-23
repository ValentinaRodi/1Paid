<?php

namespace app\services;

use app\models\Rank;
use Yii;
use yii\db\Exception;

class RankService
{
    public static function getAverageRank($object, $object_id)
    {
        $ranks = self::get($object, $object_id);
        $total_quantity = 0;
        $total_rank = 0;
        foreach ($ranks['rank'] as $rank => $quantity) {
            if ($rank != 'max') {
                $total_rank = $total_rank + $rank * $quantity;
                $total_quantity = $total_quantity + $quantity;
            }
        }
        $average_rank = $total_rank / $total_quantity;
        return [
            'success' => true,
            'average_rank' => $average_rank
        ];
    }

    public static function get($object, $object_id)
    {
        try {
            $ranks = [1, 2, 3, 4, 5];
            $ranks_count = [];
            $max = 0;
            $ranks_count['max'] = '';
            foreach ($ranks as $rank) {
                $quantity = Rank::find()
                    ->where(['object' => $object, 'object_id' => $object_id, 'rank.rank' => $rank])->count();
                $ranks_count[$rank] = $quantity;
                if ($quantity > $max) {
                    $max = $quantity;
                    $ranks_count['max'] = $max;
                }
            }
            return [
                'success' => true,
                'rank' => $ranks_count
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'errors' => $e
            ];
        }
    }

    public static function getRankByUser($object, $object_id)
    {
        try {

            $user_id = Yii::$app->user->identity->id;

            $quantity = Rank::find()
                ->where(['object' => $object, 'object_id' => $object_id, 'user_id' => $user_id])->count();

            return [
                'success' => true,
                'quantity' => $quantity
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'errors' => $e
            ];
        }
    }

    public static function add($rank, $object, $object_id)
    {
        $user_id = Yii::$app->user->identity->id;

        $rank_quantity = self::getRankByUser($object, $object_id);
        if ($rank_quantity['success'] == true and $rank_quantity['quantity'] < 1) {
            $saveRank = new Rank();

            $saveRank->rank = $rank;
            $saveRank->object = $object;
            $saveRank->object_id = $object_id;
            $saveRank->user_id = $user_id;
            $saveRank->save();
            return [
                'success' => true,
                'rank' => $saveRank->id
            ];
        }

        return [
            'success' => false,
            'errors' => 'Оценку нельзя изменить'
        ];

    }

}