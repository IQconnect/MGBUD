<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$builder = new FieldsBuilder('builder');

$builder
   ->addTab('builder', ['placement' => 'left'])
      ->addFlexibleContent('components', ['button_label' => 'Dodaj komponent'])
         ->addLayout(get_field_partial('partials.hero'))
         ->addLayout(get_field_partial('partials.text-img'))
         ->addLayout(get_field_partial('partials.iconpack'))
         ->addLayout(get_field_partial('partials.offer'));

return $builder;
