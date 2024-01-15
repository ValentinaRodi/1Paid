<?php

use yii\db\Migration;

/**
 * Class m240113_101634_alter_table_user_add_column_status
 */
class m240113_101634_alter_table_user_add_column_status extends Migration
{
    public $tableName = '{{%user}}';
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn($this->tableName, 'status', 'integer default 9');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240113_101634_alter_table_user_add_column_status cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240113_101634_alter_table_user_add_column_status cannot be reverted.\n";

        return false;
    }
    */
}
