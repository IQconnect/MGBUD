import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";
import img from "../../resources/assets/images/offer1.png";

const offer = `
<section class="section section--bgrey offer">
	<div class="offer__container container">
		<header class="section__header">
			<h2 class="section-header">
				<span class="section-header__sub subtitle">Szczególy ofert</span>
				<span class="section-header__title title"> Oferty firmy</span>
			</h2>
		</header>
			<ul class="offer__menu small-text small-text--bold small-text--dark">
				<li><span>Lorem ipsum dolor</span></li>
				<li><span>Lorem ipsum dolor</span></li>
				<li><span>Lorem ipsum dolor</span></li>
				<li><span>Lorem ipsum dolor</span></li>
				<li><span>Lorem ipsum dolor</span></li>
			</ul>
		<div class="offer__box">
			<div class="text-img__desc">
			<h3 class="section-header__title--left large-text large-text--primary"> Lorem ipsum dolor</h3>
				<p class="text text--grey">
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</p>
			</div>
			<div class="text-img__imagebox">
					<img src="${img}" alt="">
			</div>
		</div>
	</div>
</section>
`;

storiesOf("offer", module).add(
  "Offer",
  () => `
	<h2 class="subtitle bold">Offer</h2>
	<hr>
	  <br>
	  <br>
	  ${offer}
	  <br>
	  <br>
	  <xmp>
	  ${offer}
	  </xmp>
	`
);
