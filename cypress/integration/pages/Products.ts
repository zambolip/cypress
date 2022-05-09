export class Products {

    static goTo() {
        cy.get('a[href="/products"]').click()
    }

    static assertProductsPageIsVisible() {
        cy.url().should('eq', 'https://automationexercise.com/products')
    }

    static search(element: string) {
        cy.get('.fa-home').scrollIntoView()
        cy.get('#search_product').type(element)
        cy.get('#submit_search').click()
        cy.url().should('eq', 'https://automationexercise.com/products?search=' + element)
    }

    static assertSearchResultContains(element: string) {
        cy.get('.features_items').should('be.visible');
        cy.get('.productinfo').should('be.visible');
        cy.get('.productinfo').contains(element);
    }

    static addToCartItemWithPosition(position: number) {
        let index = position * 2 - 2
        cy.get('[class*="btn btn-default add-to-cart"]').eq(index).invoke('show')
        cy.get('[class*="btn btn-default add-to-cart"]').eq(index).click();
        cy.get('[class*="btn btn-success close-modal btn-block"]').click();
    }
}