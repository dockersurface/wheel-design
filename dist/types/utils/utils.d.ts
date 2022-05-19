/**
 * @param first
 * @param middle
 * @param last
 */
export declare function format(first: string, middle: string, last: string): string;
/**
 * Gets class prefix 获取class 前缀
 *
 * @param suffix
 * @returns class prefix
 */
export declare function getClassPrefix(suffix: string): string;
export declare const getStyle: (element: any, styleName: any) => any;
/**
 * Mustache 转换 html
 *
 * @param {string} str 字符串
 * @returns {string} 返回值
 */
export declare const kebabCase: (str: string) => string;
/**
 * get scroll container 获取父元素 直到有滚动属性的
 *
 * @param el
 * @param vertical
 * @returns
 */
export declare const getScrollContainer: (el: HTMLElement, vertical?: string) => HTMLElement | (Window & typeof globalThis);
/**
 * @param element
 * @param styleName
 * @param value
 */
export declare function setStyle(element: HTMLElement, styleName: any, value: any): void;
/**
 * is in container 获取是否在父元素显示
 *
 * @param el
 * @param container
 * @returns
 */
export declare const isInContainer: (el: HTMLElement, container: HTMLElement) => boolean;
export declare const isString: (obj: any) => boolean;
export declare const isNumber: (obj: any) => boolean;
export declare const isFunction: (obj: any) => boolean;
export declare const isArray: (obj: any) => boolean;
/**
 * 用requestAnimationFrame实现的定时器，用法同window.setInterval
 *
 * @param callback 同window.setInterval的回调方法一样
 * @param interval 同window.setInterval的间隔时间一样，单位ms
 * @returns clearTimer的方法，执行即可停止方法
 */
export declare const lhSetInterval: (callback: (clearTimer: () => void) => void, interval: number) => any;
export declare const sleep: (milliseconds: any) => Promise<unknown>;
/**
 * 过滤HTML
 * TODO: 未处理呢还
 *
 * @param str string
 * @returns string
 */
export declare const filterHtmlXSS: (str: any) => any;
