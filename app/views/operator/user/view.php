<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\User $model */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Пользователи', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
?>
<div class="user-view">

    <?php if ($editing) { ?>

        <p>
            <?= Html::a('Update', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
            <?= Html::a('Delete', ['delete', 'id' => $model->id], [
                'class' => 'btn btn-danger',
                'data' => [
                    'confirm' => 'Вы хотите удали пользователя?',
                    'method' => 'post',
                ],
            ]) ?>
        </p>

    <?php } ?>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'name',
            'email:email',
            'email_verified:email',
            'email_verified_at:email',
            'secret_word',
            'balance',
            'bonus',
            'status',
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
