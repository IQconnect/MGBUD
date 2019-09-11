import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";
import img from "../../resources/assets/images/offer1.png";

const offer = `
<section class="offer">
	<div class="container">
		<div class="offer__wrapper">
			<header class="section-header--addmargin section-header--center">
				<h2 class="section-header__title section-header--primary ">
					<span class="section-header__sub ">SZCZEGÓŁY OFERT</span>
					 OFERTY FIRMY
				</h2>
			</header>
				<ul class="offer__menu">
					<li class="offer__ele"><span>Lorem ipsum dolor</span></li>
					<li class="offer__ele"><span>Lorem ipsum dolor</span></li>
					<li class="offer__ele"><span>Lorem ipsum dolor</span></li>
					<li class="offer__ele"><span>Lorem ipsum dolor</span></li>
					<li class="offer__ele"><span>Lorem ipsum dolor</span></li>
				</ul>
			<div class="offer__singlebox">
				<div class="offer__textbox">
				<h3 class="content-header content-header__left"> Lorem ipsum dolor</h3>
					<p class="">
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</p>
					<a class="button button--buttonbg" href="">Dowiedz się więcej</a>
				</div>
				<figure class="text-img__imagebox">
						<img class="img" src="${img}" alt="">
				</figure>
			</div>
		<div>
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
