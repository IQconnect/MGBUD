import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";

storiesOf("Texts", module).add(
  "Text",
  () => `
  <h2 class="subtitle">
    Text light
  </h2>
  <hr />
  <p style="background: #455A63" class="text text--light">
    Lorem ipsum
  </p>
  <xmp>
    <p class="text text--light">
      Lorem ipsum
    </p>
  </xmp>
  <br><br>
  <h2 class="subtitle">
    Text grey
  </h2>
  <hr />
  <p class="text text--grey">
    Lorem ipsum
  </p>
  <xmp>
    <p class="text text--grey">
      Lorem ipsum
    </p>
  </xmp>
  <br><br>
  <h2 class="subtitle">
    Text left
  </h2>
  <hr />
  <p class="text text--left">
    Lorem ipsum
  </p>
  <xmp>
    <p class="text text--left">
      Lorem ipsum
    </p>
  </xmp>
  <br><br>
  <h2 class="subtitle">
    Text center
  </h2>
  <hr />
  <p class="text text--center">
    Lorem ipsum
  </p>
  <xmp>
    <p class="text text--center">
      Lorem ipsum
    </p>
  </xmp>
  <br><br>
  <h2 class="subtitle">
    Text Light
  </h2>
  <hr />
  <p class="text text--light" style="background: #364ea2">
    Lorem ipsum
  </p>
  <xmp>
    <p class="text text--light">
      Lorem ipsum
    </p>
  </xmp>
  <br><br>
  <h2 class="subtitle">
    Text Thin
  </h2>
  <hr />
  <p class="text text--thin">
    Lorem ipsum
  </p>
  <xmp>
    <p class="text text--thin">
      Lorem ipsum
    </p>
  </xmp>
  <br><br>
  `
);
