export class Confirmation {

    static assertOrderHasBeenCreated() {
        cy.getByDataQa('order-placed').should('be.visible')
    }
}