
@php
$image = get_option_field("callimage")['ID'];
$desc= get_field('calltext', 'options');
$number = get_field('callnumber', 'options');
@endphp
<section class="call">
		<div class="container call__overlay">
				<figure class="call__bg">
						{!! image($image, 'full', 'img') !!}
				</figure>
			<div class="call__wrapper">
				<header class="call__title">
					<h2 class="section-header--center call__desc">
						<span class="section-header__headline call__title--margin"> {!! $desc !!}</span>
						<span class="section-header__title"> {!! $number  !!}</span>
						<a class="button button--buttonbg " href="">Dowiedz się więcej</a>
					</h2>

				</header>

			</div>
		</div>
	</section>
