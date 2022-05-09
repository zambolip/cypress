import { Home } from "./pages/Home";
import { Products } from "./pages/Products";


describe('Test Case 9 - Search Product', () => {
    it('Should search a product and land in search results page', () => {
        /*      Test Case 9: Search Product
                1. Launch browser
                2. Navigate to url 'http://automationexercise.com'
                3. Verify that home page is visible successfully
                4. Click on 'Products' button
                5. Verify user is navigated to ALL PRODUCTS page successfully
                6. Enter product name in search input and click search button
                7. Verify 'SEARCHED PRODUCTS' is visible
                8. Verify all the products related to search are visible   */

        Home.goTo()
        Home.assertHomePageIsVisible()
        Products.goTo()
        Products.assertProductsPageIsVisible()
        Products.search('Madame')
        Products.assertSearchResultContains('Madame')
    })
})