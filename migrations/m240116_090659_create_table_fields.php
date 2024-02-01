<?php

use yii\db\Migration;

/**
 * Class m240116_090659_create_table_fields
 */
class m240116_090659_create_table_fields extends Migration
{
    protected $tableName = '{{%field}}';

    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $collation = null;
        if ($this->db->driverName === 'mysql') {
            $collation = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable($this->tableName, [
            'id' => $this->primaryKey()->unsigned()->notNull(),
            'seo_name' => $this->string(190)->notNull(),
            'lang_id' => $this->integer()->notNull(),
            'type' => $this->string(190)->notNull(), // Type can be option, string, integer, file and picture.
            'value' => $this->string(190)->notNull(), // Value for option field.
            'created_at' => $this->timestamp(),
            'updated_at' => $this->timestamp(),
        ], $collation);
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->dropTable('post');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240116_090659_create_table_fields cannot be reverted.\n";

        return false;
    }
    */
}
