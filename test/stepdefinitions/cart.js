import { Then, When } from "cucumber";
import Cart from "../pageobjects/cart";

Then(/^User will redirect to cart page$/, () => {
    Cart.verifyCartPage();
});

When(/^User click checkout button$/, () => {
    Cart.clickCheckout();
});
