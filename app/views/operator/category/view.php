<?php

use yii\grid\GridView;
use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Category $model */

$this->title = $model->seo_name;
$this->params['breadcrumbs'][] = ['label' => 'Категории', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="category-view">

    <?php if ($editing) { ?>
    <p>
        <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
        <?php } ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
//            'id',
//            'game_id',
//            'lang_id',
            'seo_name',
            'lang.russian',
            'lang.english',
            [
                'attribute' => 'game.seo_name',
                'label' => 'SEO игры',
            ],
            'sort',
            [
                'attribute' => 'created_at',
                'format' => ['datetime', 'php:d.m.Y H:i:s']
            ],
            [
                'attribute' => 'updated_at',
                'format' => ['datetime', 'php:d.m.Y H:i:s']
            ],
        ],
    ]) ?>


</div>
<div>
    <?= GridView::widget([
        'dataProvider' => $dataFieldProvider,
        'filterModel' => $searchFieldModel,
        'columns' => [
            [
                'class' => 'yii\grid\SerialColumn',
            ],

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
                'format' => ['datetime', 'php:d.m.Y H:i:s']
            ],
            [
                'attribute' => 'updated_at',
                'format' => ['datetime', 'php:d.m.Y H:i:s']
            ],

        ],
    ]); ?>
</div>
