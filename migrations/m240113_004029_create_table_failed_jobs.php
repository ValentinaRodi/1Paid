<?php

use yii\db\Migration;

/**
 * Handles the creation for table `{{%failed_jobs}}`.
 */
class m240113_004029_create_table_failed_jobs extends Migration
{

    /** @var string  */
    protected $tableName = '{{%failed_jobs}}';

    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        $collation = null;
        if ($this->db->driverName === 'mysql') {
            // http://stackoverflow.com/questions/766809/whats-the-difference-between-utf8-general-ci-and-utf8-unicode-ci
            $collation = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable($this->tableName, [
            'id' => $this->primaryKey()->unsigned()->notNull(),
            'uuid' => $this->string(32)->notNull(),
            'connection' => $this->text()->notNull(),
            'queue' => $this->text()->notNull(),
            'payload' => $this->text()->notNull(),
            'exception' => $this->text()->notNull(),
            'failed_at' => $this->timestamp()->notNull()->defaultExpression('CURRENT_TIMESTAMP'),
        ], $collation);



    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        $this->dropTable($this->tableName);
    }
}
