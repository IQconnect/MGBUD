<section class="offer">
	<div class="container">
		<div class="offer__wrapper">
				@includeWhen($data['header'] == 'tak', 'partials.title', ['title' => $data['title'], 'subtitle' => $data['subtitle'], 'class'=>'section-header--addmargin section-header--center section-header--primary'])
				<ul class="offer__menu">
					<li class="offer__ele"><span>Lorem ipsum dolor</span></li>
					<li class="offer__ele"><span>Lorem ipsum dolor</span></li>
					<li class="offer__ele"><span>Lorem ipsum dolor</span></li>
					<li class="offer__ele"><span>Lorem ipsum dolor</span></li>
					<li class="offer__ele"><span>Lorem ipsum dolor</span></li>
				</ul>
			<div class="offer__singlebox">
				<div class="offer__textbox">
				<h3 class="content-header content-header__left"> {!!  $data['offer_title'] !!}</h3>
					<p class="offer__desc">
							{!!  $data['desc'] !!}
					</p>
					<a class="button button--buttonbg" href="{{ $data['link']['url'] }}">Dowiedz się więcej</a>
				</div>
				<figure class="text-img__imagebox">
						{!! image($data['image']['ID'], 'full', 'img') !!}
				</figure>
			</div>
		<div>
	</div>
</section>
