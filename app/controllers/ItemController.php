<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\services\{
    CategoryService,
    FieldService,
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
            $fields = FieldService::getListFilters($categoryId);
//echo '<pre>' . print_r($get, true) . '</pre>';die();
            $result = [];
            if ($items) {
                $result['items'] = $items;
            }
            $result['categories'] = $categories;
            $result['selected'] = $categoryId;
            $result['fields'] = $fields;
            if (Yii::$app->request->isAjax) {
                return $this->asJson($result);
            }
            return $this->render('index', [
                'data' => json_encode($result),
            ]);
        }
        if (Yii::$app->request->isAjax) {
            return $this->asJson(['success' => false]);
        }
        return $this->render('index', [
            'data' => '',
        ]);
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

    public function actionSave()
    {
        $item_data = Yii::$app->request->post();
        if ($item_data) {
            $save_item = ItemService::saveItem($item_data);

            if ($save_item['success'] == true) {
                return $this->asJson([
                    'success' => true,
                    'item_id' => $save_item['item_id']
                ]);
            }
            return $this->asJson([
                'success' => false,
                'errors' => $save_item['errors'],
                $save_item
            ]);
        }
        return $this->asJson([
            'success' => false,
            'errors' => 'item data not found!'
        ]);
    }

    public function actionGetItemsByParams()
    {
        $params = Yii::$app->request->post();

        if ($params) {
            $items = ItemService::getItemsByParams($params);

            if ($items['success'] == true) {
                return $this->asJson([
                    'success' => true,
                    'items_array' => $items['items_array']
                ]);
            }
            return $this->asJson([
                'success' => false,
                'errors' => $items['errors'],
            ]);
        }
        return $this->asJson([
            'success' => false,
            'errors' => 'params not found!'
        ]);

    }

}
