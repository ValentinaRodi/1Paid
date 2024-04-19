<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\web\UploadedFile;
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
                'rules' => [
                    [
                        'allow' => true,
                        'actions' => ['get', 'post', 'edit-password', 'upload-image'], //
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::class,
                'actions' => [
                    'get' => ['get', 'head'],
                    'post' => ['post'],
                    'edit-password' => ['post'],
                    'upload-image' => ['post'],
                ],
            ],
        ];
    }

    public function actionGet()
    {
echo '<pre>' . print_r('huj', true) . '</pre>';die();
        $profile = ProfileService::get();
        if ($profile) {
            if (Yii::$app->request->isAjax) {
                return $this->asJson($profile);
            }
            return $this->render('edit', [
                'profile' => json_encode($profile),
            ]);
        }
        return $this->asJson([
            'success' => false,
        ]);
    }

    public function actionPost()
    {

        if (Yii::$app->request->isAjax) {
            return $this->asJson(ProfileService::edit(Yii::$app->request->post()));
        }

        return $this->render('edit', [
            'profile' => json_encode(ProfileService::edit(Yii::$app->request->post())),
        ]);

    }

    public function actionEditPassword()
    {
        return $this->asJson(ProfileService::editPassword(Yii::$app->request->post()));

    }

    public function actionUploadImage()
    {
        return $this->asJson(ProfileService::uploadImage($_FILES['img_file']));

    }
}