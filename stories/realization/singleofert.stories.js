import { storiesOf } from "@storybook/html";
import img from "../../resources/assets/images/offer1.png";

const singleofert = `

		<article class="single-ofert">
			<figure class="single-ofert__img">
				<img  class="img" src="${img}" alt="">
			</figure>
			<div class="single-ofert__desc">
				<h3 class="single-ofert__title large-text"> Lorem ipsum dolor</h3>
				<p class="single-ofert__text text">
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				</p>
				<a class="single-ofert__button button button--buttonbg " href="">
				Dowiedz się więcej
				</a>
			</div>
		</article>
`;

storiesOf("Realization", module).add(
  "single-ofert",
  () => `
	<h2 class="subtitle bold">About firm</h2>
	<hr>
	  <br>
	  <br>
	  ${singleofert}
	  <br>
	  <br>
	  <xmp>
	  ${singleofert}
	  </xmp>
	`
);
