/* eslint-disable no-undef */
import Page from './page';

class Cart extends Page {
  //header
  get pageName() { return $("//span[text()='Your Cart']");}
  get openMenu() { return $("//button[text()='Open Menu']");}
  get shoppingCart() { return $("//div[@class='shopping_cart_container']//a[1]");}

  //product cart list
  get backpackProduct() { return $("//div[text()='Sauce Labs Backpack']");}
  get backpackRemove() { return $("//button[@data-test='remove-sauce-labs-backpack']");}
  get bikelightProduct() { return $("//div[text()='Sauce Labs Bike Light']");}
  get bikelightRemove() { return $("//button[@data-test='remove-sauce-labs-bike-light']");}
  get btnContinueShopping() { return $("//button[@data-test='continue-shopping']");}
  get btnCheckout() { return $("//button[@data-test='checkout']");}

  verifyCartPage() {
    super.getUrl('https://www.saucedemo.com/cart.html');
    super.elementShouldDisplayed(this.pageName);
    super.elementShouldDisplayed(this.openMenu);
    super.elementShouldDisplayed(this.shoppingCart);
    super.elementShouldDisplayed(this.backpackProduct);
    super.elementShouldDisplayed(this.backpackRemove);
    super.elementShouldDisplayed(this.bikelightProduct);
    super.elementShouldDisplayed(this.bikelightRemove);
    super.elementShouldDisplayed(this.btnContinueShopping);
    super.elementShouldDisplayed(this.btnCheckout);
  }

  clickCheckout() {
    super.clickElement(this.btnCheckout);
    super.pause(3000);
  }
}

export default new Cart();