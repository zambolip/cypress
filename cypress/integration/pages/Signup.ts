export class Signup {

    static assertIsSignupPage() {
        cy.url().should('eq', 'https://automationexercise.com/signup')
    }

    static setField(field: Signup.FieldId, value: string) {

        cy.getByDataQa(field).type(value)
    }

    static createAccount() {
        cy.getByDataQa('create-account').click()
    }

    static assertAccountIsCreated() {
        cy.getByDataQa('account-created').should('be.visible')
    }

    static continueAfterSignup() {
        cy.getByDataQa('continue-button').should('be.visible')
        cy.getByDataQa('continue-button').click()
    }
}

export namespace Signup {
    export enum FieldId {
        firstName = 'first_name',
        newPassword = 'password',
        lastName = 'last_name',
        address = 'address',
        state = 'state',
        city = 'city',
        zipCode = 'zipcode',
        mobileNumber = 'mobile_number'
    }
}