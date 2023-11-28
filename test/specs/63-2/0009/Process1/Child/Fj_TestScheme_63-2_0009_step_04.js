const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0009-1");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-2_0009_step_04: The snapshot item in the application has a value", async () => {
    const stepNum = "4"; // ★ 新環境適用' New Env Implementation

    // Login to org as Admin for querying
    await parent.Login_As_Admin();

    // Go to Salesforce Developer Console
    // Make sure to login as admin
    await util.Developer_Console(
      test_data.testData.query_0009_04 + "'" + test_data.testData.app_name + "'"
    );

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);
  });
}
