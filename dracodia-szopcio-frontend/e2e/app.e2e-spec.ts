import { SzopcioPage } from './app.po';

describe('szopcio App', function() {
  let page: SzopcioPage;

  beforeEach(() => {
    page = new SzopcioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
