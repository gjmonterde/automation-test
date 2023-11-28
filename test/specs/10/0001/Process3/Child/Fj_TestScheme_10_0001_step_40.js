const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const parent = require("../Parent/Fj_TestScheme_10_0001-3");

export default function suite() {
  it("Fj_TestScheme_10_0001_step_40: A welcome message has been posted in your home message", async () => {
    const stepNum = "40"; // ★ 新環境適用' New Env Implementation

    if (
      (await browser.getUrl()) ===
      user_info.userInformation.var_sf_mypage_loginurl
    ) {
      // Login MyPage
      await parent.Login_MyPage_Full();
    }

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
