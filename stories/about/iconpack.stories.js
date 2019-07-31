import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";
import house from "../../resources/assets/images/svg/house_icon.svg";

const iconpack = `
<section class="section iconspack">
	<div class="iconpack container">
	<ul class="iconpack__row small-text small-text--bold small-text--dark">
	<li><img class="iconpack__icons" src="${house}" alt=""><span>Lorem ipsum dolor</span></li>
	<li><img class="iconpack__icons" src="${house}" alt=""><span>Lorem ipsum dolor</span></li>
	<li><img class="iconpack__icons" src="${house}" alt=""><span>Lorem ipsum dolor</span></li>
	<li><img class="iconpack__icons" src="${house}" alt=""><span>Lorem ipsum dolor</span></li>
	<li><img class="iconpack__icons" src="${house}" alt=""><span>Lorem ipsum dolor</span></li>
	</div>
</section>
`;

storiesOf("About", module).add(
  "Sekcja ikon",
  () => `
	<h2 class="subtitle bold">About firm</h2>
	<hr>
	  <br>
	  <br>
	  ${iconpack}
	  <br>
	  <br>
	  <xmp>
	  ${iconpack}
	  </xmp>
	`
);
