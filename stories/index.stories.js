import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "@storybook/react/demo";

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
