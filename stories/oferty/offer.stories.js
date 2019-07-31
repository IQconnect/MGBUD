import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";
import img from "../../resources/assets/images/about1.png";
import check from "../../resources/assets/images/svg/check_icon.svg";

const offer = `
<section class="section offer">
	<div class="offer__container container">
		<ul class="offer__menu small-text small-text--bold small-text--dark">
		<li><span>Lorem ipsum dolor</span></li>
		<li><span>Lorem ipsum dolor</span></li>
		<li><span>Lorem ipsum dolor</span></li>
		<li><span>Lorem ipsum dolor</span></li>
		<li><span>Lorem ipsum dolor</span></li>
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
