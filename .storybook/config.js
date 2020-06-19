import { addParameters, addDecorator } from "@storybook/html";
import { addons } from "@storybook/addons";
import storybookTheme from "./theme";

const ContainerDecorator = (storyFn) => {
  return `<div style="padding: 1rem">${storyFn()}</div>`;
};

addDecorator(ContainerDecorator);
addParameters({
  options: {
    panelPosition: "bottom",
    theme: storybookTheme,
    showRoots: true,
  },
});

addons.setConfig({
  showPanel: true,
  panelPosition: "bottom",
});
