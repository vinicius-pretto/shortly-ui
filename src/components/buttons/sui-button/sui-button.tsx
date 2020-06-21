import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "sui-button",
  styleUrl: "sui-button.scss",
  shadow: true,
})
export class Button {
  @Prop() type: string;

  render() {
    return (
      <button type={this.type}>
        <slot />
      </button>
    );
  }
}
