export class Payment {

    static assertIsPaymentPage() {
        cy.url().should('eq', 'https://automationexercise.com/payment')
    }

    static setCardHolderName(cardHolderName) {
        cy.get('[data-qa="name-on-card"]').type(cardHolderName)
    }

    static setCardNumber(cardNumber) {
        cy.get('[data-qa="card-number"]').type(cardNumber)
    }

    static setCardCVC(cardNumber) {
        cy.get('[data-qa="cvc"]').type(cardNumber)
    }

    static setCardExpireDate(month, year) {
        cy.get('[data-qa="expiry-month"]').type(month)
        cy.get('[data-qa="expiry-year"]').type(year)
    } 

    static payAndConfirmButton() {
        cy.get('[data-qa="pay-button"]').click()
    } 
}