import { storiesOf } from "@storybook/html";
import hamb from "../../resources/assets/scripts/components/hamburger";
import "../../resources/assets/styles/main.scss";
import logo from "../../resources/assets/images/logo.jpg";

const header = `
  <header class="header">
    <div class="container">
      <div class="header__wraper">
        <a class="header__logo">
            <img class="img img--contain" src="${logo}">
        </a>
        <div class="header__menu">
          <div class="header__contact">
            <p class="header__contact"> Telefon: <a href="" alt="">+48 512 312 365</a></p>
            <p class="header__contact"> Email: <a href="" alt="">asd@gmail.com</a></p>
          </div>
          <button class="header__hamburger hamburger" data-toggle-menu>
            <span class="hamburger__line"></span>
            <span class="hamburger__line"></span>
            <span class="hamburger__line"></span>
          </button>
          <nav data-nav>
            <ul class="list">
              <li class="header__nav--ele list--round"">
                <a href="" alt="">STRONA GŁÓWNA</a>
              </li>
              <li class="header__nav--ele"><a href="" alt="">O FIRMIE</a>
              </li>
              <li class="header__nav--ele"><a href="" alt="">OFERTA</a>
              </li>
              <li class="header__nav--ele" ><a href="" alt="">REALIZACJE</a>
              </li>
              <li class="header__nav--ele"><a href="" alt="">KONTAKT</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
`;

storiesOf("Menu", module).add("header", () => {
  document.addEventListener("DOMContentLoaded", function() {
    hamb.init();
  });

  return `
  <h2 class="subtitle bold">Header</h2>
  <hr>
    <br>
    <br>
    ${header}
    <br>
    <br>
    <xmp>
    ${header}
    </xmp>
    `;
});
