<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\web\Response;
use yii\filters\VerbFilter;
use app\services\{
    CategoryService,
    GameService,
    ItemService,
    FieldService
};
use app\forms\{
    FieldForm
};

class FieldController extends Controller
{
    public function actionGetList()
    {
        return $this->asJson(
            FieldService::getList(Yii::$app->request->get('category'))
        );
    }

    public function actionGetListFilters()
    {
        return $this->asJson(
            FieldService::getListFilters(Yii::$app->request->get('category'))
        );
    }

    public function actionPost()
    {
        $fieldForm = new FieldForm();
        foreach (Yii::$app->request->post() as $key => $value) {
            $fieldForm->{$key} = $value;
        }
        if ($fieldForm->validate()) {
            return $this->asJson([
                'success' => true,
                'field_id' => $fieldForm->save()
            ]);
        } else {
            return $this->asJson([
                'success' => false,
                'errors' => $fieldForm->errors
            ]);
        }        
    }
}
