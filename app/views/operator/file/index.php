<?php

use app\models\File;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\search\FileSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Files';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="file-index">

    <h1><?= Html::encode($this->title) ?></h1>
<?php /*
<!--    <p>-->
<!--        --><?//= Html::a('Create File', ['create'], ['class' => 'btn btn-success']) ?>
    <!--    </p>-->
 */?>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>
    <?=Html::beginForm(['operator/file/checkbox-delete'],'post');?>
    <?=Html::submitButton('Удалить выбранные', ['class' => 'btn btn-danger mt-3 mb-3','data-confirm' =>
        Yii::t('yii', 'Вы уверены, что хотите удалить данные записи? Восстановить их будет нельзя.'),]);
    ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\CheckboxColumn'],

            'id',
            'original_name',
            'hashed_name',
            'extension',
            'user_id',
            'path',
            //'size',
            //'created_at',
            //'updated_at',
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, File $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                 }
            ],
        ],
    ]); ?>

    <?= Html::endForm();?>
</div>
