<section class="iconpack">
	<div class="container">
		<ul class="iconpack__wrapper">
			@foreach ( $data['icon']  as $item)
				<li class="iconpack__ele">{!! image($item['image']['ID'], 'full', 'iconpack__icons') !!}
				<span class="iconpack__desc">{!!  $item['title'] !!}</span>
				</li>
			@endforeach
		</ul>
	</div>
</section>
