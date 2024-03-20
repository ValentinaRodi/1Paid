<?php

use yii\db\Migration;

/**
 * Class m240319_004116_delete_table_field_category
 */
class m240319_004116_delete_table_field_category extends Migration
{
    protected $tableName = '{{%field_category}}';

    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->dropTable($this->tableName);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240319_004116_delete_table_field_category cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240319_004116_delete_table_field_category cannot be reverted.\n";

        return false;
    }
    */
}
