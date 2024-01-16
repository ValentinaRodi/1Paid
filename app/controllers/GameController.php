<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\models\{
    Game
};
use app\services\{
    GameService
};

class GameController extends Controller
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
        $offset = Yii::$app->request->post()['offset'];
        $games = GameService::getList((int) $offset);
        return $this->asJson($games);
    }
}