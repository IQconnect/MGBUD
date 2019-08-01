import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";
import img from "../../resources/assets/images/about1.png";
import check from "../../resources/assets/images/svg/check_icon.svg";

const textimg = `
<section class="section text-img">
	<div class="text-img__content container">
		<div class="text-img__imagebox">
			<img src="${img}" alt="">
		</div>
		<div class="text-img__desc text-img__desc--left">
			<header class="section__header">
				<h2 class="section-header">
					<span class="section-header__sub--left subtitle">O firmie</span>
					<span class="section-header__title--left title"> MGBUD</span>
				</h2>
			</header>
			<p class="text text--grey"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			</p>
			<ul class="text-img__checktext text--thin">
				<li><img class="text-img__icon" src="${check}" alt=""> Lorem ipsum dolor sit amet</li>
				<li><img class="text-img__icon" src="${check}" alt=""> Lorem ipsum dolor sit amet</li>
				<li><img class="text-img__icon" src="${check}" alt=""> Lorem ipsum dolor sit amet</li>
				<li><img class="text-img__icon" src="${check}" alt=""> Lorem ipsum dolor sit amet</li>
			</ul>
			</div>
		</div>
	</div>
</section>
`;

storiesOf("About", module).add(
  "O firmie",
  () => `
	<h2 class="subtitle bold">About firm</h2>
	<hr>
	  <br>
	  <br>
	  ${textimg}
	  <br>
	  <br>
	  <xmp>
	  ${textimg}
	  </xmp>
	`
);
