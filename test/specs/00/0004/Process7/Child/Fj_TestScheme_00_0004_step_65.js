const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");

export default function suite() {
  it("Fj_TestScheme_00_0004_step_65: Theお申込みステータス application status of My Page is キャンセル Cancel", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "65";

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
