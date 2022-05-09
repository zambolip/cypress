

describe('uitestingplayground.com', () => {
    it('Test ajax', () => {
        cy.visit('http://uitestingplayground.com/ajax')
        cy.get('#ajaxButton').should('be.visible');
        cy.get('#ajaxButton').click()
        cy.get('#spinner').should('be.visible');
        cy.get('.bg-success', { timeout: 30000 }).should('be.visible');
        cy.get('.bg-success').click()
    })
})