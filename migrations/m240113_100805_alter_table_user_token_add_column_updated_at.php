<?php

use yii\db\Migration;

/**
 * Class m240113_100805_alter_table_user_token_add_column_updated_at
 */
class m240113_100805_alter_table_user_token_add_column_updated_at extends Migration
{
    public $tableName = '{{%user_token}}';
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn($this->tableName, 'updated_at', 'timestamp default NULL');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240113_100805_alter_table_user_token_add_column_updated_at cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240113_100805_alter_table_user_token_add_column_updated_at cannot be reverted.\n";

        return false;
    }
    */
}
