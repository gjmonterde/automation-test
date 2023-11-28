const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0001-3");

export default function suite() {
  it("Fj_TestScheme_60_0001_step_40: You have not posted a welcome message in your home message. (Existing messages only)", async () => {
    const stepNum = "40"; // ★ 新環境適用' New Env Implementation

    // Login to MyPage
    await parent.Go_to_MyPage();

    // Screenshot - My Page Home page
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
