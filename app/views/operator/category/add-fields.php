<?php

use yii\helpers\Html;
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

            'seo_name',
            'lang.russian',
            'lang.english',
            [
                'attribute' => 'type',
                'filter' => [
                    'options' => 'Опция',
                    'string' => 'Строка',
                    'integer' => 'Целое',
                    'float' => 'Дробное',
                    'file' => 'Файл'
                    ],
                'value' => function ($field){
                    switch ($field->type) {
                        case 'options' : return 'Опция';
                        case 'string' : return 'Строка';
                        case 'integer' : return 'Целое';
                        case 'float' : return 'Дробное';
                        case 'file' : return 'Файл';
                    }
                },
            ],
            [
                'attribute' => 'search',
                'filter' => [
                    '0' => 'Нет',
                    '1' => 'Да'
                    ],
                'value' => function ($field){
                    switch ($field->search) {
                        case '0' : return 'Нет';
                        case '1' : return 'Да';
                    }
                },
            ],
            [
                'attribute' => 'created_at',
                'format' => ['datetime', 'php:d.m.Y H:i:s']
            ],
            [
                'attribute' => 'updated_at',
                'format' => ['datetime', 'php:d.m.Y H:i:s']
            ],
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, $model, $key, $index, $column) {
                    return '/operator/field/' . $action . '?id=' . $model['id'];
                }
            ],
        ],
    ]); ?>

    <?= Html::endForm(); ?>

</div>
