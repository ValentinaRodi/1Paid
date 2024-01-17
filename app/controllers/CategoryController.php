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
    CategoryService
};

class CategoryController extends Controller
{
    public $layout = 'main.twig';

    /**
     * {@inheritdoc}
     */
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::class,
                'only' => ['get'],
                'rules' => [
/*                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['?'],
                    ],*/
                    [
                        'allow' => true,
                        'actions' => ['get-list'],
                        'roles' => ['?'],
                    ],
                ],
            ],
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
        $gameId = Yii::$app->request->post()['game_id'];
        $categories = CategoryService::getList((int) $gameId);
        return $this->asJson($categories);
    }

    public function actionGetOneTop()
    {
        $gameId = Yii::$app->request->post()['game_id'];
        $category = CategoryService::getOneTop((int) $gameId);
        return $this->asJson($category);
    }

    public function actionGet()
    {
        $gameId = Yii::$app->request->post()['game_id'];
        $category = CategoryService::get((int) $gameId);
        return $this->asJson($category);
    }
}
