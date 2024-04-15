<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Field $model */

$this->title = 'Update Field: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Fields', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->seo_name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Изменить';
?>
<div class="field-update">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
