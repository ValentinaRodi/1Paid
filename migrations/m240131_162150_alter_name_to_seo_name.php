<?php

use yii\db\Migration;

/**
 * Class m240131_162150_alter_name_to_seo_name
 */
class m240131_162150_alter_name_to_seo_name extends Migration
{
    /**
     * {@inheritdoc}
     */
    public function safeUp()
    {
        $this->renameColumn('{{%game}}', 'name', 'seo_name');
        $this->renameColumn('{{%category}}', 'name', 'seo_name');
        $this->renameColumn('{{%item}}', 'name', 'seo_name');
    }

    /**
     * {@inheritdoc}
     */
    public function safeDown()
    {
        $this->renameColumn('{{%game}}', 'seo_name', 'name');
        $this->renameColumn('{{%category}}', 'seo_name', 'name');
        $this->renameColumn('{{%item}}', 'seo_name', 'name');
    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m240131_162150_alter_name_to_seo_name cannot be reverted.\n";

        return false;
    }
    */
}
