import { StudentCrudPage } from './app.po';

describe('student-crud App', function() {
  let page: StudentCrudPage;

  beforeEach(() => {
    page = new StudentCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
