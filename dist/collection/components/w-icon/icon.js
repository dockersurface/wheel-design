// icon.tsx
import { h } from '@stencil/core';
import cls from 'classnames';
import { stringify } from 'svgson';
import { BASE_CLASS_PREFIX } from './env';
export const Icon = props => {
  const { svg, spin = false, rotate, style, className, prefixCls = BASE_CLASS_PREFIX, type, size = 'default' } = props;
  const classes = cls(`${prefixCls}-icon`, {
    [`${prefixCls}-icon-extra-small`]: size === 'extra-small',
    [`${prefixCls}-icon-small`]: size === 'small',
    [`${prefixCls}-icon-default`]: size === 'default',
    [`${prefixCls}-icon-large`]: size === 'large',
    [`${prefixCls}-icon-extra-large`]: size === 'extra-large',
    [`${prefixCls}-icon-spinning`]: spin === true,
    [`${prefixCls}-icon-${type}`]: Boolean(type),
  }, className);
  const outerStyle = {};
  if (Number.isSafeInteger(rotate)) {
    outerStyle.transform = `rotate(${rotate}deg)`;
  }
  Object.assign(outerStyle, style);
  return h("span", { style: outerStyle, class: classes, role: "img", "aria-label": type, innerHTML: stringify(svg) });
};
