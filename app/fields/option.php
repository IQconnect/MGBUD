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
    ->addTab('footer', ['label' => 'Stopka', 'placement' => 'left'])
        ->addText('footer_title', ['label' => 'Nagłówek kolumny'])
        ->addText('footer_address', ['label' => 'Adres'] )
        ->addText('footer_postcode', ['label' => 'Kod pocztowy i miasto'] )
        ->addText('footer_krs', ['label' => 'KRS'] )
        ->addText('footer_nip', ['label' => 'NIP'] )
        ->addText('footer_regon', ['label' => 'REGON'] )
        ->addRepeater('footer_mails', ['label' => 'Maile', 'min' => 0, 'layout' => 'table'])
            ->addText('mail', ['title' => 'Mail'])
        ->endRepeater()
        ->addRepeater('footer_tel', ['label' => 'Tel', 'min' => 0, 'layout' => 'table'])
            ->addText('tel', ['title' => 'Tel'])
        ->endRepeater()
        ->addImage('IQlogo');

return $option_page;
