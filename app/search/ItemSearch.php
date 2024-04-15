<?php

namespace app\search;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Item;

/**
 * ItemSearch represents the model behind the search form of `app\models\Item`.
 */
class ItemSearch extends Item
{
    public function attributes()
    {
        // add related fields to searchable attributes
        return array_merge(parent::attributes(), ['lang.russian', 'lang.english', 'category.seo_name', 'user.name']);
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'category_id', 'lang_id', 'user_id', 'icon_id', 'new', 'sort'], 'integer'],
            [['seo_name', 'description', 'created_at', 'updated_at', 'lang.russian', 'lang.english', 'category.seo_name', 'user.name'], 'safe'],
            [['price', 'rank'], 'number'],
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
        $query = Item::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $dataProvider->sort->attributes['lang.russian'] = [
              'asc' => ['lang.russian' => SORT_ASC],
              'desc' => ['lang.russian' => SORT_DESC],
        ];
        $dataProvider->sort->attributes['lang.english'] = [
              'asc' => ['lang.english' => SORT_ASC],
              'desc' => ['lang.english' => SORT_DESC],
        ];
        $dataProvider->sort->attributes['category.seo_name'] = [
              'asc' => ['category.seo_name' => SORT_ASC],
              'desc' => ['category.seo_name' => SORT_DESC],
        ];
        $dataProvider->sort->attributes['user.name'] = [
              'asc' => ['user.name' => SORT_ASC],
              'desc' => ['user.seo_name' => SORT_DESC],
        ];
        $query->joinWith(['lang']);
        $query->joinWith(['category']);
        $query->joinWith(['user']);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
            'category_id' => $this->category_id,
            'lang_id' => $this->lang_id,
            'user_id' => $this->user_id,
            'icon_id' => $this->icon_id,
            'new' => $this->new,
            'sort' => $this->sort,
            'price' => $this->price,
            'rank' => $this->rank,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ]);

        $query->andFilterWhere(['like', 'item.seo_name', $this->seo_name])
            ->andFilterWhere(['like', 'description', $this->description])
            ->andFilterWhere([
                'like',
                'lang.russian',
                 $this->getAttribute('lang.russian')
            ])
            ->andFilterWhere([
                'like',
                'lang.english',
                 $this->getAttribute('lang.english')
            ])
            ->andFilterWhere([
                'like',
                'user.name',
                 $this->getAttribute('user.name')
            ])
            ->andFilterWhere([
                'like',
                'category.seo_name',
                 $this->getAttribute('category.seo_name')
            ]);

        return $dataProvider;
    }
}
