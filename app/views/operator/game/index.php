<?php

use app\models\Game;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\search\GameSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Игры';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="game-index">

    <?php if ($editing) { ?>

        <p>
            <?= Html::a('Добавить игру', ['create'], ['class' => 'btn btn-success']) ?>
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
//            'file.hashed_name',
//            'background_id',
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
            [
                'attribute' => 'created_at',
                'header' => '<div class="date-label"><span class="date-label-text">Создано</span></div>',
                'format' => ['datetime', 'php:d.m.Y H:i:s']
            ],
            [
                'attribute' => 'updated_at',
                'format' => ['datetime', 'php:d.m.Y H:i:s']
            ],
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, Game $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                }
            ],
        ],
    ]); ?>

</div>
