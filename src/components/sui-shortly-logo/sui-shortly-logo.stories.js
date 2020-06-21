import { withKnobs, select } from "@storybook/addon-knobs";
import notes from "./readme.md";

export default {
  title: "Components/Shortly Logo",
  decorators: [withKnobs],
  parameters: {
    notes
  }
};

export const Default = () =>
  `<sui-shortly-logo color="${select("color", ["primary", "neutral"])}"/>`;
