import notes from "./readme.md";

export default {
  title: "Components/Card",
  decorators: [],
  parameters: {
    notes
  }
};

const props = {
  cardTitle: "Brand Recognition",
  description:
    "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
};

export const Default = () => {
  return `<sui-card card-title="${props.cardTitle}" description="${props.description}">
    <sui-statistics-icon></sui-statistics-icon>
  </sui-card>`;
};
