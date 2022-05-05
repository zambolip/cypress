import { Home } from "./pages/Home";
import { Products } from "./pages/Products";


describe('uitestingplayground.com', () => {
    it('Test scroll bar', () => {
        cy.visit('http://uitestingplayground.com/scrollbars')
        cy.get('[class*="btn btn-primary"]').focus()
    })
})