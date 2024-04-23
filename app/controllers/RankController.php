<?php

namespace app\controllers;

use app\services\RankService;
use Yii;
use yii\web\Controller;
use yii\filters\VerbFilter;


class RankController extends Controller
{
    public $layout = 'main.twig';

    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [/*
            'access' => [
                'class' => AccessControl::class,
                'only' => ['get'],
                'rules' => [
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['?'],
                    ],
                    [
                        'allow' => true,
                        'actions' => ['get-list'],
                        'roles' => ['?'],
                    ],
                ],
            ],*/
            'verbs' => [
                'class' => VerbFilter::class,
                'actions' => [
//                    'get-list' => ['get', 'head'],
                ],
            ],
        ];
    }

    public function actionGetUser()
    {
        if (Yii::$app->request->isAjax) {
            $data = Yii::$app->request->post();

            $object = 0;
            $object_id = $data['object_id'];
            return $this->asJson(RankService::get($object, $object_id));
        }
    }

    public function actionGetUserAverageRank()
    {
        if (Yii::$app->request->isAjax) {
            $data = Yii::$app->request->post();

            $object = 0;
            $object_id = $data['object_id'];
            return $this->asJson(RankService::getAverageRank($object, $object_id));
        }
    }

    public function actionGetItem()
    {
        if (Yii::$app->request->isAjax) {
            $data = Yii::$app->request->post();

            $object = 1;
            $object_id = $data['object_id'];
            return $this->asJson(RankService::get($object, $object_id));
        }
    }

    public function actionGetItemAverageRank()
    {
        if (Yii::$app->request->isAjax) {
            $data = Yii::$app->request->post();

            $object = 1;
            $object_id = $data['object_id'];
            return $this->asJson(RankService::getAverageRank($object, $object_id));
        }
    }


    public function actionAdd()
    {
        if (Yii::$app->request->isAjax) {
            $data = Yii::$app->request->post();
            $rank = $data['rank'];
            $object = $data['object'];
            $object_id = $data['object_id'];
            return $this->asJson(RankService::add($rank, $object, $object_id));

        }
    }

}