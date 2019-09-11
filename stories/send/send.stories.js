import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";
import img from "../../resources/assets/images/line/Rectangle 141.png";

const send = `
<section class="send">
	<div class="container">
		<div class=" send__box">
		<figure class="photoline__img">
			<img  class="img" src="${img}" alt="">
		</figure>

		</div>
	</div>
</section>
`;

storiesOf("Send", module).add(
  "send",
  () => `
	<h2 class="subtitle bold">Send us</h2>
	<hr>
	  <br>
	  <br>
	  ${send}
	  <br>
	  <br>
	  <xmp>
	  ${send}
	  </xmp>
	`
);
