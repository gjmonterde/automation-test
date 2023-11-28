const test_data = require("../../../../../test_data/test_info_50");
const util = require("../../../../../pageobjects/utility");
import Fj_TestScheme_50_0001_step_05 from "../Child/Fj_TestScheme_50_0001_step_05.js";
import Fj_TestScheme_50_0001_step_06 from "../Child/Fj_TestScheme_50_0001_step_06.js";
import Fj_TestScheme_50_0001_step_07 from "../Child/Fj_TestScheme_50_0001_step_07.js";

export default async function suite() {
  describe("Fj_TestScheme_50_0001-1: Application Initial registration (申込初期登録)", () => {
    // Execute Open Application form
    Open_ApplicationForm();

    // Execute Fj_TestScheme_50_0001_step_05
    Fj_TestScheme_50_0001_step_05();

    // Execute Fj_TestScheme_50_0001_step_06
    Fj_TestScheme_50_0001_step_06();

    // Execute Fj_TestScheme_50_0001_step_07
    Fj_TestScheme_50_0001_step_07();
  });
}

async function Open_ApplicationForm() {
  it("Open application form", async () => {
    // Maximize browser
    await browser.maximizeWindow();

    // Go to Loan 50 application page
    await browser.url(test_data.testData.httpurl03);
    await browser.pause(5000);

    // Remove header
    await util.Remove_header(1);
  });
}

export async function Open_PDF() {
  // Open PDF
  await browser.switchWindow(test_data.testData.downloads_url);
  await browser.keys(["ArrowDown"]);
  await browser.keys(["Enter"]);
  await browser.pause(5000);
}
