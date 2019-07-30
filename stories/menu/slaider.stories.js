import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";
import asd from "../../resources/assets/images/s1.png";

const slaider = `
<section class="hero">
<div class="container">

	<img src="${asd}" alt="">
</div>
</section>
`;

storiesOf("Menu", module).add(
  "slaider",
  () => `
	<h2 class="subtitle bold">Slaider</h2>
	<hr>
	  <br>
	  <br>
	  ${slaider}
	  <br>
	  <br>
	  <xmp>
	  ${slaider}
	  </xmp>
	`
);
