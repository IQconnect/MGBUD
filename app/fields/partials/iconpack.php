<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;


$config = (object) [
    'ui' => 1,
    'wrapper' => ['width' => 30],
];

$iconpack = new FieldsBuilder('iconpack', ['label' => 'Ikony z opisem']);

$iconpack
	->addRepeater('icon')
	->addImage('image',['label' => 'Ikona'])
	//->addTextarea('icon_class', ['rows' => '1', 'label' => 'Klasa ikony'])
	->addTextarea('title', ['rows' => '1', 'label' => 'Tytuł ikony'])
    ->endRepeater();
return $iconpack;
