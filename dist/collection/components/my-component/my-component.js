var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, h, Prop, Host } from '@stencil/core';
import { hostClasses, ComponentName } from '../../utils';
import { format } from '../../utils/utils';
export class MyComponent {
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    const cssClasses = hostClasses({
      componentName: this.componentName,
    });
    return (h(Host, { class: `${cssClasses} dasdsa---dddsd container` },
      "Hello, World! I'm ",
      h("span", null,
        " ",
        this.getText()),
      h("w-icon-absolute_stroked", null),
      h("w-icon-alarm", null),
      h("div", { class: "image-container" },
        "none",
        h("w-image", { fit: "none", src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c259411.jpeg" }),
        "contain",
        h("w-image", { fit: "contain", src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" }),
        "cover",
        h("w-image", { fit: "cover", src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" }),
        "fill",
        h("w-image", { fit: "fill", src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" }),
        "scale-down",
        h("w-image", { fit: "scale-down", src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" }))));
  }
  static get is() { return "my-component"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["my-component.css"]
  }; }
  static get styleUrls() { return {
    "$": ["my-component.css"]
  }; }
  static get properties() { return {
    "first": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "First Prop"
      },
      "attribute": "first",
      "reflect": false
    },
    "middle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Middle Prop"
      },
      "attribute": "middle",
      "reflect": false
    },
    "last": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Last Prop"
      },
      "attribute": "last",
      "reflect": false
    }
  }; }
}
__decorate([
  ComponentName()
], MyComponent.prototype, "componentName", void 0);
