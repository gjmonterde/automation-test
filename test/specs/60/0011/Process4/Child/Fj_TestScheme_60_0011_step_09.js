const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0011-4");

export default function suite() {
  it("Fj_TestScheme_60_0011_step_09: The 返済用銀行口座 repayment bank account is not listed.", async () => {
    const stepNum = "9"; // ★ 新環境適用' New Env Implementation

    // Go to My Page Application record screen
    await parent.Open_MyPage_APP_Record();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
