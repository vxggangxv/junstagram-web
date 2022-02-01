describe('sign-in', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('user can login', () => {
    cy.findByPlaceholderText('username');
    cy.findByPlaceholderText('password');
    cy.findByRole('button', { name: /login/i });
    // login
    // return to profile
  });

  it('shoud check fetch user', () => {
    // cy.findByText
    // cy.intercept('get', 'url', {
    //   statusCode: 200,
    // }).as('success');
    // cy.get('button').click();
  });
});
