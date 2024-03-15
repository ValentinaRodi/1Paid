<?php

use yii\grid\ActionColumn;
use yii\grid\GridView;
use yii\helpers\Html;
use yii\helpers\Url;

/** @var yii\web\View $this */
/** @var app\models\Category $model */

$this->title = 'Update Category: ' . $model->id;
$this->params['breadcrumbs'][] = ['label' => 'Categories', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->id, 'url' => ['view', 'id' => $model->id]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="category-update">
    <div>
        <h1><?= Html::encode($this->title) ?></h1>

        <?= $this->render('_form', [
            'model' => $model,
        ]) ?>
    </div>
</div>
<div class="field-grid">
    <?=Html::beginForm(['operator/field/checkbox-delete'],'post');?>
    <?=Html::submitButton('Удалить выбранные', ['class' => 'btn btn-danger mt-3 mb-3','data-confirm' =>
        Yii::t('yii', 'Вы уверены, что хотите удалить данные записи? Восстановить их будет нельзя.'),]);
    ?>
    <?=  Html::input('hidden', 'category_id', $model['id']); ?>
    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\CheckboxColumn'],

            'id',
            'seo_name',
            'lang_id',
            'type',
            'created_at',
            'updated_at',
            'search',
            [
                'class' => ActionColumn::className(),
                'urlCreator' => function ($action, $model, $key, $index, $column) {
                    return '/operator/field/' . $action . '?id=' . $model['id'];
//                    return Url::toRoute([$action, 'id' => $model['id']]);
                }
            ],
        ],
    ]); ?>
    <?= Html::endForm();?>

</div>

