import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";

storiesOf("Texts", module).add(
  "Subtitle",
  () => `
  <h2 class="subtitle">
    Subtitle
  </h2>
  <hr />
  <h2 class="subtitle subtitle--dark subtitle--center">
    Lorem ipsum
  </h2>
  <xmp>
    <h2 class="subtitle subtitle--dark subtitle--center">
      Lorem ipsum
    </h2>
  </xmp>
  <br><br>
  <h2 class="subtitle">
    Subitle Light
  </h2>
  <hr />
  <h2 class="subtitle subtitle--light subtitle--left" style="background: #455A63">
    Lorem ipsum
  </h2>

  <xmp>
    <h2 class="subtitle subtitle--light subtitle--left">
      Lorem ipsum
    </h2>
  </xmp>
  <br><br>
  `
);
