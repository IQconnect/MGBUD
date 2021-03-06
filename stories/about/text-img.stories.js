import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";
import img from "../../resources/assets/images/about1.png";

const textimg = `
<section class="text-img">
	<div class="container">
		<div class="text-img__wrapper">
			<figure class="text-img__imagebox">
				<img class="img" src="${img}" alt="">
			</figure>
			<div class="text-img__textbox">
				<header class="section-header section-header--addmargin section-header--left section-header--primary">
					<h2 class="section-header__title">
						<span class="section-header__sub">O FIRMIE</span>
						 MGBUD
					</h2>
				</header>
				<p class="text-img__desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</p>
				<ul class="text-img__checktext">
					<li class="text-img__checktext--ele"> Lorem ipsum dolor sit amet</li>
					<li class="text-img__checktext--ele"> Lorem ipsum dolor sit amet</li>
					<li class="text-img__checktext--ele"> Lorem ipsum dolor sit amet</li>
					<li class="text-img__checktext--ele"> Lorem ipsum dolor sit amet</li>
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
