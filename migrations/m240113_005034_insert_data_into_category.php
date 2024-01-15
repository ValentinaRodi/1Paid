<?php

use yii\db\Migration;

/**
 * Handles the data insertion for table `{{%category}}`.
 */
class m240113_005034_insert_data_into_category extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        
$this->batchInsert('{{%category}}', ['id','game_id','lang_id','name','sort','created_at','updated_at'], [
			['1','1','3','accwarface','0','2024-01-10 10:36:11','2024-01-10 10:36:11'],
			['2','1','4','accwarface','0','2024-01-10 11:08:51','2024-01-10 11:08:51'],
			['3','1','5','accwarface','0','2024-01-10 11:19:35','2024-01-10 11:19:35'],
			['4','1','6','accwarface','0','2024-01-10 11:34:10','2024-01-10 11:34:10']]);
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
               
$this->truncateTable('{{%category}}');
    }
}
