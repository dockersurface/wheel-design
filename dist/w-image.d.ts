import type { Components, JSX } from "./types/components";

interface WImage extends Components.WImage, HTMLElement {}
export const WImage: {
  prototype: WImage;
  new (): WImage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
