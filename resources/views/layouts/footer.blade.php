  @php
       $title=get_option_field('footer_title');
       $firm=get_option_field('footer_firm');
       $address=get_option_field('footer_address');
       $postcode=get_option_field('footer_postcode');
       $address=get_option_field('footer_address');
       $postcode=get_option_field('footer_postcode');
       $link=get_option_field('footer_link');
       $telephone=get_option_field('telhead');
       $email=get_option_field('emailhead');
  @endphp

  <footer class="footer">
    <div class="container">
        <div class="footer__info">
          <div class="footer__column">
            <h4 class="footer__column--title">
            {{ $title }}
            </h4>
            <ul class="footer__list">
              <li class="footer__list--subtitle">{{ $firm }}</li>
              <li class="footer__list--ele">{{ $address }}</br>
                {{ $postcode }}</br>
              <a class="footer__list--anchor" href="">{{ $link }}</a>
              </li>
              <li class="footer__list--ele">Email</br>
                {{ $email }}
              </li>
              <li class="footer__list--ele">Telefon</br>
                {{ $telephone }}
              </li>
            </ul>
          </div>
          <div class="footer__column">
          <h4 class="footer__column--title">
            Nawigacja
            </h4>
            <ul class="footer__list">
              <li class="footer__list--ele footer__list--hover"><a href="">STRONA GŁÓWNA</a></li>
              <li class="footer__list--ele footer__list--hover"><a href="">O FIRMIE</a></li>
              <li class="footer__list--ele footer__list--hover"><a href="">OFERTA</a></li>
              <li class="footer__list--ele footer__list--hover"><a href="">REALIZACJE</a></li>
              <li class="footer__list--ele footer__list--hover"><a href="">KONTAKT</a></li>
            </ul>
          </div>
          <div class="footer__column">
          <h4 class="footer__column--title">
          Znajdź nas
            </h4>
              <ul class="footer__social">
                  @foreach (  get_option_field("icons")  as $item)
                  <li class="footer__social--el"><a href="{!!  $item['link'] !!}" alt="{!!  $item['link'] !!}"><i class="{!!  $item['icon'] !!}"></i></a></li>
              @endforeach
            </ul>
          </div>
        </div>
        <div class="footer__firmbar">
          <div class="footer__textbar">
            <p>MG-BUD © 2019 Wszystkie prawa zastrzeżone</p>
            <p class="footer__textbar--cookie">Strona wykorzystuje pliki cookies dla lepszego działania. Korzystając ze strony godzisz się na to.</p>
          </div>
          <figure class="footer__logo">
            <a href="https://iqconnect.pl/"><img class="img img--contain" src="{{ get_option_field("IQlogo")['url'] }}" alt="{{ get_option_field("logo")['alt'] }}"></a>
          </figure>
        </div>
      </div>
    </div>
  </footer>
