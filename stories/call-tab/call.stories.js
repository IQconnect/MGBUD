import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";
import img from "../../resources/assets/images/offer1.png";

const call = `
<section class="call">
	<figure class="call__bg">
		<img class="img" src="${img}" alt="">
	</figure>
	<div class="container">
		<div class="call__wrapper">
			<header class="call__title">
				<h2 class="section-header--center call__desc">
					<span class="section-header__headline section-header--addmargin">Zadzwoń do nas</span>
					<span class="section-header__title">+48 694 428 741</span>
					<a class="button button--buttonbg " href="">Dowiedz się więcej</a>
				</h2>

			</header>

		</div>
	</div>
</section>
`;

storiesOf("call-tab", module).add(
  "call",
  () => `
	<h2 class="subtitle bold">Realization</h2>
	<hr>
	  <br>
	  <br>
	  ${call}
	  <br>
	  <br>
	  <xmp>
	  ${call}
	  </xmp>
	`
);
