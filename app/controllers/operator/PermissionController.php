<?php

namespace app\controllers\operator;

use app\models\Permission;
use app\search\PermissionSearch;
use app\services\RbacService;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * PermissionController implements the CRUD actions for Permission model.
 */
class PermissionController extends Controller
{
    public $layout = 'operator';
    public string $viewing = 'permission_viewing';
    public string $editing = 'permission_editing';
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
     * Lists all Permission models.
     *
     * @return string
     */
    public function actionIndex()
    {
        $searchModel = new PermissionSearch();
        $dataProvider = $searchModel->search($this->request->queryParams);
//        var_dump($dataProvider);

        return $this->render('index', [
            'editing' => RbacService::getRole($this->editing),
            'viewing' => RbacService::getRole($this->viewing),
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);
    }

    /**
     * Displays a single Permission model.
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
     * Creates a new Permission model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return string|\yii\web\Response
     */
    public function actionCreate()
    {
        $model = new Permission();

        if ($this->request->isPost) {
            if ($model->load($this->request->post()) && $model->save()) {
                return $this->redirect(['view', 'id' => $model->id]);
            }
        } else {
            $model->loadDefaultValues();
        }

        return $this->render('create', [
            'model' => $model,
        ]);
    }

    /**
     * Updates an existing Permission model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);

        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
        ]);
    }

    /**
     * Deletes an existing Permission model.
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
     * Finds the Permission model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $id ID
     * @return Permission the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($id)
    {

//        if (($lang = Lang::findOne(['id' => $id])) !== null) {
//            if (($model = Permission::find()
////                    ->from([Lang::tableName()])
//                    ->join('LEFT JOIN', 'lang', 'lang.id = permission.lang_id')
//                    ->where(['id' => $id])
//                    ->one()) !== null) {
//                return $model;
//            }
//        }

        if (($model = Permission::findOne(['permission.id' => $id])) !== null) {
            return $model;
        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
