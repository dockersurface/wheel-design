import type { Components, JSX } from "./types/components";

interface WIconAlarm extends Components.WIconAlarm, HTMLElement {}
export const WIconAlarm: {
  prototype: WIconAlarm;
  new (): WIconAlarm;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
