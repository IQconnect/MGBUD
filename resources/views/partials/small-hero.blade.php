@php
    $img = $data['img']['ID'];
    $title = $data['title'];
@endphp

<section class="small-hero">
    {!! image($img, 'full', 'small-hero__image') !!}

    <header class="small-hero__header">
		<h1 class="">
			{!! $title !!}
		</h1>
    </header>
</section>
