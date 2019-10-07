<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$offer_post = new FieldsBuilder('Oferta');

$offer_post
    ->setLocation('post_type', '==', 'offerty');

$offer_post
            ->addTab('Oferta na stronie głównej')
                ->addTextarea('tabname', ['rows' => '1', 'label' => 'Tytuł tabelki'])
                ->addImage('tabimage',['label' => 'Zdjęcie', 'wrapper' => ['width' => '100%']])
                ->addTextarea('tabdesc', ['rows' => '5', 'new_lines' => 'br', 'label' => 'Opis']);
return $offer_post;
