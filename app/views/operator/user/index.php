<?php

use app\models\User;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\grid\ActionColumn;
use yii\grid\GridView;

/** @var yii\web\View $this */
/** @var app\search\UserSearch $searchModel */
/** @var yii\data\ActiveDataProvider $dataProvider */

$this->title = 'Пользователи';
$this->params['breadcrumbs'][] = $this->title;
$this->registerLinkTag([
    'title' => 'style',
    'rel' => 'alternate',
    'type' => 'application/rss+xml',
    'href' => 'https://www.yiiframework.com/rss.xml/',
]);
?>
<div class="user-index">

    <?php if ($editing) { ?>

        <p>
            <?= Html::a('Создать пользователя', ['create'], ['class' => 'btn btn-success']) ?>
        </p>

    <?php } ?>

    <!--    --><?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'name',
            'email:email',
            'email_verified:email',
            'email_verified_at:email',
            //'password',
            //'secret_word',
            //'remember_token',
            //'created_at',
            //'updated_at',
            //'avatar',
            'balance',
            'bonus',
            [
                'attribute' => 'status',
                'filter' => [
                    '0' => 'Удален',
                    '1' => 'Забанен',
                    '9' => 'Неактивен',
                    '10' => 'Активен',
                    ],
                'value' => function ($model){
                    switch ($model->status) {
                        case '0' : return 'Удален';
                        case '1' : return 'Неактивен';
                        case '9' : return 'Неактивен';
                        case '10' : return 'Активен';
                    }
                },
            ],
            //'mailing',
            //'notify_sound',
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, User $model, $key, $index, $column) {
                    return Url::toRoute([$action, 'id' => $model->id]);
                }
            ],
        ],

    ]); ?>


</div>
