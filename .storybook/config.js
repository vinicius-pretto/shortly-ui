import { addParameters } from "@storybook/html";
import storybookTheme from "./theme";

addParameters({
  options: {
    panelPosition: "bottom",
    theme: storybookTheme,
    showRoots: true,
  },
});
