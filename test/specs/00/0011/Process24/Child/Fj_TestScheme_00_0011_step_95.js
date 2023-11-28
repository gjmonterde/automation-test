const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0011-24");

export default function suite() {
  it("Fj_TestScheme_00_0011_step_95: The お申込みステータス application status on My Page must be 「ご融資条件ご確定」Finalized Loan Terms", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "95";

    if (test_data.testData.logged_status != "mypage") {
      // Login to MyPage
      await parent.Login_to_MyPage();
    }

    // Go to My Page Application record screen
    await parent.Go_to_MyPage_APP(); // ★ 新環境適用' New Env Implementation

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
