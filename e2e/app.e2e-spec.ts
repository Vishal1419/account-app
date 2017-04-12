import { AccountAppPage } from './app.po';

describe('account-app App', () => {
  let page: AccountAppPage;

  beforeEach(() => {
    page = new AccountAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
