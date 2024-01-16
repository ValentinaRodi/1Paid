<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\models\{
    User
};

class ProfileController extends Controller
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
                        'actions' => ['get'],
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::class,
                'actions' => [
                    'get' => ['get', 'head'],
                ],
            ],
        ];
    }

    public function actionGet()
    {
        $user = User::findIdentity(\Yii::$app->user->id);
//echo '<pre>' . print_r($user, true) . '</pre>';die();
        return $this->asJson([
            'success' => true,
            'name' => $user->name,
            'avatar' => $user->getAvatar(),
            'balance' => $user->balance,
            'bonus' => $user->bonus,
            'registerDate' => $user->created_at,
            'logged' => !Yii::$app->user->isGuest,
        ]);
    }
}