export class Checkout {

    static assertIsCheckoutPage() {
        cy.url().should('eq', 'https://automationexercise.com/checkout')
    }

    static assertAddressDetailsAreVisible() {
        cy.getByDataQa('checkout-info').should('be.visible')
    }

    static addComment() {
        cy.get('.form-control').type('this is a test!')
    } 

    static placeOrder() {
        cy.get('[class*="btn btn-default check_out"]').click()
    }
}