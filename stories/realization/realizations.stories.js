import { storiesOf } from "@storybook/html";

import "../../resources/assets/styles/main.scss";

const realization = `
<section class="section realizations">
	<div class="realizations__content container">

	</div>
</section>
`;

storiesOf("Realization", module).add(
  "realization",
  () => `
	<h2 class="subtitle bold">About firm</h2>
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
