<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\Game $model */
/** @var app\models\File $file */
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

        <?= $formSave->field($file, 'imageFile')->fileInput() ?>


        <button class="btn">Сохранить аватар</button>

        <?php ActiveForm::end() ?>
    </div>
</div>
