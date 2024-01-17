<?php

namespace app\services;

use Yii;
use app\models\{
    Lang
};

class LangService
{
    public static function getLangs($ids)
    {
//echo '<pre>' . print_r($ids, true) . '</pre>';die();
        return Lang::find()
                ->where(['in', 'id', $ids])
                ->asArray()->all();
    }

    public static function setLangs($langs)
    {
        $model = new Lang();
        foreach ($langs as $key => $value) {
            $model->{$key} = $value;
        }
        $model->save();
        return $model->id;
    }
}
