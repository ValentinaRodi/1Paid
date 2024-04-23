<?php

namespace app\search;

use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Field;

/**
 * FieldSearch represents the model behind the search form of `app\models\Field`.
 */
class FieldSearch extends Field
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
            [['id', 'lang_id', 'search'], 'integer'],
            [['seo_name', 'lang', 'type', 'value', 'created_at', 'updated_at', 'lang.russian', 'lang.english'], 'safe'],
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
    public function search($params, $add = false)
    {
        $query = Field::find();


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

        if ($add) {
            $query->joinWith(['categories']);
            $query->where(['<>', 'category.id', $params['id']])
                  ->orWhere(['is', 'category.id', null]);
        } else if (isset($params['id']) && !empty($params['id'])) {
            $query->joinWith(['categories']);
            $query->where(['category.id' => $params['id']]);
        }

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'id' => $this->id,
            'search' => $this->search,
        ]);

        $query->andFilterWhere(['like', 'seo_name', $this->seo_name])
            ->andFilterWhere(['like', 'type', $this->type])
            ->andFilterWhere(['like', 'value', $this->value])
            ->andFilterWhere([
                'like',
                'field.created_at',
                $this->getAttribute('created_at')
            ])
            ->andFilterWhere([
                'like',
                'field.updated_at',
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
