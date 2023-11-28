const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0006-1");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_20_0006_step_03: 利率 field value must be the interest rate", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "3";

    // Login as admin user
    await parent.Login_as_admin();

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query_0006_03 + "'" + test_data.testData.app_name + "'"
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
