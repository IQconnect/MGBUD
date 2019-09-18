<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$builder = new FieldsBuilder('builder');

$builder
   ->addTab('builder', ['placement' => 'left']);


return $builder;
