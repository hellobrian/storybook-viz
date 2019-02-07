import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "@storybook/react/demo";

storiesOf("Visual Tests", module).add("reports", () => (
  <ul>
    <li>{`${__dirname}/backstop_data/html_report/index.html`}</li>
    <li>
      <a href={`${__dirname}/backstop_data/html_report/index.html`}>REPORT</a>
    </li>
  </ul>
));

storiesOf("Button", module)
  .add("default", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("emoji", () => (
    <Button onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

const charmander =
  "https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png";

storiesOf("Pokemon", module).add("bulbasaur", () => (
  <img
    src="https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png"
    alt="pokemon"
  />
));
