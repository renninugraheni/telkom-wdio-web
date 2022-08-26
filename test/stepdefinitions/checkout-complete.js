import { Then, When } from "cucumber";
import CompleteCheckout from "../pageobjects/checkout-complete";

Then(/^User will redirect to complete checkout page$/, () => {
    CompleteCheckout.verifyPage();
});
