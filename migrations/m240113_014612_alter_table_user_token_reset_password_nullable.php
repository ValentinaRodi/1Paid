<?php

use yii\db\Migration;

/**
 * Class m240113_014612_alter_table_user_token_reset_password_nullable
 */
class m240113_014612_alter_table_user_token_reset_password_nullable extends Migration
{
    protected $tableName = '{{%user_token}}';

    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->alterColumn($this->tableName, 'reset_password_token', 'varchar(191) null');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240113_014612_alter_table_user_token_reset_password_nullable cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240113_014612_alter_table_user_token_reset_password_nullable cannot be reverted.\n";

        return false;
    }
    */
}
