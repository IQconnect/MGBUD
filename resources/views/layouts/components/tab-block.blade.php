@php
$post = $data;
$link = $data->guid;
$id = $post -> ID;
$title = get_field('tabname', $id);
$desc = get_field('tabdesc', $id);
$image = get_field('tabimage', $id);
$imageid = $image['ID'];
@endphp
 <div class="offer__textbox">
	<h3 class="content-header content-header__left"> {!! $title  !!}</h3>
		<p class="offer__desc">
				 {!! $desc !!}
		</p>
	 <a class="button button--buttonbg" href="{{ $link }}">Dowiedz się więcej</a>
	</div>
  <figure class="text-img__imagebox">
			{!! image($imageid, 'full', 'img') !!}
	</figure>
