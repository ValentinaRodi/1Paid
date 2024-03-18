<?php

namespace app\search;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Category;
use yii\db\Query;

/**
 * CategorySearch represents the model behind the search form of `app\models\Category`.
 */
class CategorySearch extends Category
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'game_id', 'lang_id', 'sort'], 'integer'],
            [['seo_name', 'created_at', 'updated_at'], 'safe'],
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
//        $query = Category::find();

//        'SELECT lang.russian, lang.english, category.seo_name, category.sort, category.created_at, category.updated_at
//FROM `category`
//LEFT JOIN game on category.game_id = game.id
//LEFT JOIN lang on lang.id = game.lang_id
//WHERE category.game_id = game.id;'

        $query = new Query;
        // compose the query
        $query->select(['category.id', 'category.seo_name', 'category.lang_id', 'category.sort', 'lang.russian as game_name'])
            ->from('category')
            ->join('LEFT JOIN', 'game', 'category.game_id = game.id')
            ->join('LEFT JOIN', 'lang', 'lang.id = game.lang_id')
            ->where('category.game_id = game.id');

        // add conditions that should always apply here

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
            'category.id' => $this->id,
            'game_name' => $this->game_id,
            'category.lang_id' => $this->lang_id,
            'category.sort' => $this->sort,
            'category.created_at' => $this->created_at,
            'category.updated_at' => $this->updated_at,
        ]);

        $query->andFilterWhere(['like', 'category.seo_name', $this->seo_name]);

        return $dataProvider;
    }

    public function fieldSearch($category_id)
    {

        $query = new Query();
        $query->select(['field_category.field_id', 'field_category.category_id',
            'field.id', 'field.seo_name', 'field.lang_id',
            'field.type', 'field.created_at', 'field.updated_at', 'field.search'])
            ->from('field_category')
            ->join('LEFT JOIN', 'field', 'field.id = field_category.field_id')
            ->where(['field_category.category_id' => $category_id]);
        // add conditions that should always apply here

        $row = $query->all();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

//        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
//        $query->andFilterWhere([
//            'category.id' => $row[],
//            'game_name' => $this->game_id,
//            'category.lang_id' => $this->lang_id,
//            'category.sort' => $this->sort,
//            'category.created_at' => $this->created_at,
//            'category.updated_at' => $this->updated_at,
//        ]);
//
//        $query->andFilterWhere(['like', 'category.seo_name', $this->seo_name]);

        return $dataProvider;
    }
}
