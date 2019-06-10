import { newE2EPage } from '@stencil/core/testing';

describe('gb-tile', () => {
  it('renders', async () => {
    const page = await newE2EPage({ url: '/'});

    const element = await page.find('gb-tile');
    expect(element).toHaveClass('hydrated');
  });

  it('renders the title', async () => {
    const page = await newE2EPage({ url: '/'});

    const element = await page.find('gb-tile >>> h1');
    expect(element.textContent).toEqual('Stencil App Starter');
  });
});
