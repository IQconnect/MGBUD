import { storiesOf } from "@storybook/html";
import hamb from "../../resources/assets/scripts/components/hamburger";
import "../../resources/assets/styles/main.scss";
import logo from "../../resources/assets/images/iq-connect.png";

const footer = `
  <footer class="footer">
    <div class="container">
        <div class="footer__info">
          <div class="footer__column">
            <h4 class="footer__column--title">
            O nas
            </h4>
            <ul class="footer__list">
              <li class="footer__list--subtitle">MGBUD SP Z O.O.</li>
              <li class="footer__list--ele">Ul. Ks. J. Popiełuszki 26/28</br>
              10-693 Olsztyn</br>
              <a class="footer__list--anchor" href="">www.mgbud.pl</a>
              </li>
              <li class="footer__list--ele">Email</br>
              biuro@mgbud.pl
              </li>
              <li class="footer__list--ele">Telefon</br>
              +48 694 428 741
              </li>
            </ul>
          </div>
          <div class="footer__column">
          <h4 class="footer__column--title">
            Nawigacja
            </h4>
            <ul class="footer__list">
              <li class="footer__list--ele">STRONA GŁÓWNA</li>
              <li class="footer__list--ele">O FIRMIE</li>
              <li class="footer__list--ele">OFERTA</li>
              <li class="footer__list--ele">REALIZACJE</li>
              <li class="footer__list--ele">KONTAKT</li>
            </ul>
          </div>
          <div class="footer__column">
          <h4 class="footer__column--title">
          Znajdź nas
            </h4>
              <ul class="footer__list">
              <li><i class="fa fa-facebook-official"></i></li>
              <li><i class="fa fa-youtube-play"></i></li>
            </ul>
          </div>
        </div>
        <div class="footer__firmbar">
          <div class="footer__textbar">
            <p>MG-BUD © 2019 Wszystkie prawa zastrzeżone</p>
            <p class="footer__textbar--cookie">Strona wykorzystuje pliki cookies dla lepszego działania. Korzystając ze strony godzisz się na to.</p>
          </div>
          <figure class="footer__logo">
            <img class="img img--contain" src="${logo}">
          </figure>
        </div>
      </div>
    </div>
  </footer>
`;

storiesOf("Footer", module).add("footer", () => {
  document.addEventListener("DOMContentLoaded", function() {
    hamb.init();
  });

  return `
  <h2 class="subtitle bold">Header</h2>
  <hr>
    <br>
    <br>
    ${footer}
    <br>
    <br>
    <xmp>
    ${footer}
    </xmp>
    `;
});
