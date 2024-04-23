<?php

namespace app\controllers\operator;

use app\forms\{
    FileForm,
};
use app\models\{
    Game,
    Lang
};
use app\search\GameSearch;
use app\services\{
    FileService,
    RbacService
};
use yii\filters\{
    AccessControl,
    VerbFilter
};
use yii\web\{
    Controller,
    NotFoundHttpException,
    UploadedFile
};

/**
 * GameController implements the CRUD actions for Game model.
 */
class GameController extends Controller
{
    public $layout = 'operator';
    public string $viewing = 'game_viewing';
    public string $editing = 'game_editing';

    /**
     * @inheritDoc
     */
    public function behaviors()
    {
        return array_merge(
            parent::behaviors(),
            [
                'access' => [
                    'class' => AccessControl::class,
                    'only' => ['index', 'view', 'create', 'update', 'delete'], // Устанавливаем правила только для site/user и site/admin. К site/index имеют доступ все.
                    'rules' => [
                        [
                            'allow' => true, // Разрешаем доступ.
                            'actions' => ['index', 'view'], // К действию site/admin
                            'verbs' => ['GET'], // Через HTTP методы GET, POST и PUT.
                            'roles' => ['@'],
                            'matchCallback' => function () {
                                return RbacService::getRole($this->viewing);
                            },
                            'denyCallback' => function () {
                                // Если пользователь не подпадает под все условия, то завершаем работы и выдаем своё сообщение.
                                die('Эта страница доступна только администратору!');
                            },
                        ],
                        [
                            'allow' => true, // Разрешаем доступ.
                            'actions' => ['index', 'view', 'create', 'update', 'delete', 'add-fields'], // К действию site/admin
                            'verbs' => ['GET', 'POST'], // Через HTTP методы GET, POST и PUT.
                            'roles' => ['@'],
                            'matchCallback' => function () {
                                return RbacService::getRole($this->editing);
                            },
                            'denyCallback' => function () {
                                // Если пользователь не подпадает под все условия, то завершаем работы и выдаем своё сообщение.
                                die('Эта страница доступна только администратору!');
                            },
                        ],
                    ],
                ],
            ],
            [
                'verbs' => [
                    'class' => VerbFilter::className(),
                    'actions' => [
                        'delete' => ['POST'],
                    ],
                ],

            ]
        );
    }

    /**
     * Lists all Game models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new GameSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'editing' => RbacService::getRole($this->editing),
            'viewing' => RbacService::getRole($this->viewing),
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Game model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        return $this->render('view', [
            'editing' => RbacService::getRole($this->editing),
            'viewing' => RbacService::getRole($this->viewing),
            'model' => $this->findModel($id),
        ]);
    }

    /**
     * Creates a new Game model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new Game();
        $model->lang = new Lang();
        $file = new FileForm();

        if ($this->request->isPost && $model->load(\Yii::$app->request->post())) {
            $file->icon = UploadedFile::getInstance($file, 'icon');
            $icon = $file->getData('icon', \Yii::$app->user->id);
            $file->background = UploadedFile::getInstance($file, 'background');
            $background = $file->getData('background', \Yii::$app->user->id);
            $model->icon_id = $icon->id;
            $model->background_id = $background->id;
            if ($model->save() &&
                    FileService::saveFile($file->icon, $icon, 'icon') &&
                    FileService::saveFile($file->background, $background, 'background')
                    ) {
                \Yii::$app->session->setFlash('success', 'Игра успешно добавлена.');
                return $this->redirect(['view', 'id' => $model->id]);
            } else {
                if (isset($background) && !empty($background)) {
                    $icon->delete();
                }
                if (isset($background) && !empty($background)) {
                    $background->delete();
                }
/*
echo '<pre>' . print_r([
    'Game' => $model->errors,
    'Icon' => $icon->errors,
    'Background' => $background->errors,
    'IconFile' => $file->icon->error,
    'BackgroundFile' => $file->background->error,
], true) . '</pre>';die();*/

                \Yii::$app->session->setFlash('error', array_merge($model->errors, $icon->errors, $background->errors));
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
            'file' => $file,
        ]);
    }

    /**
     * Updates an existing Game model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $file = new FileForm();

        if ($this->request->isPost && $model->load(\Yii::$app->request->post())) {
            $file->icon = UploadedFile::getInstance($file, 'icon');
            if (isset($file->icon)) {
                $icon = $file->getData('icon', \Yii::$app->user->id);
                $model->icon_id = $icon->id;
            }
            $file->background = UploadedFile::getInstance($file, 'background');
            if (isset($file->background)) {
                $background = $file->getData('background', \Yii::$app->user->id);
                $model->background_id = $background->id;
            }
            if ($model->save() &&
                    FileService::saveFile($file->icon, $icon, 'icon') &&
                    FileService::saveFile($file->background, $background, 'background')
                    ) {
                \Yii::$app->session->setFlash('success', 'Игра успешно обновлена.');
                return $this->redirect(['view', 'id' => $model->id]);
            } else {
                if (isset($background) && !empty($background)) {
                    $icon->delete();
                }
                if (isset($background) && !empty($background)) {
                    $background->delete();
                }
                /*
echo '<pre>' . print_r([
    'Game' => $model->errors,
    'Icon' => $icon->errors,
    'Background' => $background->errors,
    'IconFile' => $file->icon->error,
    'BackgroundFile' => $file->background->error,
], true) . '</pre>';die();*/
                \Yii::$app->session->setFlash('error', array_merge($model->errors, $icon->errors, $background->errors));
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('update', [
            'model' => $model,
            'file' => $file,
        ]);
    }

    /**
     * Deletes an existing Game model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param int $id ID
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionDelete($id)
    {
        $this->findModel($id)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Game model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return Game the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Game::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
