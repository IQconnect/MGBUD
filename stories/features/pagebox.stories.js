import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";

const pagebox = `

<section class="section">
	<div class="container">
		<div class="page-box page-box--light">
			<ul class="iconlist">
				<li class="iconlist__elem">Lorem ipsum dolor</li>
				<li class="iconlist__elem">Lorem ipsum dolor</li>
				<li class="iconlist__elem">Lorem ipsum dolor</li>
				<li class="iconlist__elem">Lorem ipsum dolor</li>
				<li class="iconlist__elem">Lorem ipsum dolor</li>
			</ul>
		</div>
	</div>
</section>
`;

storiesOf("features", module).add(
  "pagebox",
  () => `
	<h2 class="subtitle bold">features</h2>
	<hr>
	  <br>
	  <br>
	  ${pagebox}
	  <br>
	  <br>
	  <xmp>
	  ${pagebox}
	  </xmp>
	`
);
