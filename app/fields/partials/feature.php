<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;


$config = (object) [
    'ui' => 1,
    'wrapper' => ['width' => 30],
];

$feature = new FieldsBuilder('feature ', ['label' => 'Feature']);

$feature
	->addFields(get_field_partial('components.title'))
	->addImage('image',['label' => 'Zdjęcie', 'wrapper' => ['width' => '100%']])
	->addRepeater('list')
	->addTextarea('list_ele', ['rows' => '1', 'label' => 'Element listy'])
    ->endRepeater();
return $feature ;
