import { FunctionalComponent } from '../../stencil-public-runtime';
export declare type IconSize = 'inherit' | 'extra-small' | 'small' | 'default' | 'large' | 'extra-large';
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
export declare const Icon: FunctionalComponent<StenIconProps>;
