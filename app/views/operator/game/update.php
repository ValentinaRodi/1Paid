<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Game $model */
/** @var app\models\File $file_icon */
/** @var app\models\File $file_background */

$this->title = 'Update Game: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Games', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="game-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
        'file_icon' => $file_icon,
        'file_background' => $file_background
    ]) ?>

</div>
