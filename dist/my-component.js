import { getElement, proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { f as format } from './utils.js';

function isDefined(value) {
  return !!value;
}

function hostClasses(settings = { componentName: '' }) {
  let modifier = [];
  // read modifiers as object
  if (typeof settings.modifier === 'object') {
    const modifierTmp = settings.modifier.filter(isDefined);
    // find prop modifier 'small forward'
    modifierTmp.forEach((_modifier_) => {
      modifier = modifier.concat(..._modifier_.trim().split(' '));
    });
    // as string
  }
  else if (settings.modifier && settings.modifier.length > 0) {
    modifier = settings.modifier.trim().split(' ');
  }
  // add modifier
  const classesInner = [
    // add componentName as default
    settings.componentName ? settings.componentName : '',
    // spread all given additionalClasses
    ...(settings.additionalClasses || []),
    // add variant
    settings.variant && settings.componentName
      ? `${settings.componentName}--${settings.variant}`
      : '',
    // add all given modifier
    // modifier="left has-margin" => "component--left component--has-margin"
    settings.componentName
      ? modifier.map((_modifier) => `${settings.componentName}--${_modifier}`).join(' ')
      : '',
  ];
  // return classes to hostElement
  return classesInner.filter(isDefined).join(' ');
}

/**
 * transport the tagName from Component decorator to private componentName
 * @example
 ```
 Component({
  tag: 'my-divider',
})
 export class Divider {
  @ComponentName() componentName;
  >
  componentName = 'my-divider';
}
 ```
 */
function ComponentName() {
  return (component, property) => {
    const { render } = component;
    // keep es5 function here to sty in component scope
    component.render = function renderProxy() {
      /* eslint-disable react/no-this-in-sfc */
      const host = getElement(this);
      const componentName = host.tagName.toLowerCase();
      // call method from tsx component if exists
      if (!!property) {
        this[property] = componentName;
      }
      if (render) {
        return render.call(this);
      }
      return null;
    };
  };
}

const myComponentCss = ":host{display:block}.image-container{display:flex;justify-content:space-around;align-items:center}.w-image{width:100px;height:100px}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    const cssClasses = hostClasses({
      componentName: this.componentName,
    });
    return (h(Host, { class: `${cssClasses} dasdsa---dddsd container` }, "Hello, World! I'm ", h("span", null, " ", this.getText())));
  }
  static get style() { return myComponentCss; }
}, [1, "my-component", {
    "first": [1],
    "middle": [1],
    "last": [1]
  }]);
__decorate([
  ComponentName()
], MyComponent$1.prototype, "componentName", void 0);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["my-component"];
  components.forEach(tagName => { switch (tagName) {
    case "my-component":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyComponent$1);
      }
      break;
  } });
}

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };