<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\forms\{
    PasswordForm,
    ProfileForm
};
use app\models\{
    User
};
use app\services\{
    ProfileService
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
                //'only' => ['get'],
                'rules' => [
                    /*                    [
                                            'actions' => ['logout'],
                                            'allow' => true,
                                            'roles' => ['?'],
                                        ],*/
                    [
                        'allow' => true,
                        'actions' => ['get', 'edit', 'edit-password'],
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::class,
                'actions' => [
                    'get' => ['get', 'head'],
                    'edit' => ['post'],
                    'edit-password' => ['post'],
                ],
            ],
        ];
    }

    public function actionGet()
    {
        return $this->asJson(ProfileService::get());
    }

    public function actionEdit()
    {
        return $this->asJson(ProfileService::edit(Yii::$app->request->post()));
    }

    public function actionEditPassword()
    {
        return $this->asJson(ProfileService::editPassword(Yii::$app->request->post()));

    }
}