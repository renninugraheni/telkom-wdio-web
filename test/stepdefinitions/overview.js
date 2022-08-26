import { Then, When } from "cucumber";
import Overview from "../pageobjects/overview";

Then(/^User will redirect to overview page$/, () => {
    Overview.verifyOverviewPage();
});

When(/^User click finish button$/, () => {
    Overview.clickFinish();
});

