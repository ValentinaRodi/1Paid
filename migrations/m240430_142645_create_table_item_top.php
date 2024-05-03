<?php

use yii\db\Migration;

/**
 * Class m240430_142645_create_table_item_top
 */
class m240430_142645_create_table_item_top extends Migration
{
    protected $tableName = '{{%item_top}}';

    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable($this->tableName, [
            'id' => $this->primaryKey(),
            'user_id' => $this->integer()->unsigned()->notNull(),
            'game_id' => $this->integer()->unsigned()->notNull(),
            'time' =>  $this->timestamp(),
        ]);



        $this->createIndex(
            'idx-field-user-user_id',
            $this->tableName,
            'user_id'
        );
        $this->createIndex(
            'idx-field-game-game_id',
            $this->tableName,
            'game_id'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        echo "m240430_142645_create_table_item_top cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240430_142645_create_table_item_top cannot be reverted.\n";

        return false;
    }
    */
}
