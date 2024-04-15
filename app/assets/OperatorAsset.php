<?php

namespace app\assets;

use yii\web\AssetBundle;

class OperatorAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/operator.css',
    //    ['css/print.css', 'media' => 'print'],
    ];
    public $js = [
        'js/operator.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap5\BootstrapAsset',
    ];
}