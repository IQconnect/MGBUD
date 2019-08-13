import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";
import house from "../../resources/assets/images/svg/house_icon.svg";

const iconpack = `
<section class="iconspack">
	<div class="container">
	<ul class="iconpack__wrapper">
	<li class="iconpack__ele"><img class="iconpack__icons" src="${house}" alt="">
	<span class="iconpack__desc">Lorem ipsum dolor</span>
	</li>
	<li class="iconpack__ele"><img class="iconpack__icons" src="${house}" alt="">
	<span class="iconpack__desc">Lorem ipsum dolor</span>
	</li>
	<li class="iconpack__ele"><img class="iconpack__icons" src="${house}" alt="">
	<span class="iconpack__desc">Lorem ipsum dolor</span>
	</li>
	<li class="iconpack__ele"><img class="iconpack__icons" src="${house}" alt="">
	<span class="iconpack__desc">Lorem ipsum dolor</span>
	</li>
	<li class="iconpack__ele"><img class="iconpack__icons" src="${house}" alt="">
	<span class="iconpack__desc">Lorem ipsum dolor</span>
	</li>
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
