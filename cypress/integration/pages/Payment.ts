export class Payment {

    static assertIsPaymentPage() {
        cy.url().should('eq', 'https://automationexercise.com/payment')
    }

    static setCardHolderName(cardHolderName: string) {
        cy.getByDataQa('name-on-card').type(cardHolderName)
    }

    static setCardNumber(cardNumber: string) {
        cy.getByDataQa('card-number').type(cardNumber)
    }

    static setCardCVC(cardNumber: string) {
        cy.getByDataQa('cvc').type(cardNumber)
    }

    static setCardExpireDate(month: string, year: string) {
        cy.getByDataQa('expiry-month').type(month)
        cy.getByDataQa('expiry-year').type(year)
    }

    static payAndConfirmButton() {
        cy.getByDataQa('pay-button').click()
    }
}