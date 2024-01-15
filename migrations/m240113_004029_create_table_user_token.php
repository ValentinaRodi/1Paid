<?php

use yii\db\Migration;

/**
 * Handles the creation for table `{{%user_token}}`.
 */
class m240113_004029_create_table_user_token extends Migration
{

    /** @var string  */
    protected $tableName = '{{%user_token}}';

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
            'id_user' => $this->integer()->notNull(),
            'email_token' => $this->string(191)->notNull(),
            'reset_password_token' => $this->string(191)->notNull(),
            'created_at' => $this->timestamp(),
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
