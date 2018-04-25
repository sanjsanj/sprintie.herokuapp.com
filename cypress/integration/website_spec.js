describe('Kitchen Sink', () => {
  it('.should() - assert that <title> is correct', () => {
    // https://on.cypress.io/visit
    cy.visit('http://localhost:3010/');

    // Here we've made our first assertion using a '.should()' command.
    // An assertion is comprised of a chainer, subject, and optional value.

    // https://on.cypress.io/should
    // https://on.cypress.io/and

    // https://on.cypress.io/title
    cy.title().should('include', 'Sprintie!');
    //   ↲               ↲            ↲
    // subject        chainer      value
  });

  context('Querying', () => {
    beforeEach(() => {
      // Visiting our app before each test removes any state build up from
      // previous tests. Visiting acts as if we closed a tab and opened a fresh one
      cy.visit('http://localhost:3010/');
    });

    // Let's query for some DOM elements and make assertions
    // The most commonly used query is 'cy.get()', you can
    // think of this like the '$' in jQuery

    it('cy.get() - query DOM elements', () => {
      // https://on.cypress.io/get

      // Get DOM elements by class
      cy.get('.nav-link').should('contain', '+');
      cy.get('#btn-add-member').should('contain', 'Add Member');
      cy.get('#btn-reset-sprint').should('contain', 'Reset This Sprint');

      // Use CSS selectors just like jQuery
    });
  });
});
