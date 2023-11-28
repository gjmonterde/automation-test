const user_info = require("../../../../../test_data/global_info.js");
const test_data = require("../../../../../test_data/test_info_70.js");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_70_0001_step_01 from "../Child/Fj_TestScheme_70_0001_step_01.js";
import Fj_TestScheme_70_0001_step_02 from "../Child/Fj_TestScheme_70_0001_step_02.js";
import Fj_TestScheme_70_0001_step_03 from "../Child/Fj_TestScheme_70_0001_step_03.js";
import Fj_TestScheme_70_0001_step_04_data from "../Child/Fj_TestScheme_70_0001_step_04_data.js";
import Fj_TestScheme_70_0001_step_04 from "../Child/Fj_TestScheme_70_0001_step_04.js";
import Fj_TestScheme_70_0001_step_06 from "../Child/Fj_TestScheme_70_0001_step_06.js";
import Fj_TestScheme_70_0001_step_08 from "../Child/Fj_TestScheme_70_0001_step_08.js";

export default async function suite() {
  describe("Fj_TestScheme_70_0001-1: Application Initial registration (申込初期登録)", () => {
    // Execute Fj_TestScheme_70_0001_step_01
    Fj_TestScheme_70_0001_step_01();

    // Execute Fj_TestScheme_70_0001_step_02
    Fj_TestScheme_70_0001_step_02();

    // Execute Fj_TestScheme_70_0001_step_03
    Fj_TestScheme_70_0001_step_03();

    // Execute Fj_TestScheme_70_0001_step_04_data
    Fj_TestScheme_70_0001_step_04_data();

    // Execute Fj_TestScheme_70_0001_step_04
    Fj_TestScheme_70_0001_step_04();

    // Execute Fj_TestScheme_70_0001_step_06
    Fj_TestScheme_70_0001_step_06();

    // Execute Fj_TestScheme_70_0001_step_08/11/12/14/16/18/20/21
    Fj_TestScheme_70_0001_step_08();
  });
}

export async function Open_Auth() {
  // Maximize browser
  await browser.maximizeWindow();

  // Go to authentication page
  await browser.url(test_data.testData.httpurl01);
  await browser.pause(10000);

  // Remove header
  await util.Remove_header(2);
  await browser.pause(5000);
}

export async function Open_ApplicationForm() {
  // Maximize browser
  await browser.maximizeWindow();

  // Go to Loan 70 application page (CLI)
  await browser.url(
    test_data.testData.httpurl02 + test_data.testData.input_key
  );
  await browser.pause(10000);

  // Remove header
  await util.Remove_header(2);
}

export async function Login_to_Salesforce() {
  if (test_data.testData.newWin == test_data.testData.isFalse) {
    await LoginPage.open();
    await browser.pause(10000);
  } else {
    // open in new window
    await browser.newWindow(user_info.userInformation.var_sf_loginurl);
    await browser.pause(10000);
  }
  // Login to org - admin
  await LoginPage.login_as_admin();
  await browser.pause(10000);

  // App Launcher-CL Originate
  await util.App_Launcher(test_data.testData.originate_app);
}
export async function Logout() {
  // Logout
  await browser.url(user_info.userInformation.var_sf_logouturl);
  await browser.pause(10000);
}
