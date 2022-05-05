export class Cart {

    static goTo() {
        cy.get('.fa-shopping-cart').first().click();
    }

    static assertCartPageIsVisible() {
        cy.url().should('eq', 'https://automationexercise.com/view_cart')
    }

    static proceedToCheckout() {
        cy.get('[class*="btn btn-default check_out"]').click();
    }

    static goToLoginRegistration() {
        cy.get('[class*="modal-body"]').children('p').eq(1).click();
    }

    static assertItemByIndex(itemIndex) {
        let item = '#product-' + itemIndex;
        return {
            isVisible: () => {
                cy.get(item).should('be.visible')

            },
            hasPrice: (ItemPrice) => {
                let expectetItemPrice = 'Rs. ' + ItemPrice

                cy.get(item)
                    .find('.cart_price > p')
                    .should('have.text', expectetItemPrice)
            },
            hasTotalPrice: (ItemPrice) => {
                let expectetItemPrice = 'Rs. ' + ItemPrice
                cy.get(item)
                    .find('.cart_total_price')
                    .should('have.text', expectetItemPrice)
            },
            hasQuantity: (quantity) => {
                cy.get(item)
                    .find('.disabled')
                    .should('have.text', quantity)
            }
        }
    }

}