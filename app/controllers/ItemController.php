<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\services\{
    CategoryService,
    GameService,
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
        $get = Yii::$app->request->get();
        $gameId = GameService::getIDbySEO($get['game']);
        if (isset($get['category']) && !empty($get['category'])) {
            $categoryId = CategoryService::getIDbySEO($gameId, $get['category']);
        } else {
            $categoryId = CategoryService::getOneTopId($gameId);
        }
        if (isset($gameId) && !empty($gameId)) {
            $categories = CategoryService::getList($gameId);
            $items = ItemService::getList($categoryId);
//echo '<pre>' . print_r($get, true) . '</pre>';die();
            if ($items) {
                if (Yii::$app->request->isAjax) {
                    return $this->asJson([
                        'items' => $items,
                        'categories' => $categories,
                        'selected' => $categoryId,
                        ]);
                }
                return $this->render('index', [
                    'items' => json_encode($items),
                    'categories' => json_encode($categories),
                    'category' => json_encode(['selected' => $categoryId]),
                    ]);
            }
        }
        return $this->asJson(['success' => false]);
    }

    public function actionGet()
    {
        $get = Yii::$app->request->get();
        $item = ItemService::get($get);
        if (Yii::$app->request->isAjax) {
            return $this->asJson($item);
        }
        $this->render('item', ['item' => $item]);
    }

}
