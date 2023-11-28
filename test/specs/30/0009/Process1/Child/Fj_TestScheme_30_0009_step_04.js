const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0009-1");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_30_0009_step_04: The snapshot item in the application has a value.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "4";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "admin") {
      // Login as Admin User
      await parent.Login_As_Admin();
    }

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query_0009_04 + test_data.testData.app_name + "'"
    );

    // Screenshot - developer console
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
