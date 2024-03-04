<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\search\ItemSearch $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="item-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'seo_name') ?>

    <?= $form->field($model, 'category_id') ?>

    <?= $form->field($model, 'lang_id') ?>

    <?= $form->field($model, 'user_id') ?>

    <?php // echo $form->field($model, 'icon_id') ?>

    <?php // echo $form->field($model, 'new') ?>

    <?php // echo $form->field($model, 'sort') ?>

    <?php // echo $form->field($model, 'price') ?>

    <?php // echo $form->field($model, 'rank') ?>

    <?php // echo $form->field($model, 'description') ?>

    <?php // echo $form->field($model, 'created_at') ?>

    <?php // echo $form->field($model, 'updated_at') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
