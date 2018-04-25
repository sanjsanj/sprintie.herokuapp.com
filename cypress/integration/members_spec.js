describe('Sprintie', () => {
    context('When New Team is cliccked', () => {
        beforeEach(() => {
        // Visiting our app before each test removes any state build up from
        // previous tests. Visiting acts as if we closed a tab and opened a fresh one
        cy.visit('http://localhost:3010/');
        cy.get('.nav-link').click();
        });

        it('should add a new row in the member table when Add Member button is clicked', () => {            
            cy.get('.table-striped tbody').children().should('have.length', 0);
            cy.get('#btn-add-member').click();
            cy.get('.table-striped tbody').children().should('have.length', 1);
            cy.get('#btn-add-member').click();
            cy.get('.table-striped tbody').children().should('have.length', 2);
        });
        context('When Add Member button is clicked', () => {
            beforeEach(() => {
                cy.get('#btn-add-member').click();
            });
            it('should update the Name when type while the input is focus', () => {
                cy.get('.memberName').click().type('test')
                .should('have.attr', 'placeholder', 'test');
            });
            it('should Delete a row in the member table when Delete button is clicked', () => {
                cy.get('.table-striped tbody').children().should('have.length', 1);
                cy.contains('Delete').click();
                cy.get('.table-striped tbody').children().should('have.length', 0);
            });
            it('should let us set evevery sprint days off for each member', () => {
                cy.get('.day-off-every-sprint').click()
                .type('1')
                .should('have.attr', 'placeholder', '1');
    
            });
            it('should let us set this sprint days off for each member', () => {
                cy.get('.day-off-this-sprint').click()
                .type('1')
                .should('have.attr', 'placeholder', '1');
            });
        });
    });
});