const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00"); // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0011_step_57: The お申込みステータス application status displayed on My Page must be　「キャンセル」 Cancel", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "57";

    // ★ 新環境適用' New Env Implementation
    // Screenshot
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
