import { create } from "@storybook/theming";
import shortlyTokens from "shortly-tokens/dist";

export default create({
  base: "dark",

  fontBase: "Poppins, sans-serif",

  appBg: shortlyTokens["color-secondary"],
  appContentBg: shortlyTokens["color-white"],
  appBorderRadius: 0,

  colorPrimary: shortlyTokens["color-secondary"],
  colorSecondary: shortlyTokens["color-primary"],

  barTextColor: shortlyTokens["color-white"],
  barSelectedColor: shortlyTokens["color-secondary"],
  barBg: shortlyTokens["color-violet-light"],

  textColor: shortlyTokens["color-black"],
  textInverseColor: shortlyTokens["color-secondary"],

  inputTextColor: shortlyTokens["color-black"],

  brandTitle: "Shortly UI",
  brandUrl: "/",
  brandImage: "/shortly-logo.png",
});
