const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0007-1");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-2_0007_step_02: The snapshot entry in the application has a value 融資額(プライシング)＝融資額, 期間(プライシング)＝期間, 利率(プライシング)＝利率", async () => {
    const stepNum = "2"; // ★ 新環境適用' New Env Implementation

    // Login to org as Admin for querying
    await parent.Login_As_Admin();

    // Go to Salesforce Developer Console
    // Make sure to login as admin
    await util.Developer_Console(
      test_data.testData.query_0007_02 + "'" + test_data.testData.app_name + "'"
    );

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);
  });
}
