<?php

use yii\db\Migration;

/**
 * Handles the creation of table `{{%rank}}`.
 */
class m240410_174215_create_rank_table extends Migration
{
    protected $tableName = '{{%rank}}';

    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->createTable($this->tableName, [
            'id' => $this->primaryKey(),
            'rank' => $this->smallInteger()->unsigned()->notNull(),
            'object' => $this->smallInteger()->unsigned()->notNull(),
            'object_id' => $this->integer()->unsigned()->notNull(),
            'user_id' => $this->integer()->unsigned()->notNull(),
        ]);

        $this->createIndex(
            'idx-rank-object_id',
            $this->tableName,
            'object_id'
        );

        $this->createIndex(
            'idx-rank-user_id',
            $this->tableName,
            'user_id'
        );

        $this->createIndex(
            'idx-rank-object',
            $this->tableName,
            'object'
        );

        $this->createIndex(
            'idx-rank-rank',
            $this->tableName,
            'rank'
        );
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('{{%rank}}');
    }
}
