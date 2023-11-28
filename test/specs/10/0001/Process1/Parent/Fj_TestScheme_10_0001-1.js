const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility");
import LoginPage from "../../../../../pageobjects/login.page.js";
import Fj_TestScheme_10_0001_step_03 from "../Child/Fj_TestScheme_10_0001_step_03.js";
import Fj_TestScheme_10_0001_step_04 from "../Child/Fj_TestScheme_10_0001_step_04.js";
import Fj_TestScheme_10_0001_step_06 from "../Child/Fj_TestScheme_10_0001_step_06.js";
import Fj_TestScheme_10_0001_step_07 from "../Child/Fj_TestScheme_10_0001_step_07.js";
import Fj_TestScheme_10_0001_step_04_data from "../Child/Fj_TestScheme_10_0001_step_04_data.js";

// ★ 新環境適用' New Env Implementation
export default async function suite() {
  describe("Fj_TestScheme_10_0001-1: Application Initial registration (申込初期登録)", () => {
    // Execute Fj_TestScheme_10_0001_step_03
    Fj_TestScheme_10_0001_step_03();

    /**
     * NOTE: If external linkage is not available, execute this script to create data.
     *       Else, comment out this line.
     */
    Fj_TestScheme_10_0001_step_04_data();

    // Execute Fj_TestScheme_10_0001_step_04
    Fj_TestScheme_10_0001_step_04();

    // Execute Open Application form
    // Note: Don't execute if running Fj_TestScheme_10_0001_step_03 or Fj_TestScheme_10_0001_step_04 only
    Open_ApplicationForm();

    // Execute Fj_TestScheme_10_0001_step_06
    Fj_TestScheme_10_0001_step_06();

    // Execute Fj_TestScheme_10_0001_step_07 - Application Record Creation
    Fj_TestScheme_10_0001_step_07();
  });
}

async function Open_ApplicationForm() {
  it("Open application form", async () => {
    // Maximize browser
    await browser.maximizeWindow();

    // Go to Loan 10 application page
    await browser.url(test_data.testData.httpurl03);
    await browser.pause(5000);

    // Remove header
    await Remove_Header();
  });
}

export async function Remove_Header() {
  // Remove header
  await util.Remove_header(1);
}

export async function Remove_Header_Form() {
  // Remove header
  await util.Remove_header(2);
}

export async function Login_as_Admin() {
  // Login to org - admin
  await LoginPage.login_as_admin();
  await browser.pause(10000);
}
