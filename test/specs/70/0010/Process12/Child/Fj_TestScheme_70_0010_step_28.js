const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");

export default async function suite() {
  it("Fj_TestScheme_70_0010_step_28: ご提出 button will be disabled", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "28";

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
