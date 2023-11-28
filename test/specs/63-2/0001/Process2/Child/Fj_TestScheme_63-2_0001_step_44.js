const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0001-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-2_0001_step_44: The snapshot entry in the application has a value", async () => {
    const stepNum = "44"; // ★ 新環境適用' New Env Implementation

    // Login as admin user
    await parent.Login_As_Admin();

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query_0001_44 + "'" + test_data.testData.app_name + "'"
    );

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);
  });
}
