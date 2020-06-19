import notes from "./readme.md";

export default {
  title: "Button",
  decorators: [],
  parameters: {
    notes
  }
};

export const Default = () =>
  '<sui-button type="button">Click here</sui-button>';
