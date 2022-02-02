describe('sign-in', () => {
  // beforeEach(() => {
  // });

  it('user can login', () => {
    cy.visit('/');

    // render correctly
    cy.get('h1').contains(/login/i).should('exist');

    // cy.findByPlaceholderText('username');
    // cy.findByPlaceholderText('password');
    // cy.findByRole('button', { name: /login/i });
    cy.get('input[name="username"]').type('hyejun');
    cy.get('input[name="password"]').type('1234');
    cy.get('button').contains(/login/i).click();

    // render correctly
    cy.url().should('include', 'me');
    cy.get('h1')
      .contains(/profile/i)
      .should('exist');

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
