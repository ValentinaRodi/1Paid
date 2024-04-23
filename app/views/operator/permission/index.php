<?php

use app\models\Permission;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\search\PermissionSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Permissions';
$this->params['breadcrumbs'][] = $this->title;
$jsOptions = ['position' => \yii\web\View::POS_HEAD];
?>
<div class="permission-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <?php if ($editing) { ?>

        <p>
            <?= Html::a('Create Permission', ['create'], ['class' => 'btn btn-success']) ?>
        </p>

    <?php } ?>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>
    <?php ?>
    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'id',
            'lang.russian',
            'lang.english',
            'lang.created_at',
            'lang.updated_at',

            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, $model, $key, $index, $column) {

                    return Url::toRoute([$action, 'id' => $model['id']]);
                }
            ],
        ],
    ]); ?>


</div>
