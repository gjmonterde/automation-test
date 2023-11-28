const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
import LoginPage from "../../../../../pageobjects/login.page.js";
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_50_0007_step_02: The snapshot entry in the 申込 application has a value", async () => {
    const stepNum = "2"; // ★ 新環境適用' New Env Implementation

    // Login as admin user
    await LoginPage.open();
    await LoginPage.login_as_admin();
    await browser.pause(15000);

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query_0007_02 + test_data.testData.app_name + "'"
    );

    // Screenshot - developer console
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
