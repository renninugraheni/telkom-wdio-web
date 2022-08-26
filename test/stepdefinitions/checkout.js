import { Then, When } from "cucumber";
import Checkout from "../pageobjects/checkout";

Then(/^User redirect to checkout page$/, () => {
    Checkout.verifyCheckoutPage();
});

When(/^User input information for checkout$/, () => {
    Checkout.inputInformation('standar', 'user', '12345');
});

When(/^User click continue button$/, () => {
    Checkout.clickContinueBtn();
});
