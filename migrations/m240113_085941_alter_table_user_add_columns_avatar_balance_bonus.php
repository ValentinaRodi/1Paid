<?php

use yii\db\Migration;

/**
 * Class m240113_085941_alter_table_user_add_columns_avatar_balance_bonus
 */
class m240113_085941_alter_table_user_add_columns_avatar_balance_bonus extends Migration
{
    protected $tableName = '{{%user}}';
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn($this->tableName, 'avatar', 'integer default 0');
        $this->addColumn($this->tableName, 'balance', 'money default 0');
        $this->addColumn($this->tableName, 'bonus', 'money default 0');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240113_085941_alter_table_user_add_columns_avatar_balance_bonus cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240113_085941_alter_table_user_add_columns_avatar_balance_bonus cannot be reverted.\n";

        return false;
    }
    */
}
