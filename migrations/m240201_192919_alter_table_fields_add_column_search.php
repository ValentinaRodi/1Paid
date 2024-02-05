<?php

use yii\db\Migration;

/**
 * Class m240201_192919_alter_table_fields_add_column_search
 */
class m240201_192919_alter_table_fields_add_column_search extends Migration
{
    protected $tableName = '{{%field}}';

    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->addColumn($this->tableName, 'search', 'integer default 0'); // 0 or 1
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240201_192919_alter_table_fields_add_column_search cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240201_192919_alter_table_fields_add_column_search cannot be reverted.\n";

        return false;
    }
    */
}
