// icon.tsx

import { FunctionalComponent, h } from '@stencil/core';
import cls from 'classnames';
import * as icons from '@wheel-design/icons'
import { stringify } from 'svgson'
import { BASE_CLASS_PREFIX } from './env'

export type IconSize = 'inherit' | 'extra-small' | 'small' | 'default' | 'large' | 'extra-large';

export interface StenIconProps {
  svg: any;
  size?: IconSize;
  spin?: boolean;
  rotate?: number;
  prefixCls?: string;
  type?: string;
  style?: any;
  className?: any;
}

export const Icon: FunctionalComponent<StenIconProps> = (props) => {

  const { svg, spin = false, rotate, style, className, prefixCls = BASE_CLASS_PREFIX, type, size = 'default' } = props;
  const classes = cls(`${prefixCls}-icon`, {
    [`${prefixCls}-icon-extra-small`]: size === 'extra-small', // 8x8
    [`${prefixCls}-icon-small`]: size === 'small', // 12x12
    [`${prefixCls}-icon-default`]: size === 'default', // 16x16
    [`${prefixCls}-icon-large`]: size === 'large', // 20x20
    [`${prefixCls}-icon-extra-large`]: size === 'extra-large', // 24x24
    [`${prefixCls}-icon-spinning`]: spin === true,
    [`${prefixCls}-icon-${type}`]: Boolean(type)
  }, className);
  const outerStyle: any = {
  };
  if (Number.isSafeInteger(rotate)) {
    outerStyle.transform = `rotate(${rotate}deg)`;
  }
  Object.assign(outerStyle, style);

  console.log(icons, 'icons')
  return (
    <span style={outerStyle} class={classes} role="img" aria-label={type} innerHTML={stringify(svg)}></span>
  );
}
