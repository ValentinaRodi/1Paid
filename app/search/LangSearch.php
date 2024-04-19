<?php

namespace app\search;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Lang;

/**
 * LangSearch represents the model behind the search form of `app\models\Lang`.
 */
class LangSearch extends Lang
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id'], 'integer'],
            [['russian', 'english', 'created_at', 'updated_at'], 'safe'],
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
        $query = Lang::find();

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
            'id' => $this->id,
        ]);

        $query->andFilterWhere(['like', 'russian', $this->russian])
            ->andFilterWhere(['like', 'english', $this->english])
            ->andFilterWhere([
                'like',
                'lang.created_at',
                $this->getAttribute('created_at')
            ])
            ->andFilterWhere([
                'like',
                'lang.updated_at',
                $this->getAttribute('updated_at')
            ]);

        return $dataProvider;
    }
}
