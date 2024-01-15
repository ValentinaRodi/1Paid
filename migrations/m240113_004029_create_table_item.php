<?php

use yii\db\Migration;

/**
 * Handles the creation for table `{{%table_item}}`.
 */
class m240113_004029_create_table_item extends Migration
{

    /** @var string  */
    protected $tableName = '{{%item}}';

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
            'name' => $this->string(190)->notNull(),
            'category_id' => $this->integer()->notNull(),
            'lang_id' => $this->integer()->notNull(),
            'user_id' => $this->integer()->notNull(),
            'icon_id' => $this->integer()->notNull(),
            'new' => $this->tinyInteger()->notNull(),
            'sort' => $this->integer()->notNull(),
            'price' => $this->double(8)->unsigned()->notNull(),
            'rank' => $this->double(3)->notNull(),
            'description' => $this->text()->notNull(),
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
