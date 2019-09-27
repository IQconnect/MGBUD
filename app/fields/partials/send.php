<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;


$config = (object) [
    'ui' => 1,
    'wrapper' => ['width' => 30],
];

$send = new FieldsBuilder('send', ['label' => 'Formularz']);

$send
	->addFields(get_field_partial('components.title'))
	->addLink('link', ['label' => 'Link']);
return $send;
