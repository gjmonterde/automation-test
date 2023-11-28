const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0001-3");

export default function suite() {
  it("Fj_TestScheme_30_0001_step_40: You have not posted a welcome message in your home message. (Existing messages only)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "40";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "mypage") {
      // Login to MyPage
      await parent.Login_to_MyPage();
    }

    // Go to My Page homepage
    await browser.url(user_info.userInformation.var_sf_siteurl);
    await browser.pause(15000);

    // Screenshot - My Page Home page
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
