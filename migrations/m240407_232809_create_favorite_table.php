<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%favorite}}`.
 */
class m240407_232809_create_favorite_table extends Migration
{
    protected $tableName = '{{%favorite}}';

    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable($this->tableName, [
            'id' => $this->primaryKey(),
            'item_id' => $this->integer()->unsigned()->notNull(),
            'user_id' => $this->integer()->unsigned()->notNull(),
        ]);

        $this->createIndex(
            'idx-field-item-item_id',
            $this->tableName,
            'item_id'
        );

        $this->createIndex(
            'idx-field-user-user_id',
            $this->tableName,
            'user_id'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%favorite}}');
    }
}
