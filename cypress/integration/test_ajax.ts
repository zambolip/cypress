import { Home } from "./pages/Home";
import { Products } from "./pages/Products";


describe('uitestingplayground.com', () => {
    it('Test ajax', () => {
        cy.visit('http://uitestingplayground.com/ajax')
        cy.get('#ajaxButton', { timeout: 10000 }).should('be.visible');
        cy.get('#ajaxButton').click()
        cy.get('#spinner', { timeout: 10000 }).should('be.visible');
        cy.get('.bg-success',  { timeout: 30000 }).should('be.visible');
        cy.get('.bg-success').click()
    })
})