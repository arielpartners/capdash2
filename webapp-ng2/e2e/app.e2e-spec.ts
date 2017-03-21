import { Capdash2Page } from './app.po';

describe('capdash2 App', () => {
  let page: Capdash2Page;

  beforeEach(() => {
    page = new Capdash2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cd works!');
  });
});
