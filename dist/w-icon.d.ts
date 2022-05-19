import type { Components, JSX } from "./types/components";

interface WIcon extends Components.WIcon, HTMLElement {}
export const WIcon: {
  prototype: WIcon;
  new (): WIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
