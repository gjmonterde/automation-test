const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
import LoginPage from "../../../../../pageobjects/login.page.js";
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_50_0006_step_03: 利率 field value must be the interest rate", async () => {
    const stepNum = "3"; // ★ 新環境適用' New Env Implementation

    // Login as admin user
    await LoginPage.open();
    await LoginPage.login_as_admin();
    await browser.pause(10000);

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query_0006_03 + "'" + test_data.testData.app_name + "'"
    );

    // Take screenshot
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
