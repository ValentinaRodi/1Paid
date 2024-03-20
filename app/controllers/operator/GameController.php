<?php

namespace app\controllers\operator;

use app\forms\AvatarForm;
use app\forms\BackgroundFileForm;
use app\models\Game;
use app\search\GameSearch;
use app\services\FileService;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;
use yii\web\UploadedFile;

/**
 * GameController implements the CRUD actions for Game model.
 */
class GameController extends Controller
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
     * Updates an existing Game model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param int $id ID
     * @return string|\yii\web\Response
     * @throws NotFoundHttpException if the model cannot be found
     */
    public function actionUpdate($id)
    {
        $model = $this->findModel($id);
        $file = new AvatarForm();
        $file_background = new BackgroundFileForm();

        if ($this->request->isPost) {

            if (!empty((array)UploadedFile::getInstance($file, 'imageFile'))) {
                $fileData = (array)UploadedFile::getInstance($file, 'imageFile');
                $fileData['full_path'] = $fileData['fullPath'];
                $fileData['tmp_name'] = $fileData['tempName'];

                $save_file = FileService::uploadGameImage($fileData, $id, 'icon_id', [126, 126]);

                if ($save_file['success'] == true) {
                    ?>
                    <script>alert('Иконка успешно загружена')</script>
                    <?php
                    return $this->redirect(['index', 'id' => $model->id]);

                } else {
                    ?>
                    <script>alert('ошибка загрузки файла')</script>
                    <?php

                }
            }
            if (!empty((array)UploadedFile::getInstance($file_background, 'background'))) {
                $fileData = (array)UploadedFile::getInstance($file_background, 'background');

                $fileData['full_path'] = $fileData['fullPath'];
                $fileData['tmp_name'] = $fileData['tempName'];

                $save_file = FileService::uploadGameImage($fileData, $id, 'background_id', [1260, 390]);

                if ($save_file['success'] == true) {
                    ?>
                    <script>alert('Background успешно загружен)</script>
                    <?php
                    return $this->redirect(['index', 'id' => $model->id]);

                } else {
                    ?>
                    <script>alert('ошибка загрузки файла')</script>
                    <?php

                }
            }
            if ($this->request->isPost && $model->load($this->request->post()) && $model->save()) {

                return $this->redirect(['view', 'id' => $model->id]);
            }
        }

        return $this->render('update', [
            'model' => $model,
            'file_icon' => new AvatarForm(),
            'file_background' => new BackgroundFileForm()
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
