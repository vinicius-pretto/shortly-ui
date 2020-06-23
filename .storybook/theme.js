import { create } from "@storybook/theming";
import shortlyTokens from "shortly-tokens/dist";

export default create({
  base: "light",

  colorPrimary: shortlyTokens["color-secondary"],
  colorSecondary: shortlyTokens["color-primary"],

  fontBase: "Helvetica, sans-serif",

  appBg: shortlyTokens["color-secondary"],
  appBorderRadius: 6,

  inputTextColor: shortlyTokens["color-white"],
  inputBg: shortlyTokens["color-secondary"],

  brandTitle: "Shortly UI",
  brandUrl: "/",
  brandImage: "https://storage.cloud.google.com/shortly/shortly-logo.png"
});
