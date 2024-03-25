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

    <?= $form->field($model, 'icon_id')->textInput() ?>

    <?= $form->field($model, 'background_id')->textInput() ?>

    <?= $form->field($model, 'lang_id')->textInput() ?>

    <?= $form->field($model, 'new')->textInput() ?>

    <?= $form->field($model, 'created_at')->textInput(['readonly' => true]) ?>

    <?= $form->field($model, 'updated_at')->textInput(['readonly' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>
    <div class="game-img-upload">

        <?php $formSave = ActiveForm::begin() ?>

        <?= $formSave->field($file_icon, 'imageFile')->fileInput() ?>


        <button class="btn">Сохранить иконку</button>

        <?php ActiveForm::end() ?>
    </div>
    <div class="game-img-upload">

        <?php $formSaveBG = ActiveForm::begin() ?>

        <?= $formSaveBG->field($file_background, 'background')->fileInput() ?>


        <button class="btn">Сохранить задний фон</button>

        <?php ActiveForm::end() ?>
    </div>
</div>
