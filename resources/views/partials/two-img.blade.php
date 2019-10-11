@php
	$imageone = $data['image_one']['ID'];
	$imagetwo = $data['image_two']['ID'];
@endphp


<section class="two-img">
	<div class="container">
		<div class="two-img__wrapper">
			<figure class="two-img__imagebox">
				{!! image($imagetwo, 'full', 'img') !!}
			</figure>
			<figure class="two-img__imagebox">
				{!! image($imagetwo, 'full', 'img') !!}
			</figure>
		</div>
	</div>
</section>
