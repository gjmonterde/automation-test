const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0007-1");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_00_0007_step_02: The snapshot entry in the 申込 application has a value", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "2";

    // Login as admin user
    await parent.Login_as_admin();

    // Go to Salesforce Developer Console
    await util.Developer_Console(
      test_data.testData.query_0007_02 + test_data.testData.app_name + "'"
    );

    // Screenshot - developer console
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
