import { Component, Host, h } from '@stencil/core';
import classNames from 'classnames';
import { getClassPrefix } from '../../utils/utils';

@Component({
  tag: 'w-image',
  styleUrl: 'w-image.scss',
  shadow: true,
})
export class WImage {

  render() {

    const classPrefix: string = getClassPrefix('image');
    const classes: string = classNames(classPrefix);

    return (
      <Host class={classes}>
        <div class="w-image__error">123</div>
        {/* {!loading && !error && <img src={src} style={styles} class={`${classPrefix}__inner`} />}
        {loading && <div class={`${classPrefix}__placeholder`}>{placeholder}</div>}
        {error && <div class={`${classPrefix}__placeholder`}>{errorText}</div>} */}
      </Host>
    );
  }

}
