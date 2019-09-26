<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;


$config = (object) [
    'ui' => 1,
    'wrapper' => ['width' => 30],
];

$photoline = new FieldsBuilder('photoline', ['label' => 'Linia zdjęć']);

$photoline
	->addImage('image1',['label' => 'Zdjęcie1', 'wrapper' => ['width' => '100%']])
	->addImage('image2',['label' => 'Zdjęcie2', 'wrapper' => ['width' => '100%']])
	->addImage('image3',['label' => 'Zdjęcie3', 'wrapper' => ['width' => '100%']])
	->addImage('image4',['label' => 'Zdjęcie4', 'wrapper' => ['width' => '100%']])
	->addImage('image5',['label' => 'Zdjęcie5', 'wrapper' => ['width' => '100%']]);
return $photoline ;
