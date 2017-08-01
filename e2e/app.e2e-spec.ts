import { ProjectDemo1Page } from './app.po';

describe('project-demo1 App', () => {
  let page: ProjectDemo1Page;

  beforeEach(() => {
    page = new ProjectDemo1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
