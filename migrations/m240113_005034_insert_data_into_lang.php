<?php

use yii\db\Migration;

/**
 * Handles the data insertion for table `{{%lang}}`.
 */
class m240113_005034_insert_data_into_lang extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        
$this->batchInsert('{{%lang}}', ['id','russian','english','created_at','updated_at'], [
			['1','Warface','Warface','',''],
			['3','Аккаунты','','2024-01-10 10:36:11','2024-01-10 10:36:11'],
			['4','Аккаунты','','2024-01-10 11:08:51','2024-01-10 11:08:51'],
			['5','Аккаунты','','2024-01-10 11:19:35','2024-01-10 11:19:35'],
			['6','Аккаунты','','2024-01-10 11:34:10','2024-01-10 11:34:10']]);
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
               
$this->truncateTable('{{%lang}}');
    }
}
