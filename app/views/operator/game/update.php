<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Game $model */
/** @var app\models\File $file_icon */
/** @var app\models\File $file_background */

$this->title = 'Обновить игру: ' . $model->seo_name;
$this->params['breadcrumbs'][] = ['label' => 'Игры', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->seo_name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="game-update">

    <?= $this->render('_form', [
        'model' => $model,
        'file' => $file,
    ]) ?>

</div>
