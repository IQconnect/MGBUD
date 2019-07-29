import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";
import logo from "../../resources/assets/images/logo.jpg";

const header = `
  <header class="header">
    <div class="container">
      <div class="header__wraper">
        <div class="header__leftside">
          <a>
            <img class="header__img" src="${logo}">
          </a>
        </div>
        <div class="header__menu">
          <div class="header__contact">
            <p class="header__contact--spacefirst"> Telefon: <a href="" alt="">+48 512 312 365</a></p>
            <p class="header__contact--spacesecond"> Email: <a href="" alt="">asd@gmail.com</a></p>
          </div>
          <nav class="header__nav">
            <ul class="list">
              <li class="list__elem list__elem--round"">
                <a href="" alt="">STRONA GŁÓWNA</a>
              </li>
              <li class="list__elem"><a href="" alt="">O FIRMIE</a>
              </li>
              <li class="list__elem"><a href="" alt="">OFERTA</a>
              </li>
              <li class="list__elem"><a href="" alt="">REALIZACJE</a>
              </li>
              <li class="list__elem"><a href="" alt="">KONTAKT</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
`;

storiesOf("Menu", module).add(
  "header",
  () => `
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
  `
);
