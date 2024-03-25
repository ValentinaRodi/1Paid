<?php

use yii\db\Migration;

/**
 * Class m240312_133037_alter_table_file_add_column_path
 */
class m240312_133037_alter_table_file_add_column_path extends Migration
{
    protected $tableName = '{{%file}}';

    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn($this->tableName, 'path', 'string default 0');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240312_133037_alter_table_file_add_column_path cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240312_133037_alter_table_file_add_column_path cannot be reverted.\n";

        return false;
    }
    */
}
