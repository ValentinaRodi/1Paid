<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\forms\{
    LoginForm,
    RegisterForm
};
use app\models\{
    User
};
use app\services\{
    GameService
};

class MainController extends Controller
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
                'only' => ['logout', 'login', 'register'],
                'rules' => [
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                    [
                        'allow' => true,
                        'actions' => ['login', 'register', 'profile'],
                        'roles' => ['?'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::class,
                'actions' => [
                    'index' => ['get', 'head'],
                    'profile' => ['get', 'head'],
                    'landing' => ['get', 'head'],
                    'login' => ['post'],
                    'logout' => ['get', 'post'], // не забыть поправить
                ],
            ],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function actions()
    {
        return [
            /*'error' => [
                'class' => 'yii\web\ErrorAction',
            ],*/
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    public function beforeAction($action)
    {
        if (in_array($action->id, ['logout'])) {
            $this->enableCsrfValidation = false;
        }
        return parent::beforeAction($action);
    }

    /**
     * Displays homepage.
     *
     * @return string
     */
    public function actionIndex()
    {
        $games = GameService::getList(0);
        return $this->render('index', ['games' => json_encode($games)]);
    }

    public function actionLanding()
    {
        return $this->renderPartial('landing');
    }

    /**
     * Login action.
     *
     * @return Response|string
     */
    public function actionLogin()
    {
        if (!Yii::$app->user->isGuest) {
            $user = User::findIdentity(\Yii::$app->user->id);
            return $this->asJson([
                'success' => true,
                'name' => $user->name,
                'avatar' => $user->getAvatar(),
                'balance' => $user->balance,
                'bonus' => $user->bonus,
                'registerDate' => $user->created_at,
                'logged' => !Yii::$app->user->isGuest
            ]);
        }
        $model = new LoginForm();
        foreach (Yii::$app->request->post() as $key => $value) {
            $model->{$key} = $value;
        }
        if ($model->login()) {
            $user = User::findIdentity(\Yii::$app->user->id);
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

        $model->password = '';
        return $this->asJson([
            'success' => false,
            'message' => $model->errors
        ]);
    }

    /**
     * Logout action.
     *
     * @return Response
     */
    public function actionLogout()
    {
        Yii::$app->user->logout();

        return $this->asJson([
            'logged' => false,
        ]);
    }

    public function actionError()
    {
        $exception = Yii::$app->errorHandler->exception;
        if ($exception !== null) {
            if (Yii::$app->request->isAjax) {
                return $this->asJson([
                    'success' => false,
                    'code' => $exception->statusCode,
                    'name' => $exception->getName(),
                    'message' => $exception->getMessage(),
                ]);
            } else {
                return $this->renderPartial('error', ['exception' => $exception]);
            }
        }
    }

    
    public function actionRegister()
    {
        if (!Yii::$app->user->isGuest) {
            return $this->asJson([
                'success' => false,
                'message' => 'Уже в системе',
            ]);
        }

        $model = new RegisterForm();
        foreach (Yii::$app->request->post() as $key => $value) {
            $model->{$key} = $value;
        }
        if ($model->register()) {
            $user = new LoginForm();
            $user->email = $model->email;
            $user->password = $model->password;
            if ($user->login()) {
                $user = User::findIdentity(\Yii::$app->user->id);
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
            return $this->asJson([
                'success' => 0,
                'errors' => $user->errors,
            ]);
        }
        return $this->asJson($model->errors);
    }

    public function actionCsrf()
    {
        $csrfToken = \Yii::$app->request->getCsrfToken();
        return $this->asJson([
            '_csrf' => $csrfToken,
        ]);
    }

    public function actionProfile() {
        return $this->render('index');
    }
}
