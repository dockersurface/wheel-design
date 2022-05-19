import { Component, h, Prop, Host } from '@stencil/core';
import { hostClasses, ComponentName } from '../../utils';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @ComponentName() componentName;

  /** First Prop */
  @Prop() first: string;

  /** Middle Prop */
  @Prop() middle: string;

  /** Last Prop */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    const cssClasses = hostClasses({
      componentName: this.componentName,
    });

    return (
      <Host class={`${cssClasses} dasdsa---dddsd container`}>
        Hello, World! I'm <span> {this.getText()}</span>
        <w-icon-absolute_stroked />
        <w-icon-alarm />
        <div class="image-container">
          none
          <w-image fit="none" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c259411.jpeg" />
          contain
          <w-image fit="contain" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
          cover
          <w-image fit="cover" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
          fill
          <w-image fit="fill" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
          scale-down
          <w-image fit="scale-down" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
        </div>
      </Host>
    );
  }
}
