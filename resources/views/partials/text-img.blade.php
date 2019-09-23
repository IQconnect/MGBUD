<section class="text-img">
	<div class="container">
		<div class="text-img__wrapper">
			<figure class="text-img__imagebox">
				{!! image($data['image']['ID'], 'full', 'img') !!}
			</figure>
			<div class="text-img__textbox">
					@includeWhen($data['header'] == 'tak', 'partials.title', ['title' => $data['title'], 'subtitle' => $data['subtitle'], 'class'=>'section-header section-header--addmargin section-header--left section-header--primary'])
				<p class="text-img__desc">  {!!  $data['desc'] !!}
				</p>
				<ul class="text-img__checktext">
					@foreach ( $data['list'] as $item )
						<li class="text-img__checktext--ele"> {!! $item['list_ele'] !!}</li>
				 	 @endforeach
				</ul>
			</div>
		</div>
	</div>
</section>
