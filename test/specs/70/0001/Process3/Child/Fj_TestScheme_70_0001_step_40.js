const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0001-3");

export default async function suite() {
  it("Fj_TestScheme_70_0001_step_40: You have not posted the following welcome message in your home message:. (Existing messages only)", async () => {
    const stepNum = "40"; // ★ 新環境適用' New Env Implementation

    // Login to MyPage
    await parent.Login_To_MyPage();

    const home = user_info.userInformation.var_sf_siteurl + "/s/";
    if ((await browser.getUrl()) != home) {
      // Go to Home Page
      await browser.url(home);
      await browser.pause(10000);
    }

    // Screenshot
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
  });
}
