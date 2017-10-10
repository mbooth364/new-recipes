import { NewRecipesPage } from './app.po';

describe('new-recipes App', () => {
  let page: NewRecipesPage;

  beforeEach(() => {
    page = new NewRecipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
