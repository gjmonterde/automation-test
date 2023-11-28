const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0009-1");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_62_0009_step_04: The snapshot item in the application has a value", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "4";

    // Login to org
    await parent.Login_as_admin();

    // Open dev console
    await util.Developer_Console(
      test_data.testData.query_0009_04 + "'" + test_data.testData.app_name + "'"
    );

    // Screenshot - developer console
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1"
    );

    // Logout
    await browser.url(user_info.userInformation.var_sf_logouturl);
    await browser.pause(2000);
  });
}
