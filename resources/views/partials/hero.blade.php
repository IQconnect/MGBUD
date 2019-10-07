@php
    $hero = get_field('hero', 'options');
@endphp



<section class="hero">
    <div class="hero__wrapper">
            @if ($hero)
                @foreach ( $hero as $elem)
                    <div class="hero__info @if($loop->first) -is-active @endif" slide>
                        @include('layouts.components.info-block', ['data'=>$elem])
                    </div>
                @endforeach
            @endif
    </div>
    <div class="hero__overlay">
        </div>
        @if ($hero)
            @foreach ( $hero as $elem)
                <img class="hero__image @if($loop->first) -is-active @endif" slide-img src="{{$elem['img']['url']}}" >
            @endforeach
        @endif

    <div class="hero__box">
            @include('layouts.components.info-control')
    </div>
</section>
