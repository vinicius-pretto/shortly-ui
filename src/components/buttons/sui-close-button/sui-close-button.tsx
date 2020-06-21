import { Component, ComponentInterface, h } from "@stencil/core";
import shortlyTokens from "shortly-tokens/dist";

@Component({
  tag: "sui-close-button",
  styleUrl: "sui-close-button.scss",
  shadow: true
})
export class SuiCloseButton implements ComponentInterface {
  render() {
    return (
      <button type="button">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.3125 8.5625L17.875 16L25.3125 23.4375L23.4375 25.3125L16 17.875L8.5625 25.3125L6.6875 23.4375L14.125 16L6.6875 8.5625L8.5625 6.6875L16 14.125L23.4375 6.6875L25.3125 8.5625Z"
            fill={shortlyTokens["color-dark"]}
          />
        </svg>
      </button>
    );
  }
}
