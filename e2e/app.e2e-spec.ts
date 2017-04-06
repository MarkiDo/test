import { ItaCloudLvPage } from './app.po';

describe('ita-cloud-lv App', function() {
  let page: ItaCloudLvPage;

  beforeEach(() => {
    page = new ItaCloudLvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
