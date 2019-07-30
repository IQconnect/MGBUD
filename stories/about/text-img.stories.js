import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";
import img from "../../resources/assets/images/about1.png";

const slaider = `
<section class="section text-image">
	<div class="container">
		<img src="${img}" alt="">
		<header class="section__header">
		<h2 class="section-header">
		<span class="section-header__title title"> MGBUD</span>
		<span class="section-header__sub subtitle">O firmie</span>
		</h2>
		</header>
		<p class="text"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
		</p>
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
