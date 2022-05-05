export class Confirmation {

    static assertOrderHasBeenCreated() {
        cy.get('[data-qa="order-placed"]').should('be.visible')
    }

}