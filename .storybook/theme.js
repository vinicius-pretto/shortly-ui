import { create } from "@storybook/theming";
import shortlyTokens from "shortly-tokens/dist";

export default create({
  base: "dark",

  fontBase: "Poppins, sans-serif",

  appBg: shortlyTokens["color-secondary"],
  appContentBg: shortlyTokens["color-white"],
  appBorderRadius: 0,

  colorPrimary: shortlyTokens["color-primary"],
  colorSecondary: shortlyTokens["color-primary"],

  barTextColor: shortlyTokens["color-white"],
  barSelectedColor: shortlyTokens["color-primary"],
  barBg: shortlyTokens["color-secondary"],

  textColor: shortlyTokens["color-white"],
  textInverseColor: shortlyTokens["color-primary"],

  brandTitle: "Shortly UI",
  brandUrl: "/",
  brandImage: "/shortly-logo.png",
});
