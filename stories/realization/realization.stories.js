import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";
import img from "../../resources/assets/images/offer1.png";

const realization = `
<section class="realization">
	<div class="container">
		<header class="section-header--center section-header--addmargin">
			<h2 class="section-header__title section-header--primary ">
				<span class="section-header__sub ">NASZE WYKONANIA</span>
					REALIZACJE
			</h2>
		</header>
		<div class="realization__box">
			<article class="single-realization">
				<figure class="single-realization__img">
					<img  class="img" src="${img}" alt="">
				</figure>
				<div class="single-realization__textbox">
					<h3 class="content-header__left single-realization__textbox--primary"> Lorem ipsum dolor</h3>
					<p class="single-realization__desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</p>
					<a class="single-realization__button button button--buttonbg " href="">
					Dowiedz się więcej
					</a>
				</div>
			</article>
			<article class="single-realization">
				<figure class="single-realization__img">
					<img  class="img" src="${img}" alt="">
				</figure>
				<div class="single-realization__textbox">
					<h3 class="content-header__left single-realization__textbox--primary"> Lorem ipsum dolor</h3>
					<p class="single-realization__desc">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</p>
					<a class="single-realization__button button button--buttonbg " href="">
					Dowiedz się więcej
					</a>
				</div>
			</article>
		</div>
	</div>
</section>
`;

storiesOf("Realization", module).add(
  "realization",
  () => `
	<h2 class="subtitle bold">Realization</h2>
	<hr>
	  <br>
	  <br>
	  ${realization}
	  <br>
	  <br>
	  <xmp>
	  ${realization}
	  </xmp>
	`
);
