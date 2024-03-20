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
    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'lang_id', 'search'], 'integer'],
            [['seo_name', 'type', 'value', 'created_at', 'updated_at'], 'safe'],
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
        $query = Field::find();


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
            'lang_id' => $this->lang_id,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'search' => $this->search,
        ]);

        $query->andFilterWhere(['like', 'seo_name', $this->seo_name])
            ->andFilterWhere(['like', 'type', $this->type])
            ->andFilterWhere(['like', 'value', $this->value]);

        return $dataProvider;
    }

    public static function searchNewFields(){
//        $query = Field::find();
//        $query->asArray()->all();
//        var_dump($query);
//        $query2 = Field::find()
//            ->addSelect(['field.id'])
//            ->join('LEFT JOIN', 'field_category', 'field_category.field_id = field.id')
//            ->join('LEFT JOIN', 'category', 'category.id = field_category.category_id')
//            ->where(['field_category.category_id' => 5])->asArray()->all();
//        // add conditions that should always apply here
//        var_dump($query2);
    }
}