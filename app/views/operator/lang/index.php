<?php

use app\models\Lang;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\search\LangSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Языки';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="lang-index">

    <?php if ($editing) { ?>

        <p>
            <?= Html::a('Создать языковую запись', ['create'], ['class' => 'btn btn-success']) ?>
        </p>

    <?php } ?>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'russian',
            'english',
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
                'urlCreator' => function ($action, Lang $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                }
            ],
        ],
    ]); ?>


</div>
