import { newE2EPage } from '@stencil/core/testing';

describe('w-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<w-image></w-image>');

    const element = await page.find('w-image');
    expect(element).toHaveClass('hydrated');
  });
});
