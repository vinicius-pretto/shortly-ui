import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "sui-card",
  styleUrl: "sui-card.scss",
  shadow: true
})
export class SuiCard implements ComponentInterface {
  @Prop() cardTitle: string;
  @Prop() description: string;

  render() {
    return (
      <div class="card">
        <div class="avatar">
          <slot />
        </div>

        <h3>{this.cardTitle}</h3>
        <p>{this.description}</p>
      </div>
    );
  }
}
