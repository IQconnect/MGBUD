<section class="features">
	<figure class="features__bg">
		{!! image($data['image']['ID'], 'full', 'img') !!}
	</figure>
	<div class="container">
		<div class="features__wrapper">
				<div class="page-box page-box--light">
					<ul class="iconlist">
							@foreach ( $data['list'] as $item )
							<li class="iconlist__elem">{!! $item['list_ele'] !!}</li>
						  @endforeach
					</ul>
				</div>
				@includeWhen($data['header'] == 'tak', 'partials.title', ['title' => $data['title'], 'subtitle' => $data['subtitle'], 'class'=>'section-header section-header--left features__title'])
		</div>
	</div>
</section>
