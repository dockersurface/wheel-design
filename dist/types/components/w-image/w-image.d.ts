import { CSSStyle } from '../../common/interface';
export declare class WImage {
  /** Prop src 图片链接 */
  src: string;
  /** Prop lazy 是否懒加载 */
  lazy: boolean;
  /** Prop fit 图片填充格式 */
  fit: 'none' | 'contain' | 'cover' | 'fill' | 'scale-down';
  /** Prop placeholder 加载文案 */
  placeholder: string;
  /** Prop 错误文案 */
  errorText: string;
  element: HTMLElement;
  loading: boolean;
  error: boolean;
  imageWidth: number;
  imageHeight: number;
  show: boolean;
  private _scrollContainer;
  private _handleLazyLoad;
  watchHandler(_newValue: any, oldValue: any): void;
  handleScroll(): void;
  isSupportObjectFit: () => boolean;
  /**
   * Handles load
   * @param _event
   * @param image
   * */
  handleLoad(_event: Event, image: HTMLImageElement): void;
  /**
   * Handles error
   * @param error
   * */
  handleError(error: OnErrorEventHandlerNonNull): void;
  /**
   * Loads image 加载图片
   * @returns
   * */
  loadImage(): boolean;
  /**
   * Gets image style 获取图片样式，需要兼容支不支持 objectfit
   * @returns image style
   * */
  getImageStyle(): CSSStyle;
  /**
   * Handles lazy load lazyload的句柄函数
   * @returns
   */
  handleLazyLoad(): void;
  componentWillLoad(): void;
  render(): any;
}
