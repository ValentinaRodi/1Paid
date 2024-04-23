<?php

namespace app\search;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Permission;
use yii\db\Query;

/**
 * PermissionSearch represents the model behind the search form of `app\models\Permission`.
 */
class PermissionSearch extends Permission
{
    public $russian;
    public $english;
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'lang_id'], 'integer']

        ];
    }

    /**
     * {@inheritdoc}
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {

//        $query = new Query;
        // compose the query
//        $query->select(['permission.id', 'lang.russian', 'lang.english', 'lang.created_at', 'lang.updated_at'])
//            ->from('permission')
//            ->join('LEFT JOIN', 'lang', 'lang.id = permission.lang_id')
//            ->where('lang.id = permission.lang_id');
        $query = Permission::find()->joinWith(['lang']);

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'permission.id' => $this->id,
            'lang.russian' => $this->lang->russian,
            'lang.english' => $this->lang->english,
        ]);

        return $dataProvider;
    }
}
