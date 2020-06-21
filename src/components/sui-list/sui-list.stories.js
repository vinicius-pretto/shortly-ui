import notes from "./readme.md";

export default {
  title: "Components/List",
  decorators: [],
  parameters: {
    notes
  }
};

export const Default = () => {
  return `<sui-list>
      <sui-list-item-link href="#">Link Shortening</sui-list-item-link>
      <sui-list-item-link href="#">Branded Links</sui-list-item-link>
      <sui-list-item-link href="#">Analytics</sui-list-item-link>
     </sui-list>
    `;
};
