@php
	$oferta = $data['offerta'];
@endphp

<section class="offer">
	<div class="container">
		<div class="offer__wrapper">
			@includeWhen($data['header'] == 'tak', 'partials.title', ['title' => $data['title'], 'subtitle' => $data['subtitle'], 'class'=>'section-header--addmargin section-header--center section-header--primary'])
			<div class="offer__menu">
				@foreach ( $oferta as $elem )
				@php
					$id = $elem -> ID;
					$title = get_field('tabname', $id)
				@endphp
				<button class="offer__ele @if($loop->first) -is-active @endif" tab-button data-direction="{{ $loop->index}}">
					<span>{!! $title !!}</span>
				</button>
				@endforeach
			</div>
			 @foreach ( $oferta as $elem )
				<div class="offer__singlebox @if($loop->first) -is-active @endif" tab>
					@include('layouts.components.tab-block', ['data'=>$elem])
				</div>
			@endforeach
		<div>
	</div>
</section>
