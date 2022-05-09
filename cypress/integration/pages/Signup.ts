export class Signup {

    static assertIsSignupPage() {
        cy.url().should('eq', 'https://automationexercise.com/signup')
    }

    static setField(field: string, value: string) {
        let fields: any = {
            firstName: '[data-qa="first_name"]',
            newPassword: '[data-qa="password"]',
            lastName: '[data-qa="last_name"]',
            address: '[data-qa="address"]',
            state: '[data-qa="state"]',
            city: '[data-qa="city"]',
            zipCode: '[data-qa="zipcode"]',
            mobileNumber: '[data-qa="mobile_number"]'

        }
        cy.get(fields[field]).type(value)
    }

    static createAccount() {
        cy.get('[data-qa="create-account"]').click()
    }

    static assertAccountIsCreated() {
        cy.get('[data-qa="account-created"]').should('be.visible')
    }

    static continueAfterSignup() {
        cy.get('[data-qa="continue-button"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
    }
}

