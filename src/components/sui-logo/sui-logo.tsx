import { Component, h, getAssetPath } from "@stencil/core";

@Component({
  tag: "sui-logo",
  styleUrl: "sui-logo.css",
  shadow: true,
  assetsDirs: ["assets"],
})
export class Logo {
  imageName = "logo.svg";

  render() {
    return (
      <a href="#">
        <img
          src={getAssetPath(`./assets/${this.imageName}`)}
          alt="Shortly logo"
        />
      </a>
    );
  }
}
