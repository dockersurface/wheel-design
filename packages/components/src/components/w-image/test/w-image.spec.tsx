import { newSpecPage } from '@stencil/core/testing';
import { WImage } from '../w-image';

describe('w-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WImage],
      html: `<w-image></w-image>`,
    });
    expect(page.root).toEqualHtml(`
      <w-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </w-image>
    `);
  });
});
