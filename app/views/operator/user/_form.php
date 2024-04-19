<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var app\models\User $model */
/** @var app\models\File $file */
/** @var yii\widgets\ActiveForm $form */
/*
    <?= $form->field($model, 'created_at')->textInput(['readonly' => true]) ?>

    <?= $form->field($model, 'updated_at')->textInput(['readonly' => true]) ?>
 */
?>

<div class="user-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'name')->textInput(['maxlength' => true])->label('Имя*') ?>
    <?php
//    echo '<pre>' . print_r($new, true) . '</pre>';die();
    if ($new == true) {
        echo $form->field($model, 'password')->textInput(['maxlength' => true])->label('Пароль*');
    }
    ?>

    <?= $form->field($model, 'email')->textInput(['maxlength' => true])->label('Почта*') ?>

    <?= $form->field($model, 'secret_word')->textInput(['maxlength' => true])->label('Секретное слово*') ?>

    <?= $form->field($model, 'balance')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'bonus')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton('Сохранить', ['class' => 'btn btn-success']) ?>
    </div>
    <?php ActiveForm::end(); ?>
    <?php /* $formSave = ActiveForm::begin() ?>
    <div class="avatar-upload">


        <?= $formSave->field($file, 'imageFile')->fileInput() ?>


        <button class="btn">Сохранить аватар</button>

    </div>
    <?php ActiveForm::end()*/ ?>
</div>
