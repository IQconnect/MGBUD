<section class="offer">
	<div class="container">
		<div class="offer__wrapper">
			@includeWhen($data['header'] == 'tak', 'partials.title', ['title' => $data['title'], 'subtitle' => $data['subtitle'], 'class'=>'section-header--addmargin section-header--center section-header--primary'])
			<ul class="offer__menu">
				@foreach ( $data['tab'] as $item )
				<li class="offer__ele"><span>{!! $item['tablename'] !!}</span></li>
				@endforeach
			</ul>
			@foreach ( $data['tab'] as $item )
				<div class="offer__singlebox">
					<div class="offer__textbox">
					<h3 class="content-header content-header__left"> {!! $item['tablename'] !!}</h3>
						<p class="offer__desc">
								{!! $item['desc'] !!}
						</p>
						<a class="button button--buttonbg" href="{{ $item['link']['url'] }}">Dowiedz się więcej</a>
					</div>
					<figure class="text-img__imagebox">
							{!! image($item['image']['ID'], 'full', 'img') !!}
					</figure>
				</div>
			@endforeach
		<div>
	</div>
</section>
