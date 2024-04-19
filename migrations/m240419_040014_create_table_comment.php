<?php

use yii\db\Migration;

/**
 * Class m240419_040014_create_table_comment
 */
class m240419_040014_create_table_comment extends Migration
{
    protected $tableName = '{{%comment}}';

    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable($this->tableName, [
            'id' => $this->primaryKey(),
            'object' => $this->smallInteger()->unsigned()->notNull(),
            'object_id' => $this->integer()->unsigned()->notNull(), // 0 - User, 1 - Item
            'user_id' => $this->integer()->unsigned()->notNull(),
            'comment' => $this->text()->notNull(),
        ]);

        $this->createIndex(
            'idx-rank-object_id',
            $this->tableName,
            'object_id'
        );

    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240419_040014_create_table_comment cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240419_040014_create_table_comment cannot be reverted.\n";

        return false;
    }
    */
}
