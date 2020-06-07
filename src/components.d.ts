/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SuiButton {
        "type": string;
    }
    interface SuiLink {
        "href": string;
    }
}
declare global {
    interface HTMLSuiButtonElement extends Components.SuiButton, HTMLStencilElement {
    }
    var HTMLSuiButtonElement: {
        prototype: HTMLSuiButtonElement;
        new (): HTMLSuiButtonElement;
    };
    interface HTMLSuiLinkElement extends Components.SuiLink, HTMLStencilElement {
    }
    var HTMLSuiLinkElement: {
        prototype: HTMLSuiLinkElement;
        new (): HTMLSuiLinkElement;
    };
    interface HTMLElementTagNameMap {
        "sui-button": HTMLSuiButtonElement;
        "sui-link": HTMLSuiLinkElement;
    }
}
declare namespace LocalJSX {
    interface SuiButton {
        "type"?: string;
    }
    interface SuiLink {
        "href"?: string;
    }
    interface IntrinsicElements {
        "sui-button": SuiButton;
        "sui-link": SuiLink;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sui-button": LocalJSX.SuiButton & JSXBase.HTMLAttributes<HTMLSuiButtonElement>;
            "sui-link": LocalJSX.SuiLink & JSXBase.HTMLAttributes<HTMLSuiLinkElement>;
        }
    }
}
