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
                ->where(['field_category.category_id' => $categoryId])
                ->asArray()->all();
        return $fields;
    }
}
