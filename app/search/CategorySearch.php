<?php

namespace app\search;

use app\models\Field;
//use app\models\FieldCategory;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\models\Category;

/**
 * CategorySearch represents the model behind the search form of `app\models\Category`.
 */
class CategorySearch extends Category
{
    public function attributes()
    {
        // add related fields to searchable attributes
        return array_merge(parent::attributes(), ['lang.russian', 'lang.english', 'game.seo_name']);
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['id', 'game_id', 'lang_id', 'sort'], 'integer'],
            [['seo_name', 'created_at', 'updated_at', 'lang.russian', 'lang.english', 'game.seo_name'], 'safe'],
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
        $query = Category::find();

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
        $query->joinWith(['game']);

        $this->load($params);

        if (!$this->validate()) {
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'sort' => $this->sort,
        ]);

        $query->andFilterWhere(['like', 'seo_name', $this->seo_name])
              ->andFilterWhere([
                'like',
                'category.created_at',
                 $this->getAttribute('created_at')
            ])
              ->andFilterWhere([
                'like',
                'category.updated_at',
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
            ])
              ->andFilterWhere([
                'like',
                'game.seo_name',
                 $this->getAttribute('game.seo_name')
            ]);

        return $dataProvider;
    }

    public function fieldSearch($category_id)
    {

        $query = Field::find()
            ->addSelect(['field.*', 'lang.english', 'lang.russian'])
            ->join('LEFT JOIN', 'field_category', 'field_category.field_id = field.id')
            ->join('LEFT JOIN', 'category', 'category.id = field_category.category_id')
            ->join('LEFT JOIN', 'lang', 'lang.id = field.lang_id')
            ->where(['field_category.category_id' => $category_id]);
        $query->asArray()->all();

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load([]);

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
