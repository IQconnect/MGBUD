<header class="header" header>
  <div class="container">
    <div class="header__wraper">
      <div class="header__logo">
        <a class="header__img" href="{{ home_url('/') }}">
          <img class="img img--contain" src="{{ get_option_field("logo")['url'] }}" alt="{{ get_option_field("logo")['alt'] }}">
        </a>
      </div>
      <ul class="header__social">
          @foreach (  get_option_field("icons")  as $item)
          <li class="header__social--ele"><a href="{!!  $item['link'] !!}" alt="{!!  $item['link'] !!}"><i class="{!!  $item['icon'] !!}"></i></a></li>
      @endforeach
    </ul>
      <button class="header__hamburger hamburger" data-toggle-menu>
          <span class="hamburger__line"></span>
          <span class="hamburger__line"></span>
          <span class="hamburger__line"></span>
        </button>
      <div class="header__menu" data-nav >
        <div class="header__contact">
          <p class="header__contact--ele"> TELEFON :  <a href="" alt="">{{ get_option_field('telhead') }}</a></p>
          <p class="header__contact--ele"> EMAIL :  <a href="" alt="">{{ get_option_field('emailhead') }}</a></p>
        </div>
        <nav class="header__nav"  >
              @if (has_nav_menu('primary_navigation'))
              {!! wp_nav_menu(
                [
                  'theme_location' => 'primary_navigation',
                  'menu_class' => 'list',
                ]) !!}
            @endif
        </nav>
      </div>
    </div>
  </div>
</header>
