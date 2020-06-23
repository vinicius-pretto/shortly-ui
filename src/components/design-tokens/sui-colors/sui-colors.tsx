import { Component, ComponentInterface, h } from "@stencil/core";
import shortlyTokens from "shortly-tokens/dist";

const colors = Object.keys(shortlyTokens)
  .filter(token => token.includes("color-"))
  .map(token => ({
    name: token,
    value: shortlyTokens[token]
  }));

@Component({
  tag: "sui-colors",
  styleUrl: "sui-colors.scss",
  shadow: true
})
export class SuiColors implements ComponentInterface {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Color</th>
            <th>Token</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {colors.map(color => (
            <tr>
              <td>
                <span
                  class="color"
                  style={{
                    backgroundColor: color.value,
                    borderColor:
                      color.value === shortlyTokens["color-white"]
                        ? shortlyTokens["color-gray-20"]
                        : color.value
                  }}
                ></span>
              </td>
              <td>{color.name}</td>
              <td>{color.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
