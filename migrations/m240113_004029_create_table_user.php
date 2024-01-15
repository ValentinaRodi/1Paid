<?php

use yii\db\Migration;

/**
 * Handles the creation for table `{{%user}}`.
 */
class m240113_004029_create_table_user extends Migration
{

    /** @var string  */
    protected $tableName = '{{%user}}';

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
            'name' => $this->string(191)->notNull(),
            'email' => $this->string(250)->notNull(),
            'email_verified' => $this->tinyInteger(),
            'email_verified_at' => $this->timestamp(),
            'password' => $this->string(191)->notNull(),
            'secret_word' => $this->string(190),
            //'two_factor_secret' => $this->text(),
            //'two_factor_recovery_codes' => $this->text(),
            'remember_token' => $this->string(100),
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
