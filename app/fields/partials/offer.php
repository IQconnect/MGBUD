<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;


$config = (object) [
    'ui' => 1,
    'wrapper' => ['width' => 30],
];

$offer = new FieldsBuilder('offer', ['label' => 'Oferta']);

$offer
	->addFields(get_field_partial('components.title'))
	->addImage('image',['label' => 'Zdjęcie', 'wrapper' => ['width' => '100%']])
	->addTextarea('offer_title', ['rows' => '1', 'new_lines' => 'br', 'label' => 'Tytuł'])
	->addTextarea('desc', ['rows' => '3', 'new_lines' => 'br', 'label' => 'Opis'])
	->addLink('link', ['label' => 'Link']);
return $offer;
