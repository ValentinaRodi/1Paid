<?php

use yii\db\Migration;

/**
 * Class m240319_004152_create_table_field_category
 */
class m240319_004152_create_table_field_category extends Migration
{
    protected $tableName = '{{%field_category}}';

    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $collation = null;
        if ($this->db->driverName === 'mysql') {
            $collation = 'CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable($this->tableName, [
            'field_id' => $this->integer()->unsigned()->notNull(),
            'category_id' => $this->integer()->unsigned()->notNull(),
        ], $collation);

        $this->createIndex(
            'idx-field-field-field_id',
            $this->tableName,
            'field_id'
        );

        $this->createIndex(
            'idx-field-category-category_id',
            $this->tableName,
            'category_id'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240319_004152_create_table_field_category cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240319_004152_create_table_field_category cannot be reverted.\n";

        return false;
    }
    */
}
