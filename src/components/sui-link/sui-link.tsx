import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "sui-link",
  styleUrl: "sui-link.scss",
  shadow: true,
})
export class SuiLink {
  @Prop() href: string;

  render() {
    return (
      <a href={this.href}>
        <slot></slot>
      </a>
    );
  }
}
