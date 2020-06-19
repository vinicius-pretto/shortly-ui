import notes from "./readme.md";

export default {
  title: "Link",
  decorators: [],
  parameters: {
    notes
  }
};

export const Default = () => '<sui-link href="#">Resources</sui-link>';
export const VariantButton = () =>
  '<sui-link href="#" variant="button">Sign in</sui-link>';
