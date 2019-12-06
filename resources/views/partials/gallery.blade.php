@php
    $gallery = $data['gallery'];
@endphp

<section class="gallery">
	<div class="container">
		<div class="gallery__wrapper">
				@php
				$galleryName = rand(1, 999);
			@endphp
			@foreach ($gallery as $image)

				<a class="fancybox"
					data-caption="{{ $image['description'] }}"
					data-fancybox="gallery__wrapper{{$galleryName}}"
					href="{{ $image['url'] }}"
				>
					{!! image($image['ID'],'full','img') !!}
				</a>
			@endforeach
			</div>
		</div>
	</div>
</section>
