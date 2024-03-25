<?php

use app\models\Category;
use app\models\Field;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\search\CategorySearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */
/** @var app\models\Category $model */


$this->title = 'Add fields to Category: ' . $model->id;
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="add-field-to-category">

    <h1><?= Html::encode($this->title) ?></h1>


    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= Html::beginForm(['operator/category/add-fields?category_id='. $model->id], 'post'); ?>
    <?= Html::submitButton('Добавить выбранные', ['class' => 'btn btn-success mt-3 mb-3', 'data-confirm' =>
        Yii::t('yii', 'Вы уверены, что хотите добавить данные поля?'),]);
    ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\CheckboxColumn'],

            'id',
            'seo_name',
            'lang_id',
            'type',
            'created_at',
            'updated_at',
            'search',
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, $model, $key, $index, $column) {
                    return '/operator/field/' . $action . '?id=' . $model['id'];
//                    return Url::toRoute([$action, 'id' => $model['id']]);
                }
            ],
        ],
    ]); ?>

    <?= Html::endForm(); ?>

</div>
