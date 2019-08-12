import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";

const button = `
	<a class="button button--buttonbg" href="">Dowiedz się więcej<a>
`;

storiesOf("button", module).add(
  "button",
  () => `
	<h2 class="subtitle bold">button</h2>
	<hr>
	  <br>
	  <br>
	  ${button}
	  <br>
	  <br>
	  <xmp>
	  ${button}
	  </xmp>
	`
);
