<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\models\{
    Category
};
use app\services\{
    CategoryService,
    ItemService
};

class ItemController extends Controller
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

    public function actionGetList()
    {
        $post = Yii::$app->request->post();
//        if (isset($post['game_id']) && !empty($post['game_id'])) {
//            $categories = CategoryService::getList((int) $post['game_id']);
//        }
        if (isset($post['category_id']) && !empty($post['category_id'])) {
            $items = ItemService::getList((int) $post['category_id']);
        }
        return $this->asJson([
                //'categories' => $categories,
                'items' => $items,
        ]);
    }
}
