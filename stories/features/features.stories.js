import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";
import img from "../../resources/assets/images/features1.jpg";

const features = `

<section class="features">
	<figure class="features__bg">
		<img class="img" src="${img}" alt="">
	</figure>
	<div class="container">
		<div class="features__wrapper">
				<div class="page-box page-box--light">
					<ul class="iconlist">
						<li class="iconlist__elem">Lorem ipsum dolor</li>
						<li class="iconlist__elem">Lorem ipsum dolor</li>
						<li class="iconlist__elem">Lorem ipsum dolor</li>
						<li class="iconlist__elem">Lorem ipsum dolor</li>
						<li class="iconlist__elem">Lorem ipsum dolor</li>
					</ul>
				</div>
			<header class="section-header section-header--left features__title">
				<h2 class="section-header__title">
					<span class="section-header__sub ">NASZE CECHY</span>
					DLACZEGO WARTO NAM ZAUFAĆ
				</h2>
			</header>
		</div>
	</div>
</section>
`;

storiesOf("features", module).add(
  "features",
  () => `
	<h2 class="subtitle bold">features</h2>
	<hr>
	  <br>
	  <br>
	  ${features}
	  <br>
	  <br>
	  <xmp>
	  ${features}
	  </xmp>
	`
);
