import { storiesOf } from "@storybook/html";
import hamb from "../../resources/assets/scripts/components/hamburger";
import "../../resources/assets/styles/main.scss";
import logo from "../../resources/assets/images/logo.jpg";

const footer = `
  <footer class="footer">
    <div class="container">
      <div class="header__wraper">


          <div class="footer__firm">
          <p>MG-BUD © 2019 Wszystkie prawa zastrzeżone</p>
          <p>Strona wykorzystuje pliki cookies dla lepszego działania. Korzystając ze strony godzisz się na to.</p>
          </div>
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
