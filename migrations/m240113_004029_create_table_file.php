<?php

use yii\db\Migration;

/**
 * Handles the creation for table `{{%file}}`.
 */
class m240113_004029_create_table_file extends Migration
{

    /** @var string  */
    protected $tableName = '{{%file}}';

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
            'original_name' => $this->string(190)->notNull(),
            'hashed_name' => $this->string(190)->notNull(),
            'extension' => $this->string(190)->notNull(),
            'user_id' => $this->integer()->notNull(),
            'size' => $this->integer()->notNull(),
            'created_at' => $this->timestamp(),
            'updated_at' => $this->timestamp(),
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
