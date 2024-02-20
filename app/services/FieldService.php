<?php

namespace app\services;

use Yii;
use app\models\{
    Field
};
use app\services\{
    CategoryService,
    LangService
};

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

}
