const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import Fj_TestScheme_20_0001_step_05 from "../Child/Fj_TestScheme_20_0001_step_05.js";
import Fj_TestScheme_20_0001_step_06 from "../Child/Fj_TestScheme_20_0001_step_06.js";
import Fj_TestScheme_20_0001_step_07 from "../Child/Fj_TestScheme_20_0001_step_07.js";

export default async function suite() {
  describe("Fj_TestScheme_20_0001-1: Application Initial registration (申込初期登録)", () => {
    // Execute Open Application form
    Open_ApplicationForm();

    // Execute Fj_TestScheme_20_0001_step_05
    Fj_TestScheme_20_0001_step_05();

    // Execute Fj_TestScheme_20_0001_step_06
    Fj_TestScheme_20_0001_step_06();

    // Execute Fj_TestScheme_20_0001_step_07/11/12/14/16//18/20/21 - Application record creation
    Fj_TestScheme_20_0001_step_07();
  });
}

async function Open_ApplicationForm() {
  it("Open application form", async () => {
    // Maximize browser
    await browser.maximizeWindow();

    // Go to Loan 10 application page
    await Go_to_app_form();
  });
}

export async function Go_to_app_form() {
  // Go to application record page
  await browser.url(test_data.testData.httpurl01);
  await browser.pause(15000);
  await browser.switchWindow(test_data.testData.httpurl01);

  // Remove header
  await util.Remove_header(2);
  await browser.pause(5000);
}
