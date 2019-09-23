<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;


$config = (object) [
    'ui' => 1,
    'wrapper' => ['width' => 30],
];

$text_img = new FieldsBuilder('text-img', ['label' => 'Text ze zdjęciem']);

$text_img
	->addFields(get_field_partial('components.title'))
	->addImage('image',['label' => 'Zdjęcie', 'wrapper' => ['width' => '100%']])
	->addTextarea('desc', ['rows' => '3', 'new_lines' => 'br', 'label' => 'Opis'])
	->addRepeater('list')
	->addTextarea('list_ele', ['rows' => '1', 'label' => 'Element listy'])
    ->endRepeater();
return $text_img;
