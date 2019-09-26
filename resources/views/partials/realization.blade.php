<section class="realization">
		<div class="container">
				@includeWhen($data['header'] == 'tak', 'partials.title', ['title' => $data['title'], 'subtitle' => $data['subtitle'], 'class'=>'section-header--center section-header--primary section-header--addmargin'])
			<div class="realization__wrapper">

				<article class="single-realization">
					<figure class="single-realization__img">
							{!! image($data['firstimage']['ID'], 'full', 'img') !!}
					</figure>
					<div class="single-realization__textbox">
						<h3 class="content-header__left single-realization__textbox--primary"> {!!  $data['firsttitle'] !!}</h3>
						<p class="single-realization__desc">
								{!!  $data['firstdesc'] !!}
						</p>
						<a class="single-realization__button button button--buttonbg " href="{{ $data['firstlink']['url'] }}">
						Dowiedz się więcej
						</a>
					</div>
				</article>
				<article class="single-realization">
					<figure class="single-realization__img">
							{!! image($data['secondimage']['ID'], 'full', 'img') !!}
					</figure>
					<div class="single-realization__textbox">
						<h3 class="content-header__left single-realization__textbox--primary"> {!!  $data['secondtitle'] !!}</h3>
						<p class="single-realization__desc">
								{!!  $data['seconddesc'] !!}
						</p>
						<a class="single-realization__button button button--buttonbg " href="{{ $data['secondlink']['url'] }}">
						Dowiedz się więcej
						</a>
					</div>
				</article>
			</div>
		</div>
	</section>
