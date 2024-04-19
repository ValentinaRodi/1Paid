<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\Game $model */
/** @var app\models\File $file_icon */
/** @var app\models\File $file_background */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="game-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'seo_name')->textInput()->label('SEO метка*') ?>

    <?= $form->field($model->lang, 'russian')->textInput()->label('Название на русском*') ?>
    <?= $form->field($model->lang, 'english')->textInput() ?>

    <?= $form->field($model, 'new')->dropDownList([
        0 => 'Нет',
        1 => 'Да',
    ]) ?>
    
    <?= $form->field($file, 'icon')->fileInput(['class' => 'form-control'])->label('Иконка', ['class' => 'form-label']) ?>
    <?= $form->field($file, 'background')->fileInput(['class' => 'form-control'])->label('Фон', ['class' => 'form-label']) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
