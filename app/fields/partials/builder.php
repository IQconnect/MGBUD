<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$builder = new FieldsBuilder('builder');

$builder
   ->addTab('builder', ['placement' => 'left'])
      ->addFlexibleContent('components', ['button_label' => 'Dodaj komponent'])
         ->addLayout(get_field_partial('partials.hero'));

return $builder;
