/* eslint-disable no-undef */
import Page from './page';

class Checkout extends Page {
  //header
  get pageName() { return $("//span[text()='Checkout: Your Information']");}
  get openMenu() { return $("//button[text()='Open Menu']");}
  get shoppingCart() { return $("//div[@class='shopping_cart_container']//a[1]");}

  //input information
  get inputFirstname() { return $("//input[@data-test='firstName']");}
  get inputLastname() { return $("//input[@data-test='lastName']");}
  get inputPostalcode() { return $("//input[@data-test='postalCode']");}
  get btnCancel() { return $("//button[@data-test='cancel']");}
  get btnContinue() { return $("//input[@data-test='continue']");}

  verifyCheckoutPage() {
    super.getUrl('https://www.saucedemo.com/checkout-step-one.html');
    super.elementShouldDisplayed(this.pageName);
    super.elementShouldDisplayed(this.openMenu);
    super.elementShouldDisplayed(this.shoppingCart);
    super.elementShouldDisplayed(this.inputFirstname);
    super.elementShouldDisplayed(this.inputLastname);
    super.elementShouldDisplayed(this.inputPostalcode);
    super.elementShouldDisplayed(this.btnCancel);
    super.elementShouldDisplayed(this.btnContinue);
  }

  inputInformation(firstName, lastName, postalCode) {
    super.elementScrollInputText(this.inputFirstname, firstName);
    super.elementScrollInputText(this.inputLastname, lastName);
    super.elementScrollInputText(this.inputPostalcode, postalCode);
  }

  clickContinueBtn() {
    super.clickElement(this.btnContinue);
    super.pause(3000);
  }
}

export default new Checkout();