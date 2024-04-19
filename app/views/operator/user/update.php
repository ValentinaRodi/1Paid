<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\User $model */
/** @var app\models\File $file */

$this->title = 'Обновить: ' . $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Пользователи', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Обновить';
$action = '/operator/user/update?id=' . $model->id;

?>
<div class="user-update">

    <?= $this->render('_form', [
        'model' => $model,
        'file' => $file

    ]) ?>
</div>
