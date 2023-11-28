const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0006-1");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0006_step_03: The snapshot entry in the application has a value 申込.利率(銀行審査)＝利率", async () => {
    const stepNum = "3"; // ★ 新環境適用' New Env Implementation

    // Login as admin user
    await parent.Login_as_admin();

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query_0006_03 + "'" + test_data.testData.app_name + "'"
    );

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);
  });
}
