describe('Home Page', () => {
  const rootPath = '/';

  it('should render page with expected header and footer', () => {
    cy.visit(rootPath);
  });
});
