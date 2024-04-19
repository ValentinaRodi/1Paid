<?php

//use app\models\Category;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\search\CategorySearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Категории';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="category-index">

    <?php if ($editing) { ?>
        <p>
            <?= Html::a('Создать категорию', ['create'], ['class' => 'btn btn-success']) ?>
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
                'attribute' => 'game.seo_name',
                'label' => 'SEO игры',
            ],
            'sort',
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
                'urlCreator' => function ($action, $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model['id']]);
                }
            ],
        ],
    ]); ?>


</div>
