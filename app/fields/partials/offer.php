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
	->addRepeater('tab',['label' => 'Tabela ofert'])
		->addGroup()
		->addTextarea('tablename', ['rows' => '1', 'label' => 'Tytuł tabelki'])
		->addImage('image',['label' => 'Zdjęcie', 'wrapper' => ['width' => '100%']])
		->addWysiwyg('desc', ['rows' => '3', 'new_lines' => 'br', 'label' => 'Opis'])
		->addLink('link', ['label' => 'Link'])
    ->endRepeater();
return $offer;
