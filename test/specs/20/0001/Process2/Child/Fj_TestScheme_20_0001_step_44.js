const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0001-2");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_20_0001_step_44: The snapshot entry in the application has a value", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "44";

    // Login as admin
    await parent.Login_as_admin();

    // Open dev console
    await util.Developer_Console(
      test_data.testData.query_0001_44 + "'" + test_data.testData.app_name + "'"
    );

    // Screenshot - developer console
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
