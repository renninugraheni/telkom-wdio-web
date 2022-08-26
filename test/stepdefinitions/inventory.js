import { Then, When } from "cucumber";
import Inventory from "../pageobjects/inventory";

Then(/^User will redirect to inventory page$/, () => {
    Inventory.verifyInventoryPage();
});

When(/^User add 2 product to shopping cart$/, () => {
    Inventory.clickAddtocart();
});

When(/^User click shopping cart link$/, () => {
    Inventory.clickShoppingCart();
});
