<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/** @var yii\web\View $this */
/** @var app\models\Field $model */

$this->title = $model->seo_name;
$this->params['breadcrumbs'][] = ['label' => 'Поля', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
\yii\web\YiiAsset::register($this);
//echo '<pre>' . print_r($model->lang, true) . '</pre>';die();

?>
<div class="field-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <?php if ($editing) { ?>

    <p>
        <?= Html::a('Обновить', ['update', 'id' => $model->id], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Удалить', ['delete', 'id' => $model->id], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Вы уверены что хотите удалить поле?',
                'method' => 'post',
            ],
        ]) ?>
    </p>
    <?php } ?>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'id',
            'seo_name',
            'lang.russian',
            'lang.english',
            [
                'attribute' => 'type',
                'value' => function ($model){
                    switch ($model->type) {
                        case 'options' : return 'Опция';
                        case 'string' : return 'Строка';
                        case 'integer' : return 'Целое';
                        case 'float' : return 'Дробное';
                        case 'file' : return 'Файл';
                    }
                },
            ],
            'value',
            [
                'attribute' => 'search',
                'filter' => [
                    '0' => 'Нет',
                    '1' => 'Да'
                    ],
                'value' => function ($model){
                    switch ($model->search) {
                        case '0' : return 'Нет';
                        case '1' : return 'Да';
                    }
                },
            ],
            [
                'attribute' => 'created_at',
                'format' => ['datetime', 'php:d.m.Y H:i:s']
            ],
            [
                'attribute' => 'updated_at',
                'format' => ['datetime', 'php:d.m.Y H:i:s']
            ],
        ],
    ]) ?>

</div>
