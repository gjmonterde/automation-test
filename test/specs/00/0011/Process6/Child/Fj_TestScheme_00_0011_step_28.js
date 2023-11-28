const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0011-6");

export default function suite() {
  it("Fj_TestScheme_00_0011_step_28: The お申込みステータス application status on My Page must be 「ご契約手続き」 Subscription", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "28";

    // Login
    await parent.Login_to_MyPage();

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
