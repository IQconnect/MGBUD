<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;


$config = (object) [
    'ui' => 1,
    'wrapper' => ['width' => 30],
];

$call = new FieldsBuilder('call ', ['label' => 'Zadzwon']);


return $call ;
