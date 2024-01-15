<?php

use yii\db\Migration;

/**
 * Handles the creation for table `{{%game}}`.
 */
class m240113_004029_create_table_game extends Migration
{

    /** @var string  */
    protected $tableName = '{{%game}}';

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
            'icon_id' => $this->integer()->notNull(),
            'background_id' => $this->integer()->notNull(),
            'name' => $this->string(100)->notNull(),
            'lang_id' => $this->integer()->notNull(),
            'new' => $this->tinyInteger()->notNull(),
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
