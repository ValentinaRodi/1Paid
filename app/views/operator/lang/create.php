<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Lang $model */

$this->title = 'Создать языковую запись';
$this->params['breadcrumbs'][] = ['label' => 'Язык', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="lang-create">

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
