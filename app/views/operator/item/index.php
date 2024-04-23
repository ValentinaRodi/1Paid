<?php

use app\models\Item;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\search\ItemSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Товары';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="item-index">

    <?php /*if ($editing) { ?>

        <p>
            <?= Html::a('Создать товар', ['create'], ['class' => 'btn btn-success']) ?>
        </p>

    <?php } */?>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'seo_name',
            [
                'attribute' => 'category.seo_name',
                'label' => 'SEO категории'
            ],
            'lang.russian',
            'lang.english',
            'user.name',
            //'icon_id',
            [
                'attribute' => 'new',
                'filter' => [
                    '0' => 'Нет',
                    '1' => 'Да'
                    ],
                'value' => function ($model){
                    switch ($model->new) {
                        case '0' : return 'Нет';
                        case '1' : return 'Да';
                    }
                },
            ],
            'sort',
            'price',
            'rank',
            //'description:ntext',
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
                'template' => '{view}',
                'urlCreator' => function ($action, Item $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                }
            ],
        ],
    ]); ?>


</div>
