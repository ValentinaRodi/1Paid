<?php

use yii\db\Migration;

/**
 * Class m240201_151400_create_table_field_data
 */
class m240201_151400_create_table_field_data extends Migration
{
    protected $tableName = '{{%field_data}}';

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
            'id' => $this->primaryKey()->unsigned()->notNull(),
            'field_id' => $this->integer()->notNull(),
            'item_id' => $this->integer()->notNull(),
            'value' => $this->text()->notNull(), // Value for field.
        ], $collation);

        $this->createIndex(
            'idx-field-data-field_id',
            $this->tableName,
            'field_id'
        );

        $this->createIndex(
            'idx-field-data-item_id',
            $this->tableName,
            'item_id'
        );

    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240201_151400_create_table_field_data cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240201_151400_create_table_field_data cannot be reverted.\n";

        return false;
    }
    */
}
