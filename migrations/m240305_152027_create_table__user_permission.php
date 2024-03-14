<?php

use yii\db\Migration;

/**
 * Class m240305_152027_create_table__user_permission
 */
class m240305_152027_create_table__user_permission extends Migration
{


    /** @var string  */
    protected $tableName = '{{%user_permission}}';

    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $collation = null;
        if ($this->db->driverName === 'mysql') {
            $collation = 'CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable($this->tableName, [
            'user_id' => $this->primaryKey()->unsigned()->notNull(),
            'permission_id' => $this->integer()->notNull(),
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
        echo "m240305_152027_create_table__user_permission cannot be reverted.\n";

        return false;
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240305_152027_create_table__user_permission cannot be reverted.\n";

        return false;
    }
    */
}
