<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Lang $model */

$this->title = $model->russian;
$this->params['breadcrumbs'][] = ['label' => 'Языки', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Обновить';
?>
<div class="lang-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
