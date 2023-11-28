const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0001-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_70_0001_step_45: The snapshot entry in the application has a value", async () => {
    const stepNum = "45"; // ★ 新環境適用' New Env Implementation

    // Login to org
    await parent.Login_as_admin();

    // Open dev console
    await util.Developer_Console(
      test_data.testData.query_0001_45 + "'" + test_data.testData.app_name + "'"
    );

    // Screenshot - developer console
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );

    // logout
    await parent.Logout();
  });
}
