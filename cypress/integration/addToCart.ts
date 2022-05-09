import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";


describe('Test Case 12 - Add products cart', () => {
    it('Should add 2 items to the cart and verify their prices, quantity and total price', () => {
        /*     Test Case 12: Add Products in Cart
               1. Launch browser
               2. Navigate to url 'http://automationexercise.com'
               3. Verify that home page is visible successfully
               4. Click 'Products' button
               5. Hover over first product and click 'Add to cart'
               6. Click 'Continue Shopping' button
               7. Hover over second product and click 'Add to cart'
               8. Click 'View Cart' button
               9. Verify both products are added to Cart
               10. Verify their prices, quantity and total price   */

        Home.goTo()
        Home.assertHomePageIsVisible()
        Products.goTo()
        Products.assertProductsPageIsVisible()
        Products.addToCartItemWithPosition(1)
        Products.addToCartItemWithPosition(2)
        Cart.goTo()
        Cart.assertCartPageIsVisible()
        Cart.assertItemByIndex(1).isVisible()
        Cart.assertItemByIndex(1).hasPrice(500)
        Cart.assertItemByIndex(1).hasQuantity(1)
        Cart.assertItemByIndex(1).hasTotalPrice(500)
        Cart.assertItemByIndex(2).isVisible()
        Cart.assertItemByIndex(2).hasPrice(400)
        Cart.assertItemByIndex(2).hasQuantity(1)
        Cart.assertItemByIndex(2).hasTotalPrice(400)
    })
})