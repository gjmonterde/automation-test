const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0006-1");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_62_0006_step_03: The snapshot entry in the 申込 application has a value: 申込.利率(銀行審査)＝利率", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "3";

    // Login as admin
    await parent.Login_as_Admin();

    // Open dev console
    await util.Developer_Console(
      test_data.testData.query_0006_03 + "'" + test_data.testData.app_name + "'"
    );

    // Screenshot - developer console
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1"
    );

    // Logout
    await browser.url(user_info.userInformation.var_sf_logouturl);
    await browser.pause(2000);
  });
}
