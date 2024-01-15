<?php

use yii\db\Migration;

/**
 * Handles the creation for table `{{%lang}}`.
 */
class m240113_004029_create_table_lang extends Migration
{

    /** @var string  */
    protected $tableName = '{{%lang}}';

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
            'russian' => $this->string(190),
            'english' => $this->string(190),
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
