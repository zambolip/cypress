import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Cart } from "./pages/Cart";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Checkout } from "./pages/Checkout";
import { Payment } from "./pages/Payment";
import { Confirmation } from "./pages/Confirmation";


describe('Test Case 14 - Place Order: Register while Checkout', () => {
    it('Should place an order while registrating and deleting a new user', () => {
        /*    Test Case 14: Place Order: Register while Checkout
              1. Launch browser
              2. Navigate to url 'http://automationexercise.com'
              3 . Verify that home page is visible successfully
              4. Add products to cart
              5. Click 'Cart' button
              6. Verify that cart page is displayed
              7. Click Proceed To Checkout
              8. Click 'Register / Login' button
              9. Fill all details in Signup and create account
              10. Verify 'ACCOUNT CREATED!' and click 'Continue' button
              11. Verify ' Logged in as username' at top
              12. Click 'Cart' button
              13. Click 'Proceed To Checkout' button
              14. Verify Address Details and Review Your Order
              15. Enter description in comment text area and click 'Place Order'
              16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
              17. Click 'Pay and Confirm Order' button
              18. Verify success message 'Your order has been placed successfully!'
              19. Click 'Delete Account' button
              20. Verify 'ACCOUNT DELETED!' and click 'Continue' button  */

        Home.goTo()
        Home.assertHomePageIsVisible()
        Products.goTo()
        Products.assertProductsPageIsVisible()
        Products.addToCartItemWithPosition(1)
        Products.addToCartItemWithPosition(2)
        Cart.goTo()
        Cart.assertCartPageIsVisible()
        Cart.proceedToCheckout()
        Cart.goToLoginRegistration()
        Login.assertIsLoginPage()
        Login.setNewName('ciccio')
        Login.setNewRandomEmail()
        Login.signup()
        Signup.assertIsSignupPage()
        Signup.setField('newPassword', 'password')
        Signup.setField('firstName', 'pippo')
        Signup.setField('lastName', 'franco')
        Signup.setField('address', 'street')
        Signup.setField('state', 'state')
        Signup.setField('city', 'city')
        Signup.setField('zipCode', '12345')
        Signup.setField('mobileNumber', '12345678')
        Signup.createAccount()
        Signup.assertAccountIsCreated()
        Signup.continueAfterSignup()
        Home.assertUserIsLoggedIn()
        Cart.goTo()
        Cart.assertCartPageIsVisible()
        Cart.proceedToCheckout()
        Checkout.assertIsCheckoutPage()
        Checkout.assertAddressDetailsAreVisible()
        Checkout.addComment()
        Checkout.placeOrder()
        Payment.assertIsPaymentPage()
        Payment.setCardHolderName('ciccio')
        Payment.setCardNumber('4023402340234023')
        Payment.setCardCVC('123')
        Payment.setCardExpireDate('12', '2030')
        Payment.payAndConfirmButton()
        Confirmation.assertOrderHasBeenCreated()
        Home.deleteAccount()
    })
})