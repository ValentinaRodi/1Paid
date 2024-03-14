<?php

use yii\db\Migration;

/**
 * Class m240221_145915_alter_table_user_chenge
 */
class m240221_145915_alter_table_user_chenge extends Migration
{
    protected $tableName = '{{%user}}';
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->alterColumn($this->tableName, 'avatar', 'string default 0');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240221_145915_alter_table_user_chenge cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240221_145915_alter_table_user_chenge cannot be reverted.\n";

        return false;
    }
    */
}
