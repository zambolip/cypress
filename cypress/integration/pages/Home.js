export class Home {

    static goTo() {
        cy.visit('http://automationexercise.com')
    }

    static assertHomePageIsVisible() {
        cy.get('.fa-home').should('be.visible');
        cy.get('[data-ride="carousel"]', { timeout: 10000 }).should('be.visible');
    }

    static assertUserIsLoggedIn() {
        cy.get('.fa-user').should('be.visible');
    }

    static deleteAccount() {
        cy.get('.fa-trash-o').click();
    }
}