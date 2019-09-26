<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;


$config = (object) [
    'ui' => 1,
    'wrapper' => ['width' => 30],
];

$call = new FieldsBuilder('call ', ['label' => 'Zadzwon']);

$call
	->addImage('image',['label' => 'Zdjęcie', 'wrapper' => ['width' => '100%']])
	->addTextarea('title', ['rows' => '1', 'label' => 'Tekst'])
	->addTextarea('number', ['rows' => '1', 'label' => 'number']);
return $call ;
