import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";
import slaid from "../../resources/assets/images/slaid1.png";

const slaider = `
<section class="hero">
<div class="container">
<div class="carousel-cell>
	<img src="${slaid}" alt="">
	</div>
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
