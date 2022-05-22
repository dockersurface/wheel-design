import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { I as Icon } from './icon.js';

const wIconCss = ".semi-icon{display:inline-block;font-style:normal;line-height:0;height:1em;width:1em;text-align:center;text-transform:none;text-rendering:optimizeLegibility;fill:currentColor}.semi-icon-extra-small{font-size:8px}.semi-icon-small{font-size:12px}.semi-icon-default{font-size:16px}.semi-icon-large{font-size:20px}.semi-icon-extra-large{font-size:24px}.semi-icon-spinning{animation:0.6s linear infinite semi-icon-animation-rotate}@keyframes semi-icon-animation-rotate{from{transform:rotate(0)}to{transform:rotate(360deg)}}";

const WIconAlarm$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  render() {
    // 参数透传
    const { size, style, className, rotate, spin, type } = this;
    return (h(Icon, { svg: {
        name: 'svg',
        type: 'element',
        value: '',
        attributes: {
          viewBox: '0 0 24 24',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        children: [
          {
            name: 'path',
            type: 'element',
            value: '',
            attributes: {
              'fill-rule': 'evenodd',
              'clip-rule': 'evenodd',
              d: 'M3.47516 5.99995L5.97516 3.49995C6.66552 2.8096 6.66552 1.69031 5.97516 0.999952C5.28481 0.309596 4.16552 0.309595 3.47517 0.999952L0.975165 3.49995C0.284809 4.19031 0.284808 5.3096 0.975164 5.99995C1.66552 6.69031 2.78481 6.69031 3.47516 5.99995Z',
              fill: 'currentColor',
            },
            children: [],
          },
          {
            name: 'path',
            type: 'element',
            value: '',
            attributes: {
              'fill-rule': 'evenodd',
              'clip-rule': 'evenodd',
              d: 'M12 23C17.5229 23 22 18.5228 22 13C22 7.47711 17.5229 2.99996 12 2.99996C6.47719 2.99996 2.00004 7.47711 2.00004 13C2.00004 18.5228 6.47719 23 12 23ZM13.5 7.99996V12.0729L17 14C17.741 14.3704 18.0413 15.2715 17.6709 16.0124C17.3004 16.7534 16.3993 17.0537 15.6584 16.6832L11.3292 14.3416C10.821 14.0875 10.5 13.5681 10.5 12.9999V7.99996C10.5 7.17153 11.1716 6.49996 12 6.49996C12.8285 6.49996 13.5 7.17153 13.5 7.99996Z',
              fill: 'currentColor',
            },
            children: [],
          },
          {
            name: 'path',
            type: 'element',
            value: '',
            attributes: {
              'fill-rule': 'evenodd',
              'clip-rule': 'evenodd',
              d: 'M18.0001 3.49995L20.5001 5.99995C21.1905 6.6903 22.3098 6.6903 23.0001 5.99995C23.6905 5.30959 23.6905 4.1903 23.0001 3.49994L20.5001 0.999945C19.8098 0.309588 18.6905 0.309589 18.0001 0.999945C17.3098 1.6903 17.3098 2.80959 18.0001 3.49995Z',
              fill: 'currentColor',
            },
            children: [],
          },
        ],
      }, size: size, style: style, className: className, rotate: rotate, spin: spin, type: type }));
  }
  static get style() { return wIconCss; }
}, [1, "w-icon-alarm"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["w-icon-alarm"];
  components.forEach(tagName => { switch (tagName) {
    case "w-icon-alarm":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, WIconAlarm$1);
      }
      break;
  } });
}

const WIconAlarm = WIconAlarm$1;
const defineCustomElement = defineCustomElement$1;

export { WIconAlarm, defineCustomElement };
