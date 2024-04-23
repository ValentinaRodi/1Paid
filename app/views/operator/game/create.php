<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Game $model */

$this->title = 'Добавить игру';
$this->params['breadcrumbs'][] = ['label' => 'Игры', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="game-create">

    <?= $this->render('_form', [
        'model' => $model,
        'file' => $file,
    ]) ?>

</div>
