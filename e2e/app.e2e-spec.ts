import { TradeDeskPage } from './app.po';

describe('trade-desk App', () => {
  let page: TradeDeskPage;

  beforeEach(() => {
    page = new TradeDeskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
