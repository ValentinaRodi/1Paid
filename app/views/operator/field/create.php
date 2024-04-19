<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Field $model */

$this->title = 'Создать поле';
$this->params['breadcrumbs'][] = ['label' => 'Поля', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="field-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
