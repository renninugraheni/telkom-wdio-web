import { Given, When } from "cucumber";
import Login from "../pageobjects/login";

Given(/^a web browser is in sauce lab login page$/, () => {
    Login.open();
    Login.verifyloginPage();
});

When(/^User can input username '([^"]*)'$/, (username) => {
    Login.inputUname(username);
});

When(/^User can input password '([^"]*)'$/, (pass) => {
    Login.inputPassword(pass);
});

When(/^User click button login$/, () => {
    Login.clickButtonLogin();
});
