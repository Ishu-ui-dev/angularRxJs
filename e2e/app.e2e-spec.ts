import { DarwinShopPage } from './app.po';

describe('darwin-shop App', () => {
  let page: DarwinShopPage;

  beforeEach(() => {
    page = new DarwinShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
