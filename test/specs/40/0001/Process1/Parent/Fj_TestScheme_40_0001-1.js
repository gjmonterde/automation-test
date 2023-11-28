const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_40_0001_step_01 from "../Child/Fj_TestScheme_40_0001_step_01.js";
import Fj_TestScheme_40_0001_step_02 from "../Child/Fj_TestScheme_40_0001_step_02.js";
import Fj_TestScheme_40_0001_step_03 from "../Child/Fj_TestScheme_40_0001_step_03.js";
import Fj_TestScheme_40_0001_step_04 from "../Child/Fj_TestScheme_40_0001_step_04.js";
import Fj_TestScheme_40_0001_step_06 from "../Child/Fj_TestScheme_40_0001_step_06.js";
import Fj_TestScheme_40_0001_step_08 from "../Child/Fj_TestScheme_40_0001_step_08.js";
import Fj_TestScheme_40_0001_step_04_data from "../Child/Fj_TestScheme_40_0001_step_04_data.js";

export default async function suite() {
  describe("Fj_TestScheme_40_0001-1: Application Initial registration (申込初期登録)", () => {
    // Execute Fj_TestScheme_40_0001_step_01
    Fj_TestScheme_40_0001_step_01();

    // Execute Fj_TestScheme_40_0001_step_02
    Fj_TestScheme_40_0001_step_02();

    // Execute Fj_TestScheme_40_0001_step_03
    Fj_TestScheme_40_0001_step_03();

    // Execute Fj_TestScheme_40_0001_step_04_data
    // NOTE: Always run if executing step 04 ~ 21
    Fj_TestScheme_40_0001_step_04_data();

    // Execute Fj_TestScheme_40_0001_step_04
    Fj_TestScheme_40_0001_step_04();

    // Execute Fj_TestScheme_40_0001_step_06
    Fj_TestScheme_40_0001_step_06();

    // Execute Fj_TestScheme_40_0001_step_08/09/10/11/12/14/17/18/20/21
    Fj_TestScheme_40_0001_step_08();
  });
}

async function Remove_Header_Element() {
  // Remove header
  await util.Remove_header(2);
}

export async function Open_Auth() {
  // Maximize browser
  await browser.maximizeWindow();

  // Go to authentication page
  await browser.url(test_data.testData.httpurl01);
  await browser.pause(10000);

  // Remove header
  await Remove_Header_Element();
  
}

export async function Open_ApplicationForm() {
  // Maximize browser
  await browser.maximizeWindow();

  // Go to Loan 40 application page (CLI)
  await browser.url(
    test_data.testData.httpurl02 + test_data.testData.input_key
  );
  await browser.pause(10000);

  // Remove header
  await Remove_Header_Element();
}

export async function Login_to_Salesforce() {
  // Open link in new window
  await browser.newWindow(user_info.userInformation.var_sf_loginurl);
  // Login to org - admin
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}
