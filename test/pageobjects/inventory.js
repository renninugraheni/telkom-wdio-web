/* eslint-disable no-undef */
import Page from './page';

class Inventory extends Page {
  //header
  get pageName() { return $("//span[text()='Products']");}
  get sort() { return $("//select[@data-test='product_sort_container']");}
  get shoppingCart() { return $("//div[@class='shopping_cart_container']//a[1]");}

  //product list
  get backpackProduct() { return $("//div[text()='Sauce Labs Backpack']");}
  get backpackAddtocart() { return $("//button[@data-test='add-to-cart-sauce-labs-backpack']");}
  get bikelightProduct() { return $("//div[text()='Sauce Labs Bike Light']");}
  get bikelightAddtocart() { return $("//button[@data-test='add-to-cart-sauce-labs-bike-light']");}

  verifyInventoryPage() {
    super.getUrl('https://www.saucedemo.com/inventory.html');
    super.elementShouldDisplayed(this.pageName);
    super.elementShouldDisplayed(this.sort);
    super.elementShouldDisplayed(this.shoppingCart);
    super.elementShouldDisplayed(this.backpackProduct);
    super.elementShouldDisplayed(this.backpackAddtocart);
    super.elementShouldDisplayed(this.bikelightProduct);
    super.elementShouldDisplayed(this.bikelightAddtocart);
  }

  clickAddtocart() {
    super.clickElement(this.backpackAddtocart);
    super.clickElement(this.bikelightAddtocart);
  }

  clickShoppingCart(pass) {
    super.clickElement(this.shoppingCart);
    super.pause(3000);
  }
}

export default new Inventory();