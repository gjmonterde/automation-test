const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0009-1");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_50_0009_step_04: The 結果通知 result notification status of the 結果通知result notification is 「確認中」'Checking'.", async () => {
    const stepNum = "4"; // ★ 新環境適用' New Env Implementation

    // Login as admin
    await parent.Login_as_Admin();

    // Open dev console
    await util.Developer_Console(
      test_data.testData.query_0009_04 + "'" + test_data.testData.app_name + "'"
    );

    // Screenshot - developer console
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
