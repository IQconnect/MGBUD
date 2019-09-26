<section class="call">
		<figure class="call__bg">
				{!! image($data['image']['ID'], 'full', 'img') !!}
		</figure>
		<div class="container">
			<div class="call__wrapper">
				<header class="call__title">
					<h2 class="section-header--center call__desc">
						<span class="section-header__headline section-header--addmargin"> {!! $data['title']  !!}</span>
						<span class="section-header__title"> {!! $data['number']  !!}</span>
						<a class="button button--buttonbg " href="">Dowiedz się więcej</a>
					</h2>

				</header>

			</div>
		</div>
	</section>
