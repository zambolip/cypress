

describe('uitestingplayground.com', () => {
    it('Test progress bar', () => {
        cy.visit('http://uitestingplayground.com/progressbar')
        cy.get('#startButton').should('be.visible');
        cy.get('#startButton').click()
        cy.get('#progressBar', { timeout: 60000 }).should('have.text', '75%').then(() => {
            cy.get('#stopButton').click()
        })
    })
})