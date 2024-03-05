<?php

use yii\db\Migration;

/**
 * Class m240305_152001_create_table_permission
 */
class m240305_152001_create_table_permission extends Migration
{


    /** @var string  */
    protected $tableName = '{{%permission}}';

    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $collation = null;
        if ($this->db->driverName === 'mysql') {
            $collation = 'CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable($this->tableName, [
            'id' => $this->primaryKey()->unsigned()->notNull(),
            'lang_id' => $this->integer()->notNull(),
        ], $collation);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240305_152001_create_table_permission cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240305_152001_create_table_permission cannot be reverted.\n";

        return false;
    }
    */
}
