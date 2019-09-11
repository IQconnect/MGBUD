import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";
import img from "../../resources/assets/images/line/Rectangle 141.png";
import img1 from "../../resources/assets/images/line/Rectangle 142.png";
import img2 from "../../resources/assets/images/line/Rectangle 143.png";
import img3 from "../../resources/assets/images/line/Rectangle 144.png";
import img4 from "../../resources/assets/images/line/Rectangle 145.png";

const photoline = `
<section class=" photoline">
	<div class="container">
		<div class=" photoline__box">
		<figure class="photoline__img">
			<img  class="img" src="${img}" alt="">
		</figure>
		<figure class="photoline__img">
			<img  class="img" src="${img1}" alt="">
		</figure>
		<figure class="photoline__img">
			<img  class="img" src="${img2}" alt="">
		</figure>
		<figure class="photoline__img">
			<img  class="img" src="${img3}" alt="">
		</figure>
		<figure class="photoline__img">
			<img  class="img" src="${img4}" alt="">
		</figure>
		</div>
	</div>
</section>
`;

storiesOf("Photoline", module).add(
  "photoline",
  () => `
	<h2 class="subtitle bold">Photoline</h2>
	<hr>
	  <br>
	  <br>
	  ${photoline}
	  <br>
	  <br>
	  <xmp>
	  ${photoline}
	  </xmp>
	`
);
