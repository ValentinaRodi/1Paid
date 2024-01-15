<?php

use yii\db\Migration;

/**
 * Handles the data insertion for table `{{%game}}`.
 */
class m240113_005034_insert_data_into_game extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        
$this->batchInsert('{{%game}}', ['id','icon_id','background_id','name','lang_id','new','created_at','updated_at'], [
			['1','1','2','Warface','1','0','','']]);
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
               
$this->truncateTable('{{%game}}');
    }
}
