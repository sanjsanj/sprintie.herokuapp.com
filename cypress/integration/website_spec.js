describe('Sprintie', () => {
  it('Assert that <title> is correct', () => {
    cy.visit('http://localhost:3010/');
    cy.title().should('include', 'Sprintie!');
  });

  context('Querying', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3010/');
    });

    it('Query DOM elements', () => {
      cy.get('.nav-link').should('match', 'button').should('contain', '+');
      cy.get('#btn-add-member').should('match', 'button').should('contain', 'Add Member');
      cy.get('#btn-reset-sprint').should('match', 'button').should('contain', 'Reset This Sprint');
      cy.get('#btn-calculate-points').should('match', 'button').should('contain', 'Calculate  Sprint Points');
      cy.get('#deleteTeam').should('match', 'button').should('contain', 'Delete');
      cy.get('#teamName').should('match', 'input');
      cy.get('#weeksPerSprint').should('match', 'input');
      cy.get('#pointsPerDevPerDay').should('match', 'input');
      cy.get('#adjustmentPts').should('match', 'input');
    });
  });
});
