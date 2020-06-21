import { Component, ComponentInterface, h } from "@stencil/core";

@Component({
  tag: "sui-social-media-links",
  styleUrl: "sui-social-media-links.scss",
  shadow: true
})
export class SuiSocialMediaLinks implements ComponentInterface {
  render() {
    const socialMedias = [
      {
        href: "#",
        ariaLabel: "Facebook",
        icon: <sui-facebook-icon />
      },
      {
        href: "#",
        ariaLabel: "Twitter",
        icon: <sui-twitter-icon />
      },
      {
        href: "#",
        ariaLabel: "Pinterest",
        icon: <sui-pinterest-icon />
      },
      {
        href: "#",
        ariaLabel: "Instagram",
        icon: <sui-instagram-icon />
      }
    ];

    return (
      <ul>
        {socialMedias.map(socialMedia => (
          <li>
            <a href={socialMedia.href} aria-label={socialMedia.ariaLabel}>
              {socialMedia.icon}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
