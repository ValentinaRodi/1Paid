<?php

use yii\grid\ActionColumn;
use yii\grid\GridView;
use yii\helpers\Html;
use yii\helpers\Url;

/** @var yii\web\View $this */
/** @var app\models\Category $model */

$this->title = 'Обновить: ' . $model->seo_name;
$this->params['breadcrumbs'][] = ['label' => 'Categories', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->seo_name, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
$category_id = $model['id'];
?>
<div class="category-update">
    <div>

        <?= $this->render('_form', [
            'model' => $model,
            'games' => $games,
        ]) ?>
    </div>
</div>
<div class="field-grid">
    <?= Html::beginForm(['operator/field/checkbox-delete'], 'post'); ?>
    <?= Html::submitButton('Удалить выбранные', ['class' => 'btn btn-danger mt-3 mb-3', 'data-confirm' =>
        Yii::t('yii', 'Вы уверены, что хотите удалить данные записи? Восстановить их будет нельзя.'),]);
    ?>
    <?= Html::a('Добавить поля', ['/operator/category/add-fields?id=' . $model['id']], ['class' => 'btn btn-success mt-3 mb-3', 'data-confirm']); ?>
    <?= Html::input('hidden', 'id', $model['id']); ?>
    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\CheckboxColumn'],

            'seo_name',
            'lang.russian',
            'lang.english',
            [
                'attribute' => 'type',
                'filter' => [
                    'options' => 'Опция',
                    'string' => 'Строка',
                    'integer' => 'Целое',
                    'float' => 'Дробное',
                    'file' => 'Файл'
                    ],
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
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, $model, $key, $index, $column) use($category_id) {
                    if ($action === 'delete') {
                        return '/operator/category/unlink?id=' . $category_id . '&field_id=' . $key;
                    }
//                    if ($action == 'delete') {
//                        return '/operator/category/' . $action . '_field?id=' . $model['field_id'];
//
//                    }
                    if ($action == 'view' || $action == 'update') {
                        return '/operator/field/' . $action . '?id=' . $model['id'];

                    }
                }
            ],
        ],
    ]); ?>
    <?= Html::endForm(); ?>

</div>

