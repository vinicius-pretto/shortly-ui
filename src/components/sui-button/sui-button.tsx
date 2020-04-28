import { Component, h } from "@stencil/core";

@Component({
  tag: "sui-button",
  styleUrl: "sui-button.css",
  shadow: true,
})
export class Button {
  render() {
    return (
      <button>
        <slot />
      </button>
    );
  }
}
