<?php

namespace app\controllers\operator;

use app\models\{
    Category,
    Field,
    Lang
};
use app\search\{
    CategorySearch,
    FieldSearch
};
use app\services\{
    CategoryService,
    FieldService,
    RbacService,
    GameService
};
use yii\filters\AccessControl;
use yii\filters\VerbFilter;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\helpers\ArrayHelper;

/**
 * CategoryController implements the CRUD actions for Category model.
 */
class CategoryController extends Controller
{
    public $layout = 'operator';
    public string $viewing = 'category_viewing';
    public string $editing = 'category_editing';

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
     * Lists all Category models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new CategorySearch();
        $dataProvider = $searchModel->search($this->request->queryParams);

        return $this->render('index', [
            'editing' => RbacService::getRole($this->editing),
            'viewing' => RbacService::getRole($this->viewing),
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Category model.
     * @param int $id ID
     * @return string
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionView($id)
    {
        $searchFieldModel = new FieldSearch();
        $dataFieldProvider = $searchFieldModel->search($this->request->queryParams);

        return $this->render('view', [
            'editing' => RbacService::getRole($this->editing),
            'viewing' => RbacService::getRole($this->viewing),
            'model' => $this->findModel($id),
            'searchFieldModel' => $searchFieldModel,
            'dataFieldProvider' => $dataFieldProvider,
        ]);
    }

    /**
     * Creates a new Category model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new Category();
        $model->lang = new Lang();
        $games = ArrayHelper::map(GameService::getGamesArray(), 'id', 'seo_name');

        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                \Yii::$app->session->setFlash('success', 'Игра успешно добавлена.');
                return $this->redirect(['view', 'id' => $model->id]);
            } else {
                \Yii::$app->session->setFlash('error', $model->errors);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
            'games' => $games,
        ]);
    }

    /**
     * Updates an existing Category model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $games = ArrayHelper::map(GameService::getGamesArray(), 'id', 'seo_name');
        $searchFieldModel = new FieldSearch();
        $dataProvider = $searchFieldModel->search($this->request->queryParams);

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
            'games' => $games,
            'searchModel' => $searchFieldModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Deletes an existing Category model.
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
     * Add fields an existing Category model.
     * If adding is successful, the browser will be redirected to the 'update' page.
     * @param int $id ID
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionAddFields($id)
    {
        $searchFieldModel = new FieldSearch();
        $dataProvider = $searchFieldModel->search($this->request->queryParams, true);

        if ($this->request->isPost) {
            $res = FieldService::addFieldsToCategory($this->request->post()['selection'], $id);

            if ($res['success']) {
                return $this->redirect(['update', 'id' => $id]);
            } else {
                var_dump($res['errors']);
                die();
            }

        }

        return $this->render('add-fields', [
            'model' => $this->findModel($id),
            'searchModel' => $searchFieldModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Finds the Category model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return Category the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {
        if (($model = Category::findOne(['id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }

    public function actionUnlink($id, $field_id)
    {
        CategoryService::unlinkField($id, $field_id);
        return $this->redirect(['view', 'id' => $id]);
    }
}
