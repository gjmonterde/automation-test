const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");
import LoginPage from "../../../../../pageobjects/login.page.js";

export default function suite() {
  it("Fj_TestScheme_20_0006_step_32: Check value of 融資額 field", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "32";

    // Login as admin user
    await LoginPage.open();
    await LoginPage.login_as_admin();
    await browser.pause(15000);

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query_0006_32 + "'" + test_data.testData.exs_name + "'"
    );

    // Take screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
