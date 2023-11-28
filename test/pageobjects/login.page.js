/**
 * sub page containing specific selectors and methods for a specific page
 */
import Page from "./page.js";
const user_info = require("../test_data/global_info");
const util = require("./utility");

class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#username");
  }

  get inputPassword() {
    return $("#password");
  }

  get btnSubmit() {
    return $("#Login");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login_as_admin() {
    await this.inputUsername.setValue(
      user_info.userInformation.var_sf_loginuser_admin
    );
    await this.inputPassword.setValue(
      user_info.userInformation.var_sf_loginpwd_admin
    );
    await this.btnSubmit.click();

    await browser.pause(10000);

    await util.set_user_display_density();
  }

  async login_as_user_in_charge() {
    await this.inputUsername.setValue(
      user_info.userInformation.var_sf_loginuser_user_in_charge
    );
    await this.inputPassword.setValue(
      user_info.userInformation.var_sf_loginpwd_user_in_charge
    );
    await this.btnSubmit.click();

    await browser.pause(10000);

    await util.set_user_display_density();
  }

  async login_as_auditor() {
    await this.inputUsername.setValue(
      user_info.userInformation.var_sf_loginuser_auditor
    );
    await this.inputPassword.setValue(
      user_info.userInformation.var_sf_loginpwd_auditor
    );
    await this.btnSubmit.click();

    await browser.pause(10000);

    await util.set_user_display_density();
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("login");
  }
}

export default new LoginPage();
