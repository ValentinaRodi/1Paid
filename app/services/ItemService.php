<?php

namespace app\services;

use Yii;
use app\models\{Field, File, Item, Lang};
use app\services\{
//CategoryService,
    FileService,
    LangService,
    UserService
};
use yii\base\ErrorException;
use yii\db\Exception;
use yii\db\Query;

class ItemService
{
    public static function getList($categoryId)
    {
        if (isset($categoryId) && !empty($categoryId)) {
            $items = Item::find()
                ->where(['category_id' => $categoryId])
                ->orderBy(['sort' => SORT_DESC])
                ->asArray()->all();
            return self::formatItems($items);
        }
        return false;
    }

    public static function formatItems($items)
    {
        if (isset($items) && !empty($items) && is_array($items)) {
            $langsIds = [];
            $iconsIds = [];
//echo '<pre>' . print_r($items, true) . '</pre>';die();
            foreach ($items as $item) {
                $langsIds[] = $item['lang_id'];
                $iconsIds[] = $item['icon_id'];
                $usersIds[] = $item['user_id'];
            }
            $langs = LangService::getLangs($langsIds);
            $files = FileService::getFiles($iconsIds);
            $usersNames = UserService::getUsernames($usersIds);
            foreach ($items as $key => $item) {
                foreach ($files as $file) {
                    if ($item['icon_id'] == $file['id']) {
                        $items[$key]['icon'] = $file['fileName'];
                        unset($items[$key]['icon_id']);
                    }
                }
                foreach ($langs as $lang) {
                    if ($item['lang_id'] == $lang['id']) {
                        $items[$key]['name'] = $lang['russian'];
                        unset($items[$key]['lang_id']);
                    }
                }
                foreach ($usersNames as $user) {
                    if ($item['user_id'] == $user['id']) {
                        $items[$key]['username'] = $user['name'];
                    }
                }
            }

            return $items;
        }
        return [];
    }

    public static function get($params)
    {
        $gameId = GameService::getIDbySEO($params['game']);
        $categoryId = CategoryService::getIDbySEO($gameId, $params['category']);
        if (isset($categoryId) && !empty($categoryId)) {
            $items = Item::find()
                ->where([
                    'category_id' => $categoryId,
                    'id' => $params['id'],
                    'seo_name' => $params['item'],
                ])
                ->orderBy(['sort' => SORT_DESC])
                ->asArray()->one();
            return self::formatItems([$items])[0];
        }
        return false;
    }

    public static function getItemsByParams($params)
    {
        $items_id = [];
        try {
            foreach ($params['fields'] as $seo_name => $value) {
                $query = new Query;

                if (gettype($value) == 'array') {
//                $sql = 'SELECT field.id, field.seo_name, field.lang_id, field.value, field_data.item_id, field_data.value FROM `field`
//                    LEFT join field_data on field.id = field_data.field_id
//                    where (field.seo_name = "' . $seo_name . '")  and field_data.value >= '. $value['min'] .' AND field_data.value <= '.$value['max'] .';';

                    $query->select(['field_data.item_id'])
                        ->from('field')
                        ->join('LEFT JOIN', 'field_data', 'field_data.field_id = field.id')
                        ->where(['field.seo_name' => $seo_name])
                        ->andWhere('field_data.value >= ' . $value['min'])
                        ->andWhere('field_data.value <= ' . $value['max'])
                        ->andWhere(' field.search = 1');


                } else {
//                $sql = 'SELECT field.id, field.seo_name, field.lang_id, field.value, field_data.item_id, field_data.value FROM `field`
//                    LEFT join field_data on field.id = field_data.field_id
//                    WHERE field_data.value like "%'. $value .'%";';
                    $query->select(['field_data.item_id'])
                        ->from('field')
                        ->join('LEFT JOIN', 'field_data', 'field_data.field_id = field.id')
                        ->where(['like', 'field_data.value', $value])
                        ->andWhere(' field.search = 1');


                }
                $command = $query->createCommand();
                $fields_arr = $command->queryAll();
                foreach ($fields_arr as $item_id) {
                    $items_id[] = $item_id['item_id'];
                }
            }

            return [
                'success' => true,
                'items_array' => self::getItems($items_id)
            ];

        } catch (ErrorException $error) {
            var_dump($error);
            return [
                'success' => false,
                'errors' => $error
            ];
        }
    }

    public static function getItems($items)
    {

        $query = new Query();
        $query->select(['item.id', 'item.seo_name', 'item.category_id', 'item.user_id', 'item.icon_id',
            'item.new', 'item.sort', 'item.price', 'item.rank', 'item.description',
            'item.created_at', 'item.updated_at', 'lang.russian', 'lang.english',
            'category.game_id'])
            ->from('item')
            ->join('LEFT JOIN', 'lang', 'item.lang_id = lang.id')
            ->join('LEFT JOIN', 'category', 'item.category_id = category.id')
            ->where(['in', 'item.id', $items]);
        $command = $query->createCommand();
        return $command->queryAll();
    }

    public static function saveItem($item_data)
    {
        $gameId = GameService::getIDbySEO($item_data['game']);
        $categoryId = CategoryService::getIDbySEO($gameId, $item_data['category']);

        if (isset($categoryId) && !empty($categoryId) && !empty($item_data['items'])) {
            $fields_seo_names = null;
            $fields_seo_names_n_values = null;

            $title_english = self::translit($item_data['title']);
            $title_russian = $item_data['title'];

            foreach ($item_data['items'] as $item_fields) {
                foreach ($item_fields as $field_seo_name => $field_value) {
                    $fields_seo_names[] = $field_seo_name;
                    $fields_seo_names_n_values[$field_seo_name] = $field_value;
                }
            }
            $lang = new Lang();
            $lang->english = $title_english;
            $lang->russian = $title_russian;
            $lang->created_at = date('Y-m-d H:i:s');
            $lang->updated_at = date('Y-m-d H:i:s');
            $lang->save();

            if ($lang['_errors']) {
                return [
                    'success' => false,
                    'errors' => $lang['_errors']
                ];

            }

            $item = new Item();
            $item->seo_name = $title_english;
            $item->category_id = $categoryId;
            $item->lang_id = $lang->id;
//            $item->user_id= \Yii::$app->user->id;
            $item->user_id = 1;
            $item->icon_id = 0;
            $item->new = 1;
            $item->sort = 0;
            $item->price = $item_data['price'];
            $item->rank = 0;
            $item->description = $item_data['about'];
            $item->save();

            if ($item['_errors']) {
                $lang->delete();
                return [
                    'success' => false,
                    'errors' => $item['_errors']
                ];
            }

            $fields = Field::find()
                ->where(['in', 'seo_name', $fields_seo_names])
                ->asArray()->all();
            $fields_from_db = [];
            $fields_from_db_seo_name_id = [];
            foreach ($fields as $field) {
                $fields_from_db[$field['id']] = $field['seo_name'];
                $fields_from_db_seo_name_id [$field['seo_name']] = $field['id'];
            }

            $not_valid_field_seo_names = array_diff($fields_seo_names, $fields_from_db);

            foreach ($fields_seo_names_n_values as $seo_name => $value) {
                $error = false;

                if (!empty($fields_from_db)) {
                    foreach ($not_valid_field_seo_names as $not_valid_seo_name) {
                        if ($seo_name == $not_valid_seo_name) {
                            $error = true;
                        }
                    }
                    if (!$error) {

                        try {

                            $sql = 'INSERT INTO field_data (field_id, item_id, value) VALUES 
                                 (' . $fields_from_db_seo_name_id[$seo_name] . ',' . $item->id . ', "' . $value . '");';

                            \Yii::$app->db->createCommand($sql)->execute();

                            return [
                                'success' => true,
                                'item_id' => $item->id
                            ];
                        } catch (Exception $e) {
                            return [
                                'success' => false,
                                'errors' => $e

                            ];
                        }
                    }
                }
            }
        }
        return [
            'success' => false,
            'errors' => 'item save error'
        ];
    }

    /**
     * Функиция транслитерации
     * @param string
     * @return string
     */
    public static function translit($st): string
    {
        $st = mb_strtolower($st, "utf-8");
        $st = str_replace([
            '?', '!', '.', ',', ':', ';', '*', '(', ')', '{', '}', '[', ']', '%', '#', '№', '@', '$', '^', '-', '+', '/', '\\', '=', '|', '"', '\'',
            'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'з', 'и', 'й', 'к',
            'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х',
            'ъ', 'ы', 'э', ' ', 'ж', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я'
        ], [
            '_', '_', '.', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '_',
            'a', 'b', 'v', 'g', 'd', 'e', 'e', 'z', 'i', 'y', 'k',
            'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'h',
            'j', 'i', 'e', '_', 'zh', 'ts', 'ch', 'sh', 'shch',
            '', 'yu', 'ya'
        ], $st);
        $st = preg_replace("/[^a-z0-9_.]/", "", $st);
        $st = trim($st, '_');

        $prev_st = '';
        do {
            $prev_st = $st;
            $st = preg_replace("/_[a-z0-9]_/", "_", $st);
        } while ($st != $prev_st);

        $st = preg_replace("/_{2,}/", "_", $st);
        return $st;
    }
}
