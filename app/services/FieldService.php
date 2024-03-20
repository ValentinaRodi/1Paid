<?php

namespace app\services;

use Yii;
use app\models\{Field};
use app\services\{
    CategoryService,
    LangService
};
use yii\base\ErrorException;
use yii\db\Exception;
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
        try {
            $sql = 'DELETE FROM field_category
                    WHERE field_id = ' . $field_id . ' and category_id = ' . $category_id;

            \Yii::$app->db->createCommand($sql)->execute();
            return [
                'success' => true
            ];
        } catch (ErrorException $error) {
            return [
                'success' => false,
                'errors' => $error
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'errors' => $e
            ];
        }

//
//        $fieldCategoryModels = FieldCategory::find()->where(['field_id' => $field_id])->andWhere(['category_id' => $category_id])->one();
////        $fieldCategoryModel = $fieldCategoryModel[0];
////            $fieldCategoryModel->delete();
//
//        var_dump($fieldCategoryModels);
//        die();
//        foreach ($fieldCategoryModels as $model) {
//            var_dump($model);
//            $model->delete();
//        }
//
//        var_dump($fieldCategoryModels);
//        die();
//        $query = new Query();
////        ::deleteAll(['user_iduser' => $model->id]);
//        $query->createCommand()
//            ->delete('users', ['category_id' => $category_id], ['field_id' => $field_id])
//            ->execute();
        // add conditions that should always apply here

    }

    public static function addFieldsToCategory($field_array, $category_id)
    {
        try {

            $existing_fields_id_query = Field::find()
                ->addSelect(['field_category.field_id'])
                ->join('LEFT JOIN', 'field_category', 'field_category.field_id = field.id')
                ->where(['field_category.category_id' => $category_id])->asArray()->all();

            foreach ($field_array as $field_id) {
                $found_existing_id = false;
                foreach ($existing_fields_id_query as $existing_field_id) {

                    if ($existing_field_id['field_id'] == (int)$field_id) {
                        echo 'true';
                        $found_existing_id = true;
                        break;
                    }
                }
                if (!$found_existing_id) {
                    $sql = 'INSERT INTO field_category (field_id, category_id) VALUES (' . $field_id . ',' . $category_id . ');';

                    \Yii::$app->db->createCommand($sql)->execute();
                    // запрос к базе, выборка существующих филдов
                    // сравнение с выбранными id, игнор повторяющихся
                }
            }
            return [
                'success' => true
            ];
        } catch (ErrorException $error) {
            return [
                'success' => false,
                'errors' => $error
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'errors' => $e
            ];
        }
    }

}
