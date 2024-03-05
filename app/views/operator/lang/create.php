<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var app\models\Lang $model */

$this->title = 'Create Lang';
$this->params['breadcrumbs'][] = ['label' => 'Langs', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="lang-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
