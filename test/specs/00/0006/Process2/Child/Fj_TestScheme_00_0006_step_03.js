const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0006-2"); // ★ 新環境適用' New Env Implementation
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_00_0006_step_03: The snapshot entry in the application has a value 申込.利率(銀行審査)＝利率", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "3";

    if (test_data.testData.logged_status != "admin") {
      // Login as admin user
      await parent.Login_as_admin();
    }

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query_0006_03 + "'" + test_data.testData.app_name + "'"
    );

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);
  });
}
