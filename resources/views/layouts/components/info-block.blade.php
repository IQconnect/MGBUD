@php
  if(!$title) $title = $data['title'];
  if(!$content) $content = $data['content'];
@endphp
<div class="info-block">
	<div class="info-block__box">
    <div class="info-block__title">
      {!! $title !!}
    </div>
    <h1 class="info-block__text">
      <div class="info-block__text--ele">
      {!! $content !!}
      </div>
    </h1>
    <a href="{{ $data['link']['url'] }}" class="button button--buttonbg">
      Dowiedz się wiecej
		</a>
	</div>

</div>
