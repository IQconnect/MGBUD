<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;


$config = (object) [
    'ui' => 1,
    'wrapper' => ['width' => 30],
];

$two_img = new FieldsBuilder('two-img', ['label' => 'Dwa zdjęcia obok siebie']);

$two_img
	->addImage('image_one',['label' => 'Lewe Zdjęcie', 'wrapper' => ['width' => '100%']])
	->addImage('image_two',['label' => 'Prawe Zdjęcie', 'wrapper' => ['width' => '100%']]);
return $two_img;
