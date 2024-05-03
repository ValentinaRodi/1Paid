<?php

use app\models\Group;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\search\GroupSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Группы';
$this->params['breadcrumbs'][] = $this->title;
$template = '{view}';
?>
<div class="group-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <?php if ($editing) { ?>
        <?php $template = '{view}{update}{delete}'; ?>

        <p>
            <?= Html::a('Добавить группу', ['create'], ['class' => 'btn btn-success']) ?>
        </p>

    <?php } ?>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'lang.russian',
            'lang.english',
            [
                'class' => ActionColumn::className(),
                'template' => $template,
                'urlCreator' => function ($action, Group $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                }
            ],
        ],
    ]); ?>


</div>
