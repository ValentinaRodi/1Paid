<?php

namespace app\controllers\operator;

use app\models\Category;
use app\models\Field;
use app\models\FieldCategory;
use app\search\CategorySearch;
use app\search\FieldSearch;
use app\services\FieldService;
use app\services\RbacService;
use Yii;
use yii\db\Query;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * CategoryController implements the CRUD actions for Category model.
 */
class CategoryController extends Controller
{
    public $layout = 'operator';

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
                            'matchCallback' => function () {
                                return RbacService::getRole('viewing');
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
                            'matchCallback' => function () {
                                return RbacService::getRole('editing');
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
        $searchFieldModel = new CategorySearch();
        $dataProvider = $searchFieldModel->fieldSearch($id);

        return $this->render('view', [
            'model' => $this->findModel($id),
            'searchModel' => $searchFieldModel,
            'dataProvider' => $dataProvider,
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
     * Updates an existing Category model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $searchFieldModel = new CategorySearch();
        $dataProvider = $searchFieldModel->fieldSearch($id);

//        $fields_arr = $this->findFields($id);
        if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {
            return $this->redirect(['view', 'id' => $model->id]);
        }

        return $this->render('update', [
            'model' => $model,
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
     * @param int $category_id ID
     * @return \yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionAddFields($category_id)
    {
        $searchFieldModel = new FieldSearch();
        $dataProvider = $searchFieldModel->search([]);

        if ($this->request->isPost) {
            $res = FieldService::addFieldsToCategory($this->request->post()['selection'], $category_id);

            if ($res['success']) {
                return $this->redirect(['update', 'id' => $category_id]);
            } else {
                var_dump($res['errors']);
                die();
            }

        }

        return $this->render('add-fields', [
            'model' => $this->findModel($category_id),
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

    /**
     * Finds the Fields model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param int $category_id ID
     * @return Field the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findFields($category_id)
    {
        $query = new Query();
        $query->select(['field_category.field_id', 'field_category.category_id',
            'field.id', 'field.seo_name', 'field.lang_id',
            'field.type', 'field.created_at', 'field.updated_at', 'field.search'])
            ->from('field_category')
            ->join('LEFT JOIN', 'field', 'field.id = field_category.field_id')
            ->where(['field_category.category_id' => $category_id]);

        $fields_arr = $query->all();
        $command = $query->createCommand();
        $fields_arr = $command->queryAll();

        if (!empty($rows)) {
            return $fields_arr;
        }

//        if (($model = Field::findOne(['id' => $category_id])) !== null) {
//            return $model;
//        }

        throw new NotFoundHttpException('The requested page does not exist.');
    }
}
