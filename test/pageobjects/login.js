/* eslint-disable no-undef */
import Page from './page';

class Login extends Page {
  //form input normal login
  get inputUsername() { return $("//input[@data-test='username']");}
  get inputPass() { return $("//input[@data-test='password']");}
  get buttonLogin() { return $("//input[@data-test='login-button']");}

  open(){
    super.open(`${browser.options.baseUrl}`);
    super.pause(3000);
  }

  verifyloginPage() {
    super.elementShouldDisplayed(this.inputUsername);
    super.elementShouldDisplayed(this.inputPass);
    super.elementShouldDisplayed(this.buttonLogin);
  }

  inputUname(username) {
    super.elementScrollInputText(this.inputUsername, username);
  }

  inputPassword(pass) {
    super.elementScrollInputText(this.inputPass, pass);
  }

  clickButtonLogin(){
    super.clickElement(this.buttonLogin);
    super.pause(3000);
  }
}

export default new Login();