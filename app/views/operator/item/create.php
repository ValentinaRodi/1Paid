<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Item $model */

$this->title = 'Создать товар';
$this->params['breadcrumbs'][] = ['label' => 'Товары', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="item-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
