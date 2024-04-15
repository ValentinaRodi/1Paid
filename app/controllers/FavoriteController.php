<?php

namespace app\controllers;

use app\services\FavoriteService;
use app\services\FileService;
use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;


class FavoriteController extends Controller
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
                    'get-list' => ['get', 'head'],
                ],
            ],
        ];
    }

    public function actionGet()
    {

        if (Yii::$app->request->isAjax) {
            $user_id = Yii::$app->user->identity->id;
            return $this->asJson(FavoriteService::getBy('user_id', $user_id));
        }
    }

    public function actionGetByItem()
    {
        if (Yii::$app->request->isAjax) {
            $data = Yii::$app->request->post();
            $user_id = Yii::$app->user->identity->id;
            return $this->asJson(FavoriteService::getByItem($user_id, $data['item_id']));
        }
    }

    public function actionGetAll()
    {
        if (Yii::$app->request->isAjax) {
            $user_id = Yii::$app->user->identity->id;
            return $this->asJson(FavoriteService::getAll($user_id));
        }
    }


    public function actionAdd()
    {

        if (Yii::$app->request->isAjax) {
            $data = Yii::$app->request->post();
            $user_id = Yii::$app->user->identity->id;
            $favorite = FavoriteService::add($data['item_id'], $user_id);

            return $this->asJson($favorite);

        }
    }

    public function actionDelete()
    {

        if (Yii::$app->request->isAjax) {
            $data = Yii::$app->request->post();
            $favorite = FavoriteService::deleteBy('item_id', $data['item_id']);

            return $this->asJson($favorite);

        }
    }

}