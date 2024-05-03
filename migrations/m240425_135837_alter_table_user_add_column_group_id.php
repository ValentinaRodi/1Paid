<?php

use yii\db\Migration;

/**
 * Class m240425_135837_alter_table_user_add_column_group_id
 */
class m240425_135837_alter_table_user_add_column_group_id extends Migration
{
    protected $tableName = '{{%user}}';

    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn($this->tableName, 'group_id', 'integer default 0');

        $this->createIndex(
            'idx-field-group-group_id',
            $this->tableName,
            'group_id'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240425_135837_alter_table_user_add_column_group_id cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240425_135837_alter_table_user_add_column_group_id cannot be reverted.\n";

        return false;
    }
    */
}
