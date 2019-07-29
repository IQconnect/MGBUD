import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";

storiesOf("Texts", module).add(
  "Small text",
  () => `
  <h2 class="subtitle">
    Small text thin
  </h2>
  <hr />
  <p class="small-text small-text--bold" style="background: #455A63">
    Lorem ipsum
  </p>
  <xmp>
    <p class="small-text small-text--bold">
      Lorem ipsum
    </p>
  </xmp>
  <br><br>
  <h2 class="subtitle">
    Small text bold
  </h2>
  <hr />
  <p class="small-text small-text--thin" style="background: #455A63">
    Lorem ipsum
  </p>
  <xmp>
    <p class="small-text small-text--thin">
      Lorem ipsum
    </p>
  </xmp>
  <br><br>
  `
);
