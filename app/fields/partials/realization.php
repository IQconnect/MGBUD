<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;


$config = (object) [
    'ui' => 1,
    'wrapper' => ['width' => 30],
];

$realization = new FieldsBuilder('realization', ['label' => 'Realizacja']);

$realization
	->addFields(get_field_partial('components.title'))
	->addImage('firstimage',['label' => 'Zdjęcie', 'wrapper' => ['width' => '100%']])
	->addTextarea('firsttitle', ['rows' => '1', 'new_lines' => 'br', 'label' => 'Tytuł'])
	->addTextarea('firstdesc', ['rows' => '3', 'new_lines' => 'br', 'label' => 'Opis'])
	->addLink('firstlink', ['label' => 'Link'])
	->addImage('secondimage',['label' => 'Zdjęcie', 'wrapper' => ['width' => '100%']])
	->addTextarea('secondtitle', ['rows' => '1', 'new_lines' => 'br', 'label' => 'Tytuł'])
	->addTextarea('seconddesc', ['rows' => '3', 'new_lines' => 'br', 'label' => 'Opis'])
	->addLink('secondlink', ['label' => 'Link']);
return $realization;
