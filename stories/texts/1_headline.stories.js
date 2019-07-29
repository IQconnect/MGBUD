import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";

storiesOf("Texts", module).add(
  "Headline",
  () => `
  <h2 class="subtitle">
    Headline
  </h2>
  <hr />
  <p style="background: #455A63" class="headline" >Lorem ipsum</p>
  <xmp>
    <p class="headline">
      Lorem ipsum
    </p>
  </xmp>
  <br><br>
  `
);
