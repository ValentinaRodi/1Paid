<?php

use yii\db\Migration;

/**
 * Class m240219_185245_alter_table_user_add_collumns_mailing_notify_sound
 */
class m240219_185245_alter_table_user_add_collumns_mailing_notify_sound extends Migration
{
    protected $tableName = '{{%user}}';
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn($this->tableName, 'mailing', 'TINYINT default 0');
        $this->addColumn($this->tableName, 'notify_sound', 'TINYINT default 0');

    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240219_185245_alter_table_user_add_collumns_mailing_notify_sound cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240219_185245_alter_table_user_add_collumns_mailing_notify_sound cannot be reverted.\n";

        return false;
    }
    */
}
