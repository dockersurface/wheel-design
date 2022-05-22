'use strict';

const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;
/**
 * @param first
 * @param middle
 * @param last
 */
function format(first, middle, last) {
  return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
/**
 * Gets class prefix 获取class 前缀
 *
 * @param suffix
 * @returns class prefix
 */
function getClassPrefix(suffix) {
  return suffix ? `w-${suffix}` : 'w';
}
/**
 * Names camel case
 *
 * @param name
 * @returns
 */
const camelCase = function (name) {
  return name.replace(SPECIAL_CHARS_REGEXP, (_, _separator, letter, offset) => (offset ? letter.toUpperCase() : letter)).replace(MOZ_HACK_REGEXP, 'Moz$1');
};
const getStyle = (element, styleName) => {
  if (!element || !styleName)
    return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    const computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  }
  catch (e) {
    return element.style[styleName];
  }
};
/**
 * is scroll 当前元素是否具有滚动属性
 *
 * @param el
 * @param vertical
 * @returns
 */
const isScroll = (el, vertical) => {
  const determinedDirection = vertical !== null && vertical !== undefined;
  const overflow = determinedDirection ? (vertical ? getStyle(el, 'overflow-y') : getStyle(el, 'overflow-x')) : getStyle(el, 'overflow');
  return overflow.match(/(scroll|auto|overlay)/);
};
/**
 * get scroll container 获取父元素 直到有滚动属性的
 *
 * @param el
 * @param vertical
 * @returns
 */
const getScrollContainer = (el, vertical) => {
  let parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent)) {
      return window;
    }
    if (isScroll(parent, vertical)) {
      return parent;
    }
    parent = parent.parentNode;
  }
  return parent;
};
/**
 * is in container 获取是否在父元素显示
 *
 * @param el
 * @param container
 * @returns
 */
const isInContainer = (el, container) => {
  if (!el || !container)
    return false;
  const elRect = el.getBoundingClientRect();
  let containerRect;
  if ([window, document, document.documentElement, null, undefined].includes(container)) {
    containerRect = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0,
    };
  }
  else {
    containerRect = container.getBoundingClientRect();
  }
  return elRect.top < containerRect.bottom && elRect.bottom > containerRect.top && elRect.right > containerRect.left && elRect.left < containerRect.right;
};

exports.format = format;
exports.getClassPrefix = getClassPrefix;
exports.getScrollContainer = getScrollContainer;
exports.isInContainer = isInContainer;
