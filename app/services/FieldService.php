<?php

namespace app\services;

use Yii;
use app\models\{Field, FieldCategory};
use app\services\{
    CategoryService,
    LangService
};
use yii\db\Query;

class FieldService
{
    public static function getList($categoryId)
    {
        $fields = Field::find()
            ->join('LEFT JOIN', 'field_category', 'field_category.field_id = field.id')
            ->join('LEFT JOIN', 'lang', 'lang.id = field.lang_id')
            ->where(['field_category.category_id' => $categoryId])
            ->asArray()->all();
        return $fields;
    }

    public static function getListFilters($categoryId)
    {
        $fields = Field::find()
            ->join('LEFT JOIN', 'field_category', 'field_category.field_id = field.id')
            ->join('LEFT JOIN', 'lang', 'lang.id = field.lang_id')
            ->where(['field_category.category_id' => $categoryId])
            ->andWhere(['field.search' => 1])
            ->asArray()->all();

        // Add min|max values
        return $fields;
    }

    public static function deleteFieldFromCategory($field_id, $category_id)
    {
        var_dump($field_id);
        var_dump($category_id);

        $fieldCategoryModels = FieldCategory::find()->where(['field_id' => $field_id])->andWhere(['category_id' => $category_id]);
//        $fieldCategoryModel = $fieldCategoryModel[0];
//            $fieldCategoryModel->delete();
        foreach ($fieldCategoryModels as $model) {
            var_dump($model);
            $model->delete();
        }

        var_dump($fieldCategoryModels);
        die();
        $query = new Query();
//        ::deleteAll(['user_iduser' => $model->id]);
        $query->createCommand()
            ->delete('users', ['category_id' => $category_id], ['field_id' => $field_id])
            ->execute();
        // add conditions that should always apply here

    }
}
