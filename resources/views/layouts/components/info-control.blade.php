<nav class="info-block__nav">
	@if ($hero)
	@foreach ( $hero as $elem)
	<button class="slideControl @if($loop->first) -is-active @endif" slide-button data-direction="{{ $loop->index}}">
	@endforeach
	@endif
	</nav>
