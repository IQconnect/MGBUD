<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;


$config = (object) [
    'ui' => 1,
    'wrapper' => ['width' => 30],
];

$description = new FieldsBuilder('description', ['label' => 'Duży opis']);

$description
	->addFields(get_field_partial('components.title'))
	->addTextarea('desc', ['rows' => '10', 'new_lines' => 'br', 'label' => 'Opis']);
return $description;
