import { Component, ComponentInterface, h } from "@stencil/core";

@Component({
  tag: "sui-list",
  styleUrl: "sui-list.scss",
  shadow: true
})
export class SuiList implements ComponentInterface {
  render() {
    return (
      <ul>
        <slot />
      </ul>
    );
  }
}
