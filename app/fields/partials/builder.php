<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$builder = new FieldsBuilder('builder');

$builder
   ->addTab('builder', ['placement' => 'left'])
      ->addFlexibleContent('components', ['button_label' => 'Dodaj komponent'])
         ->addLayout(get_field_partial('partials.hero'))
         ->addLayout(get_field_partial('partials.small-hero'))
         ->addLayout(get_field_partial('partials.text-img'))
         ->addLayout(get_field_partial('partials.iconpack'))
         ->addLayout(get_field_partial('partials.offer'))
         ->addLayout(get_field_partial('partials.feature'))
         ->addLayout(get_field_partial('partials.realization'))
         ->addLayout(get_field_partial('partials.call'))
         ->addLayout(get_field_partial('partials.photoline'))
         ->addLayout(get_field_partial('partials.send'))
         ->addLayout(get_field_partial('partials.description'))
         ->addLayout(get_field_partial('partials.two-img'));

return $builder;
