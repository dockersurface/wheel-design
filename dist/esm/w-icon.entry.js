import { r as registerInstance, h } from './index-1a53a42a.js';
import { I as Icon } from './icon-ccdc6c1a.js';
import './index-62f9e168.js';

const wIconCss = ".semi-icon{display:inline-block;font-style:normal;line-height:0;height:1em;width:1em;text-align:center;text-transform:none;text-rendering:optimizeLegibility;fill:currentColor}.semi-icon-extra-small{font-size:8px}.semi-icon-small{font-size:12px}.semi-icon-default{font-size:16px}.semi-icon-large{font-size:20px}.semi-icon-extra-large{font-size:24px}.semi-icon-spinning{animation:0.6s linear infinite semi-icon-animation-rotate}@keyframes semi-icon-animation-rotate{from{transform:rotate(0)}to{transform:rotate(360deg)}}";

const WIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Icon, { svg: {
        name: 'svg',
        type: 'element',
        value: '',
        attributes: { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        children: [
          {
            name: 'path',
            type: 'element',
            value: '',
            attributes: {
              'fill-rule': 'evenodd',
              'clip-rule': 'evenodd',
              d: 'M13.5 5.91523V3C13.5 2.17157 12.8284 1.5 12 1.5C11.1715 1.5 10.5 2.17157 10.5 3V5.91523L9.24419 5.19764C8.52491 4.78662 7.60863 5.03652 7.19761 5.75579C6.7866 6.47507 7.03649 7.39135 7.75577 7.80236L11.2558 9.80236C11.7169 10.0659 12.283 10.0659 12.7442 9.80236L16.2442 7.80236C16.9635 7.39135 17.2134 6.47507 16.8023 5.75579C16.3913 5.03652 15.475 4.78662 14.7558 5.19764L13.5 5.91523ZM4.5 13.5C3.67157 13.5 3 12.8284 3 12C3 11.1716 3.67157 10.5 4.5 10.5L19.5 10.5C20.3284 10.5 21 11.1716 21 12C21 12.8284 20.3284 13.5 19.5 13.5L4.5 13.5ZM13.5 18.0848L14.7558 18.8024C15.475 19.2134 16.3913 18.9635 16.8023 18.2442C17.2134 17.5249 16.9635 16.6087 16.2442 16.1976L12.7442 14.1976C12.283 13.9341 11.7169 13.9341 11.2558 14.1976L7.75577 16.1976C7.03649 16.6087 6.7866 17.5249 7.19761 18.2442C7.60863 18.9635 8.52491 19.2134 9.24419 18.8024L10.5 18.0848L10.5 21C10.5 21.8284 11.1716 22.5 12 22.5C12.8284 22.5 13.5 21.8284 13.5 21V18.0848Z',
              fill: 'currentColor',
            },
            children: [],
          },
        ],
      } }));
  }
};
WIcon.style = wIconCss;

export { WIcon as w_icon };
