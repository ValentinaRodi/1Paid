<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Field $model */

$this->title = 'Обновить поле: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Поля', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->seo_name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Обновить';
?>
<div class="field-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
