'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4658e1c0.js');
const icon = require('./icon-cafd821c.js');

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
      const host = index.getElement(this);
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
const MyComponent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  getText() {
    return format(this.first, this.middle, this.last);
  }
  render() {
    const cssClasses = hostClasses({
      componentName: this.componentName,
    });
    return (index.h(index.Host, { class: `${cssClasses} dasdsa---dddsd container` }, "Hello, World! I'm ", index.h("span", null, " ", this.getText()), index.h("w-icon-absolute_stroked", null), index.h("w-icon-alarm", null), index.h("div", { class: "image-container" }, "none", index.h("w-image", { fit: "none", src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c259411.jpeg" }), "contain", index.h("w-image", { fit: "contain", src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" }), "cover", index.h("w-image", { fit: "cover", src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" }), "fill", index.h("w-image", { fit: "fill", src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" }), "scale-down", index.h("w-image", { fit: "scale-down", src: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" }))));
  }
};
__decorate([
  ComponentName()
], MyComponent.prototype, "componentName", void 0);
MyComponent.style = myComponentCss;

const wIconCss$1 = ".semi-icon{display:inline-block;font-style:normal;line-height:0;height:1em;width:1em;text-align:center;text-transform:none;text-rendering:optimizeLegibility;fill:currentColor}.semi-icon-extra-small{font-size:8px}.semi-icon-small{font-size:12px}.semi-icon-default{font-size:16px}.semi-icon-large{font-size:20px}.semi-icon-extra-large{font-size:24px}.semi-icon-spinning{animation:0.6s linear infinite semi-icon-animation-rotate}@keyframes semi-icon-animation-rotate{from{transform:rotate(0)}to{transform:rotate(360deg)}}";

const WIconAbsoluteStroked = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    // 参数透传
    const { size, style, className, rotate, spin, type } = this;
    return (index.h(icon.Icon, { svg: {
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
              d: 'M13.6214 5.03557C14.0119 5.42609 14.645 5.42609 15.0356 5.03557C15.4261 4.64505 15.4261 4.01188 15.0356 3.62136L12.7071 1.29289C12.3166 0.902369 11.6834 0.902369 11.2929 1.29289L8.96443 3.62136C8.57391 4.01188 8.57391 4.64505 8.96443 5.03557C9.35495 5.42609 9.98812 5.42609 10.3786 5.03557L10.9998 4.41436V10.9999H4.41406L5.03557 10.3783C5.42609 9.98782 5.42609 9.35465 5.03557 8.96413C4.64505 8.57361 4.01188 8.57361 3.62136 8.96413L1.29289 11.2926C0.902369 11.6831 0.902369 12.3163 1.29289 12.7068L3.62136 15.0353C4.01188 15.4258 4.64505 15.4258 5.03557 15.0353C5.42609 14.6447 5.42609 14.0116 5.03557 13.6211L4.41436 12.9999H10.9998V19.5861L10.3783 18.9646C9.98782 18.5741 9.35465 18.5741 8.96413 18.9646C8.57361 19.3551 8.57361 19.9883 8.96413 20.3788L11.2926 22.7073C11.6831 23.0978 12.3163 23.0978 12.7068 22.7073L15.0353 20.3788C15.4258 19.9883 15.4258 19.3551 15.0353 18.9646C14.6447 18.5741 14.0116 18.5741 13.6211 18.9646L12.9998 19.5858V12.9999H19.5851L18.9641 13.6209C18.5736 14.0114 18.5736 14.6446 18.9641 15.0351C19.3547 15.4256 19.9878 15.4256 20.3783 15.0351L22.7068 12.7066C23.0973 12.3161 23.0973 11.6829 22.7068 11.2924L20.3783 8.96394C19.9878 8.57342 19.3547 8.57342 18.9641 8.96394C18.5736 9.35447 18.5736 9.98763 18.9641 10.3782L19.5858 10.9999H12.9998V4.41406L13.6214 5.03557Z',
              fill: 'currentColor',
            },
            children: [],
          },
        ],
      }, size: size, style: style, className: className, rotate: rotate, spin: spin, type: type }));
  }
};
WIconAbsoluteStroked.style = wIconCss$1;

const wIconCss = ".semi-icon{display:inline-block;font-style:normal;line-height:0;height:1em;width:1em;text-align:center;text-transform:none;text-rendering:optimizeLegibility;fill:currentColor}.semi-icon-extra-small{font-size:8px}.semi-icon-small{font-size:12px}.semi-icon-default{font-size:16px}.semi-icon-large{font-size:20px}.semi-icon-extra-large{font-size:24px}.semi-icon-spinning{animation:0.6s linear infinite semi-icon-animation-rotate}@keyframes semi-icon-animation-rotate{from{transform:rotate(0)}to{transform:rotate(360deg)}}";

const WIconAlarm = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    // 参数透传
    const { size, style, className, rotate, spin, type } = this;
    return (index.h(icon.Icon, { svg: {
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
};
WIconAlarm.style = wIconCss;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

var ObjectFit;
(function (ObjectFit) {
  ObjectFit["NONE"] = "none";
  ObjectFit["CONTAIN"] = "contain";
  ObjectFit["COVER"] = "cover";
  ObjectFit["FILL"] = "fill";
  ObjectFit["SCALE_DOWN"] = "scale-down";
})(ObjectFit || (ObjectFit = {}));

const wImageCss = ".w-image__error,.w-image__inner,.w-image__placeholder{width:100%;height:100%}.w-image{position:relative;display:inline-block;overflow:hidden}.w-image__inner{vertical-align:top}.w-image__placeholder{background:var(--w-fill-color-light)}.w-image__error{display:flex;justify-content:center;align-items:center;font-size:14px;background:var(--w-fill-color-light);color:var(--w-text-color-placeholder);vertical-align:middle}.w-image__preview{cursor:pointer}.w-image__placeholder{display:flex;align-items:center;justify-content:center}";

const WImage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    const classes = icon.classnames(classPrefix);
    return (index.h(index.Host, { style: { display: 'block' }, class: classes }, !loading && !error && index.h("img", { src: src, alt: "", style: styles, class: `${classes}__inner` }), loading && index.h("div", { class: `${classes}__placeholder` }, placeholder), error && index.h("div", { class: `${classes}__placeholder` }, errorText)));
  }
  get element() { return index.getElement(this); }
  static get watchers() { return {
    "show": ["watchHandler"]
  }; }
};
WImage.style = wImageCss;

exports.my_component = MyComponent;
exports.w_icon_absolute_stroked = WIconAbsoluteStroked;
exports.w_icon_alarm = WIconAlarm;
exports.w_image = WImage;
