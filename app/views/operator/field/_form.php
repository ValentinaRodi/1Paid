<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\Field $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="field-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'seo_name')->textInput(['maxlength' => true])->label('SEO метка*') ?>

    <?= $form->field($model->lang, 'russian')->textInput()->label('Название на русском*') ?>
    <?= $form->field($model->lang, 'english')->textInput() ?>

    <?= $form->field($model, 'type')->dropDownList([
        'options' => 'Опция',
        'string' => 'Строка',
        'integer' => 'Целое',
        'float' => 'Дробное',
        'file' => 'Файл',
    ]) ?>

    <?= $form->field($model, 'value')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'search')->dropDownList([
        0 => 'Нет',
        1 => 'Да',
    ]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
