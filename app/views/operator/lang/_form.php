<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\Lang $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="lang-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'russian')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'english')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'created_at')->textInput(['readonly' => true]) ?>

    <?= $form->field($model, 'updated_at')->textInput(['readonly' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
