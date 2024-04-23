<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\Category $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="category-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'game_id')->dropDownList($games)->label('Игра*') ?>

    <?= $form->field($model->lang, 'russian')->textInput()->label('Название на русском*') ?>
    <?= $form->field($model->lang, 'english')->textInput() ?>

    <?= $form->field($model, 'seo_name')->textInput(['maxlength' => true])->label('SEO метка*') ?>

    <?= $form->field($model, 'sort')->textInput() ?>

    <?= $form->field($model, 'created_at')->textInput(['readonly' => true]) ?>

    <?= $form->field($model, 'updated_at')->textInput(['readonly' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton('Сохранить', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
