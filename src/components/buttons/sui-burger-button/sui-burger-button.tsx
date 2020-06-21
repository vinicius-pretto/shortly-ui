import { Component, ComponentInterface, h } from "@stencil/core";
import shortlyTokens from "shortly-tokens/dist";

@Component({
  tag: "sui-burger-button",
  styleUrl: "sui-burger-button.scss",
  shadow: true
})
export class SuiBurgerButton implements ComponentInterface {
  render() {
    return (
      <button type="button">
        <svg
          width="32"
          height="22"
          viewBox="0 0 32 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.25 0.5H31.75V4.02734H0.25V0.5ZM0.25 12.7227V9.27734H31.75V12.7227H0.25ZM0.25 21.5V17.9727H31.75V21.5H0.25Z"
            fill={shortlyTokens["color-violet-light"]}
          />
        </svg>
      </button>
    );
  }
}
