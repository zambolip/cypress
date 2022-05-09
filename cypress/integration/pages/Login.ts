export class Login {

    static assertIsLoginPage() {
        cy.url().should('eq', 'https://automationexercise.com/login')
    }

    static setNewRandomEmail() {
        let randomNumber = Math.random().toString().split(".").join("");
        let mail = 'test' + randomNumber + '.it@prova.com'
        cy.getByDataQa('signup-email').type(mail)
    }

    static setNewName(name: string) {
        cy.getByDataQa('signup-name').type(name)
    }

    static signup() {
        cy.getByDataQa('signup-button').click()
    }
}