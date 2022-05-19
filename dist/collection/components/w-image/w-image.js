import { Component, Host, h, State, Prop, Element, Listen, Watch } from '@stencil/core';
import classNames from 'classnames';
import { throttle } from 'lodash-es';
import { ObjectFit } from '../../common/interface';
import { getClassPrefix, getScrollContainer, isInContainer } from '../../utils/utils';
export class WImage {
  constructor() {
    /** Prop lazy 是否懒加载 */
    this.lazy = false;
    /** Prop fit 图片填充格式 */
    this.fit = 'none';
    /** Prop placeholder 加载文案 */
    this.placeholder = '加载中...';
    /** Prop 错误文案 */
    this.errorText = '加载失败';
    this.loading = true;
    this.error = false;
    this.show = false;
    // Determines whether support object fit is
    this.isSupportObjectFit = () => document.documentElement.style.objectFit !== undefined;
  }
  watchHandler(_newValue, oldValue) {
    if (oldValue)
      return;
    this.loadImage();
  }
  handleScroll() {
    if (!this.lazy)
      return;
    this._handleLazyLoad();
  }
  /**
   * Handles load
   * @param _event
   * @param image
   * */
  handleLoad(_event, image) {
    this.imageWidth = image.width;
    this.imageHeight = image.height;
    this.loading = false;
    this.error = false;
  }
  /**
   * Handles error
   * @param error
   * */
  handleError(error) {
    console.error(error);
    this.loading = false;
    this.error = true;
  }
  /**
   * Loads image 加载图片
   * @returns
   * */
  loadImage() {
    if (!this.src) {
      return false;
    }
    this.loading = true;
    this.error = false;
    const img = new Image();
    img.onload = e => this.handleLoad(e, img);
    img.onerror = this.handleError.bind(this);
    img.src = this.src;
    return true;
  }
  /**
   * Gets image style 获取图片样式，需要兼容支不支持 objectfit
   * @returns image style
   * */
  getImageStyle() {
    if (this.isSupportObjectFit()) {
      return { objectFit: this.fit };
    }
    const { fit, imageWidth, imageHeight, element } = this;
    const { clientWidth: containerWidth, clientHeight: containerHeight } = element;
    let _fit = fit;
    if (!imageWidth || !imageHeight || !containerWidth || !containerHeight)
      return {};
    const imageAspectRatio = imageWidth / imageHeight;
    const containerAspectRatio = containerWidth / containerHeight;
    if (fit === ObjectFit.SCALE_DOWN) {
      const isSmaller = imageWidth < containerWidth && imageHeight < containerHeight;
      _fit = isSmaller ? ObjectFit.NONE : ObjectFit.CONTAIN;
    }
    switch (_fit) {
      case ObjectFit.NONE:
        return { width: 'auto', height: 'auto' };
      case ObjectFit.CONTAIN:
        return imageAspectRatio < containerAspectRatio ? { width: 'auto' } : { height: 'auto' };
      case ObjectFit.COVER:
        return imageAspectRatio < containerAspectRatio ? { height: 'auto' } : { width: 'auto' };
      default:
        return {};
    }
  }
  /**
   * Handles lazy load lazyload的句柄函数
   * @returns
   */
  handleLazyLoad() {
    if (this.show)
      return;
    if (isInContainer(this.element, this._scrollContainer)) {
      this.show = true;
    }
  }
  componentWillLoad() {
    if (!this.lazy) {
      this.loadImage();
    }
    this.getImageStyle = this.getImageStyle.bind(this);
    this.handleLazyLoad = this.handleLazyLoad.bind(this);
    this._scrollContainer = getScrollContainer(this.element);
    this._handleLazyLoad = throttle(this.handleLazyLoad, 200);
  }
  render() {
    const { src, loading, error, placeholder, errorText } = this;
    const styles = this.getImageStyle();
    const classPrefix = getClassPrefix('image');
    const classes = classNames(classPrefix);
    return (h(Host, { style: { display: 'block' }, class: classes },
      !loading && !error && h("img", { src: src, alt: "", style: styles, class: `${classes}__inner` }),
      loading && h("div", { class: `${classes}__placeholder` }, placeholder),
      error && h("div", { class: `${classes}__placeholder` }, errorText)));
  }
  static get is() { return "w-image"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["w-image.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["w-image.css"]
  }; }
  static get properties() { return {
    "src": {
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
        "text": "Prop src \u56FE\u7247\u94FE\u63A5"
      },
      "attribute": "src",
      "reflect": false
    },
    "lazy": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Prop lazy \u662F\u5426\u61D2\u52A0\u8F7D"
      },
      "attribute": "lazy",
      "reflect": false,
      "defaultValue": "false"
    },
    "fit": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'none' | 'contain' | 'cover' | 'fill' | 'scale-down'",
        "resolved": "\"contain\" | \"cover\" | \"fill\" | \"none\" | \"scale-down\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Prop fit \u56FE\u7247\u586B\u5145\u683C\u5F0F"
      },
      "attribute": "fit",
      "reflect": false,
      "defaultValue": "'none'"
    },
    "placeholder": {
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
        "text": "Prop placeholder \u52A0\u8F7D\u6587\u6848"
      },
      "attribute": "placeholder",
      "reflect": false,
      "defaultValue": "'\u52A0\u8F7D\u4E2D...'"
    },
    "errorText": {
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
        "text": "Prop \u9519\u8BEF\u6587\u6848"
      },
      "attribute": "error-text",
      "reflect": false,
      "defaultValue": "'\u52A0\u8F7D\u5931\u8D25'"
    }
  }; }
  static get states() { return {
    "loading": {},
    "error": {},
    "imageWidth": {},
    "imageHeight": {},
    "show": {}
  }; }
  static get elementRef() { return "element"; }
  static get watchers() { return [{
      "propName": "show",
      "methodName": "watchHandler"
    }]; }
  static get listeners() { return [{
      "name": "scroll",
      "method": "handleScroll",
      "target": "window",
      "capture": true,
      "passive": true
    }]; }
}
