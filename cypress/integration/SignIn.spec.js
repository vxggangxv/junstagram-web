describe('sign-in', () => {
  // beforeEach(() => {
  // });

  it('user can login', () => {
    cy.visit('/');
    // cy.findByPlaceholderText('username');
    // cy.findByPlaceholderText('password');
    // cy.findByRole('button', { name: /login/i });
    cy.get('input[name="username"]').type('hyejun');
    cy.get('input[name="password"]').type('1234');
    cy.get('button').contains(/login/i).click();

    // cy.url().should('include', 'me');
    // fetch user data
    cy.findByText('hyejun').should('exist');
  });

  // it('fetch user data', () => {
  // cy.url().should('include', 'teams/2');
  // cy.intercept('get', 'url', {
  //   statusCode: 200,
  // }).as('success');
  // cy.intercept('get', 'url', {
  //   statusCode: 404,
  // }).as('fail');
  // });
});
