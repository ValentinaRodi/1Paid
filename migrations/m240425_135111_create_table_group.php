<?php

use yii\db\Migration;

/**
 * Class m240425_135111_create_table_group
 */
class m240425_135111_create_table_group extends Migration
{
    protected $tableName = '{{%group}}';

    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable($this->tableName, [
            'id' => $this->primaryKey(),
            'lang_id' => $this->integer()->unsigned()->notNull(),
        ]);



        $this->createIndex(
            'idx-field-lang-lang_id',
            $this->tableName,
            'lang_id'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240425_135111_create_table_group cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240425_135111_create_table_group cannot be reverted.\n";

        return false;
    }
    */
}
