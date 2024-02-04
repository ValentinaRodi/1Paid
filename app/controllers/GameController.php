<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\forms\{
    GameForm
};
use app\models\{
    Game
};
use app\services\{
    GameService,
    LangService
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
                    [
                        'actions' => ['post'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
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
                    'post' => ['post']
                ],
            ],
        ];
    }

    public function actionGetList()
    {
        if (isset(Yii::$app->request->post()['offset']) && !empty(Yii::$app->request->post()['offset'])) {
			$offset = Yii::$app->request->post()['offset'];
		} else {
			$offset = 0;
		}
        $games = GameService::getList((int) $offset);
        return $this->asJson($games);
    }

    public function actionPost()
    {
        $model = new GameForm();
        foreach (Yii::$app->request->post() as $key => $value) {
            $model->{$key} = $value;
        }
        if ($model->validate()) {
            return $this->asJson([
                'success' => true,
                'game_id' => $model->save()
            ]);
        } else {
            return $this->asJson([
                'success' => false,
                'errors' => $model->errors
            ]);
        }
    }
}
