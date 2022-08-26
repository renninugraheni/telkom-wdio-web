/* eslint-disable no-undef */
import Page from './page';

class Cart extends Page {
  //header
  get pageName() { return $("//span[text()='Checkout: Overview']");}
  get openMenu() { return $("//button[text()='Open Menu']");}
  get shoppingCart() { return $("//div[@class='shopping_cart_container']//a[1]");}

  //product cart list
  get backpackProduct() { return $("//div[text()='Sauce Labs Backpack']");}
  get backpackPrice() { return $("//div[text()='29.99']");}
  get bikelightProduct() { return $("//div[text()='Sauce Labs Bike Light']");}
  get bikelightPrice() { return $("//div[text()='9.99']");}
  get paymentInformation() { return $("(//div[@class='summary_value_label'])[1]");}
  get shippingInformation() { return $("//div[text()='FREE PONY EXPRESS DELIVERY!']");}
  get subtotalInformation() { return $("//div[text()='Item total: $']");}
  get taxInformation() { return $("//div[text()='Tax: $']");}
  get totalInformation() { return $("//div[text()='Total: $']");}
  get btnCancel() { return $("//button[@data-test='cancel']");}
  get btnFinish() { return $("//button[@data-test='finish']");}

  verifyOverviewPage() {
    super.getUrl('https://www.saucedemo.com/checkout-step-two.html');
    super.elementShouldDisplayed(this.pageName);
    super.elementShouldDisplayed(this.openMenu);
    super.elementShouldDisplayed(this.shoppingCart);
    super.elementShouldDisplayed(this.backpackProduct);
    super.elementShouldDisplayed(this.backpackPrice);
    super.elementShouldDisplayed(this.bikelightProduct);
    super.elementShouldDisplayed(this.bikelightPrice);
    super.elementShouldDisplayed(this.paymentInformation);
    super.elementShouldDisplayed(this.shippingInformation);
    super.elementShouldDisplayed(this.subtotalInformation);
    super.elementShouldHaveText(this.subtotalInformation, "Item total: $39.98");
    super.elementShouldDisplayed(this.taxInformation);
    super.elementShouldHaveText(this.taxInformation, "Tax: $3.20");
    super.elementShouldDisplayed(this.totalInformation);
    super.elementShouldHaveText(this.totalInformation, "Total: $43.18");
    super.elementShouldDisplayed(this.btnCancel);
    super.elementShouldDisplayed(this.btnFinish);
  }

  clickFinish() {
    super.clickElement(this.btnFinish);
    super.pause(3000);
  }
}

export default new Cart();