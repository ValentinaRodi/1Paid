<?php

namespace app\search;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Group;

/**
 * GroupSearch represents the model behind the search form of `app\models\Group`.
 */
class GroupSearch extends Group
{
    public function attributes()
    {
        // add related fields to searchable attributes
        return array_merge(parent::attributes(), ['lang.russian', 'lang.english']);
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'lang_id'], 'integer'],
            [['lang.russian', 'lang.english'], 'safe'],

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
        $query = Group::find();

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



        $query->joinWith(['lang']);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
//            'lang_id' => $this->lang_id,
        ]);

        $query->andFilterWhere([
            'like',
            'lang.russian',
            $this->getAttribute('lang.russian')
        ])
            ->andFilterWhere([
                'like',
                'lang.english',
                $this->getAttribute('lang.english')
            ]);

        return $dataProvider;
    }
}
