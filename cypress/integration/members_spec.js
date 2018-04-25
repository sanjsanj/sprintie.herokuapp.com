describe('Sprintie', () => {
    context('Querying', () => {
        beforeEach(() => {
        // Visiting our app before each test removes any state build up from
        // previous tests. Visiting acts as if we closed a tab and opened a fresh one
        cy.visit('http://localhost:3010/');
        });

        it('should add a new row in the memeber table when Add Memeber button is clicked', () => {
            cy.get('.nav-link').click();
            cy.get('.table-striped tbody').children().should('have.length', 0);
            cy.get('#btn-add-member').click();
            cy.get('.table-striped tbody').children().should('have.length', 1);
            cy.get('#btn-add-member').click();
            cy.get('.table-striped tbody').children().should('have.length', 2)
        });
        it('should let us change member name', () => {
                
        });
        it('should let us delete member', () => {
                
        });
        it('should let us set evevery sprint days off for each memeber', () => {
                
        });
        it('should let us set this sprint days off for each memeber', () => {
                
        });
    });
});