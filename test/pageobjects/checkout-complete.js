/* eslint-disable no-undef */
import Page from './page';

class CompleteCheckout extends Page {
  //header
  get pageName() { return $("//span[text()='Checkout: Complete!']");}
  get openMenu() { return $("//button[text()='Open Menu']");}
  get shoppingCart() { return $("//div[@class='shopping_cart_container']//a[1]");}

  //product cart list
  get thxText() { return $("//h2[text()='THANK YOU FOR YOUR ORDER']");}
  get subtext() { return $("//div[text()='Your order has been dispatched, and will arrive just as fast as the pony can get there!']");}
  get img() { return $("//img[@alt='Pony Express']");}
  get btnBack() { return $("//button[@data-test='back-to-products']");}

  verifyPage() {
    super.getUrl('https://www.saucedemo.com/checkout-complete.html');
    super.elementShouldDisplayed(this.pageName);
    super.elementShouldDisplayed(this.openMenu);
    super.elementShouldDisplayed(this.shoppingCart);
    super.elementShouldDisplayed(this.thxText);
    super.elementShouldDisplayed(this.subtext);
    super.elementShouldDisplayed(this.img);
    super.elementShouldDisplayed(this.btnBack);
  }
}

export default new CompleteCheckout();