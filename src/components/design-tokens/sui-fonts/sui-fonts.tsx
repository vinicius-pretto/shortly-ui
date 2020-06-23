import { Component, ComponentInterface, h } from "@stencil/core";

@Component({
  tag: "sui-fonts",
  styleUrl: "sui-fonts.scss",
  shadow: true
})
export class SuiFonts implements ComponentInterface {
  render() {
    return (
      <div>
        <h1>Shortly</h1>
        <h2>Shortly</h2>
        <h3>Shortly</h3>
        <h4>Shortly</h4>
        <h5>Shortly</h5>
      </div>
    );
  }
}
