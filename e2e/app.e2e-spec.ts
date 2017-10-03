import { JsonserverPage } from './app.po';

describe('jsonserver App', () => {
  let page: JsonserverPage;

  beforeEach(() => {
    page = new JsonserverPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
