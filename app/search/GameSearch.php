<?php

namespace app\search;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Game;

/**
 * GameSearch represents the model behind the search form of `app\models\Game`.
 */
class GameSearch extends Game
{
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'icon_id', 'background_id', 'lang_id', 'new'], 'integer'],
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
        $query = Game::find();

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
            'icon_id' => $this->icon_id,
            'background_id' => $this->background_id,
            'lang_id' => $this->lang_id,
            'new' => $this->new,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ]);

        $query->andFilterWhere(['like', 'seo_name', $this->seo_name]);

        return $dataProvider;
    }
}
