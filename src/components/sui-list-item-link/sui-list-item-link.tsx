import { Component, ComponentInterface, h, Prop } from "@stencil/core";

@Component({
  tag: "sui-list-item-link",
  styleUrl: "sui-list-item-link.scss",
  shadow: true
})
export class SuiListItemLink implements ComponentInterface {
  @Prop() href: string;

  render() {
    return (
      <li>
        <sui-link href={this.href}>
          <slot />
        </sui-link>
      </li>
    );
  }
}
