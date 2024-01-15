<?php

use yii\db\Migration;

/**
 * Handles the data insertion for table `{{%file}}`.
 */
class m240113_005034_insert_data_into_file extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        
$this->batchInsert('{{%file}}', ['id','original_name','hashed_name','extension','user_id','size','created_at','updated_at'], [
			['1','icon-warface.75063d1d','icon-warface.75063d1d','png','1','1','',''],
			['2','game-card-bg-warface.9e636275','game-card-bg-warface.9e636275','png','1','1','','']]);
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
               
$this->truncateTable('{{%file}}');
    }
}
