<?php

use app\models\Field;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\search\FieldSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Fields';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="field-index">

    <?php if ($editing) { ?>

        <p>
            <?= Html::a('Create Field', ['create'], ['class' => 'btn btn-success']) ?>
        </p>

    <?php } ?>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

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
                'value' => function ($model){
                    switch ($model->type) {
                        case 'options' : return 'Опция';
                        case 'string' : return 'Строка';
                        case 'integer' : return 'Целое';
                        case 'float' : return 'Дробное';
                        case 'file' : return 'Файл';
                    }
                },
            ],
            'value',
            [
                'attribute' => 'search',
                'filter' => [
                    '0' => 'Нет',
                    '1' => 'Да'
                    ],
                'value' => function ($model){
                    switch ($model->search) {
                        case '0' : return 'Нет';
                        case '1' : return 'Да';
                    }
                },
            ],
            [
                'attribute' => 'created_at',
                'header' => '<div class="date-label"><span class="date-label-text">Создано</span></div>',
                'format' => ['datetime', 'php:d.m.Y H:i:s']
            ],
            [
                'attribute' => 'updated_at',
                'header' => '<div class="date-label"><span class="date-label-text">Изменено</span></div>',
                'format' => ['datetime', 'php:d.m.Y H:i:s']
            ],
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, Field $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                }
            ],
        ],
    ]); ?>


</div>
