export class Payment {

    static assertIsPaymentPage() {
        cy.url().should('eq', 'https://automationexercise.com/payment')
    }

    static setCardHolderName(cardHolderName: string) {
        cy.get('[data-qa="name-on-card"]').type(cardHolderName)
    }

    static setCardNumber(cardNumber: string) {
        cy.get('[data-qa="card-number"]').type(cardNumber)
    }

    static setCardCVC(cardNumber: string) {
        cy.get('[data-qa="cvc"]').type(cardNumber)
    }

    static setCardExpireDate(month: string, year: string) {
        cy.get('[data-qa="expiry-month"]').type(month)
        cy.get('[data-qa="expiry-year"]').type(year)
    } 

    static payAndConfirmButton() {
        cy.get('[data-qa="pay-button"]').click()
    } 
}