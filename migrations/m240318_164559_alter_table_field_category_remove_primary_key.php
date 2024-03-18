<?php

use yii\db\Migration;

/**
 * Class m240318_164559_alter_table_field_category_remove_primary_key
 */
class m240318_164559_alter_table_field_category_remove_primary_key extends Migration
{
    protected $tableName = '{{%field_category}}';

    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $collation = null;
        if ($this->db->driverName === 'mysql') {
            $collation = 'CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE=InnoDB';
        }

        $this->alterColumn($this->tableName,
        ]);
        $this->createTable($this->tableName, [
            'field_id' => $this->integer()->unsigned()->notNull(),
            'category_id' => $this->integer()->unsigned()->notNull(),
        ], $collation);

        $this->createIndex(
            'idx-field-permission-permission_id',
            $this->tableName,
            'permission_id_id'
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
        echo "m240318_164559_alter_table_field_category_remove_primary_key cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240318_164559_alter_table_field_category_remove_primary_key cannot be reverted.\n";

        return false;
    }
    */
}
