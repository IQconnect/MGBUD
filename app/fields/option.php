<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$option_page = new FieldsBuilder('option');

$option_page
    ->setLocation('options_page', '==', 'acf-options-ustawienia-strony');

$option_page
    ->addTab('Header', ['label' => 'Ustawienia główne', 'placement' => 'left'])
        ->addImage('logo')
        ->addText('telhead', ['label' => 'Telephone'])
        ->addText('emailhead', ['label' => 'Email'])
    ->addTab('Social media', ['label' => 'Social Media', 'placement' => 'left'])
        ->addRepeater('icons', ['min' => 0, 'layout' => 'table'])
            ->addText('icon', ['label' => 'Font awesome kod ikonki'])
            ->addText('link', ['label' => 'slink'])
        ->endRepeater()
    ->addTab('hero', ['label' => 'Hero', 'placement' => 'left'])
        ->addRepeater('hero', ['min' => 0, 'layout' => 'table'])
            ->addImage('img', ['label'=> 'Zdjęcie z tle'])
            ->addTextarea('title', ['label' => 'Nagłówek', 'new_lines'=>'br'])
            ->addWysiwyg('content', ['label' => 'Treść'])
        ->endRepeater()
        ->addTab('Call', ['label' => 'Ustawienia sekcji zadzwon', 'placement' => 'left'])
        ->addText('calltext', ['label' => 'Text'])
        ->addText('callnumber', ['label' => 'Numer'])
        ->addImage('callimage', ['label' => 'Zdjecie'])
    ->addTab('footer', ['label' => 'Stopka', 'placement' => 'left'])
        ->addText('footer_title', ['label' => 'Nagłówek kolumny'])
        ->addText('footer_firm', ['label' => 'Firma'])
        ->addText('footer_address', ['label' => 'Adres'] )
        ->addText('footer_postcode', ['label' => 'Kod pocztowy i miasto'] )
        ->addText('footer_link',['label'=>'Adress strony'])
        ->addImage('IQlogo');

return $option_page;
