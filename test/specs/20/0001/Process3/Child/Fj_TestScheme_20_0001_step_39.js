const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0001-3");

export default function suite() {
  it("Fj_TestScheme_20_0001_step_39: You have not posted the following welcome message in your home message (Existing messages only)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "39";

    if (test_data.testData.logged_status != "mypage") {
      // Login to MyPage
      await parent.Login_to_MyPage();
    }

    // Screenshot - My Page Home page
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
