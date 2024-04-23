<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\User $model */

$this->title = 'Создать пользователя';
$this->params['breadcrumbs'][] = ['label' => 'Пользователи', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="user-create">

    <?= $this->render('_form', [
        'model' => $model,
        'new' => true,
    ]) ?>

</div>
