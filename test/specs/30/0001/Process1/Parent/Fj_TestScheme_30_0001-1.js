const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");
import Fj_TestScheme_30_0001_step_05 from "../Child/Fj_TestScheme_30_0001_step_05.js";
import Fj_TestScheme_30_0001_step_06 from "../Child/Fj_TestScheme_30_0001_step_06.js";
import Fj_TestScheme_30_0001_step_07 from "../Child/Fj_TestScheme_30_0001_step_07.js";

export default async function suite() {
  describe("Fj_TestScheme_30_0001-1: Application Initial registration (申込初期登録)", () => {
    // Execute Fj_TestScheme_30_0001_step_05
    Fj_TestScheme_30_0001_step_05();

    // Execute Fj_TestScheme_30_0001_step_06
    Fj_TestScheme_30_0001_step_06();

    // Execute Fj_TestScheme_30_0001_step_07/11/12/15/16/20/21 - Application Record Creation
    Fj_TestScheme_30_0001_step_07();
  });
}

export async function Open_ApplicationForm() {
  // Maximize browser
  await browser.maximizeWindow();

  // Go to Loan 30 application page
  await browser.url(test_data.testData.httpurl01);
  await browser.pause(10000);

  // ★ 新環境適用' New Env Implementation
  // Scroll to top
  await util.Application_form_scroll_top();

  // Remove header
  await util.Remove_header(2);
  await browser.pause(5000);
}
