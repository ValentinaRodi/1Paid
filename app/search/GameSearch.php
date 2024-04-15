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
            [['id', 'icon_id', 'background_id', 'lang_id', 'new'], 'integer'],
            [['seo_name', 'created_at', 'updated_at', 'lang.russian', 'lang.english'], 'safe'],
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

        $dataProvider->sort->attributes['lang.russian'] = [
              'asc' => ['lang.russian' => SORT_ASC],
              'desc' => ['lang.russian' => SORT_DESC],
        ];
        $dataProvider->sort->attributes['lang.russian'] = [
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
//echo '<pre>' . print_r($this->created_at, true) . '</pre>';die();
        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
            'new' => $this->new,
//            'game.created_at' => $this->created_at,
//            'game.updated_at' => $this->updated_at,
        ]);

        $query->andFilterWhere(['like', 'seo_name', $this->seo_name])
              ->andFilterWhere([
                'like',
                'game.created_at',
                 $this->getAttribute('created_at')
            ])
              ->andFilterWhere([
                'like',
                'game.updated_at',
                 $this->getAttribute('updated_at')
            ])
              ->andFilterWhere([
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
