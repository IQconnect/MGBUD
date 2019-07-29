<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$builder = new FieldsBuilder('builder');

$builder
    ->addTab('builder', ['placement' => 'left'])
        ->addFlexibleContent('components', ['button_label' => 'Add Component'])
            ->addLayout('info-section')
            ->addLayout('contact')
            ->addLayout('bildings')
            ->addLayout('content')
            ->addLayout(get_field_partial('components.stats'))
            ->addLayout(get_field_partial('components.flex'));
return $builder;
