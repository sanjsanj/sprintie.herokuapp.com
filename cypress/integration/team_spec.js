/* global describe, it, cy, context, beforeEach */

describe('Sprintie', () => {
  const teamName = 'test team';
  const teamPlaceHolder = 'New Team';
  const weeksPerSprint = '2';
  const pointsPerDevPerDay = '1';
  const adjustmentPts = '3';

  context('When a new team is added', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3010/');
      cy.get('.nav-link').click();
    });

    it('Should populate placeholder values', () => {
      cy.get('.nav-link.active').should('contain', teamPlaceHolder);
      cy.get('#btn-calculate-points').should('match', 'button').should('contain', `Calculate ${teamPlaceHolder} Sprint Points`);
      cy.get('#deleteTeam').should('match', 'button').should('contain', `Delete ${teamPlaceHolder}`);
      cy.get('#teamName').should('have.attr', 'placeholder', teamPlaceHolder);
      cy.get('#weeksPerSprint').should('have.attr', 'placeholder', '1');
      cy.get('#pointsPerDevPerDay').should('have.attr', 'placeholder', '1');
      cy.get('#adjustmentPts').should('have.attr', 'placeholder', '0');
    });

    it('Should name the team and update the points values', () => {
      cy.get('#teamName').type(teamName).should('have.value', teamName);
      cy.get('.nav-link.active').should('contain', teamName);
      cy.get('#btn-calculate-points').should('match', 'button').should('contain', `Calculate ${teamName} Sprint Points`);
      cy.get('#deleteTeam').should('match', 'button').should('contain', `Delete ${teamName}`);
      cy.get('#weeksPerSprint').type(weeksPerSprint).should('have.value', weeksPerSprint);
      cy.get('#pointsPerDevPerDay').type(pointsPerDevPerDay).should('have.value', pointsPerDevPerDay);
      cy.get('#adjustmentPts').type(adjustmentPts).should('have.value', adjustmentPts);
    });

    it('Should delete the team', () => {
      cy.get('#teamName').type(teamName);
      cy.get('#weeksPerSprint').type(weeksPerSprint);
      cy.get('#pointsPerDevPerDay').type(pointsPerDevPerDay);
      cy.get('#adjustmentPts').type(adjustmentPts);
      cy.get('#deleteTeam').click();
      cy.on('window:confirm', (str) => {
        expect(str).to.eq(`Are you sure you want to delete ${teamName}?`);
      });
      cy.get('.nav-link.active').should('have.length', 0);
      cy.get('#teamName').should('not.have.value', teamName);
      cy.get('#weeksPerSprint').should('not.have.value', weeksPerSprint);
      cy.get('#pointsPerDevPerDay').should('not.have.value', pointsPerDevPerDay);
      cy.get('#adjustmentPts').should('not.have.value', adjustmentPts);
      cy.get('#btn-calculate-points').should('contain', 'Calculate  Sprint Points');
      cy.get('#deleteTeam').should('contain', 'Delete');
    });
  });
});
