<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;


$config = (object) [
    'ui' => 1,
    'wrapper' => ['width' => 30],
];

$offer = new FieldsBuilder('offer', ['label' => 'Oferta']);

$offer
	->addTab('Tytuł sekcji')
		->addFields(get_field_partial('components.title'))
		->addRelationship('offerta', ['label'=> 'oferta', 'post_type'=>'offerty']);
return $offer;
