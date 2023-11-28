const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");

export default async function suite() {
  it("Fj_TestScheme_10_0003_step_01: The 申込 application status is「審査中」Under Review", async () => {
    const stepNum = "1"; // ★ 新環境適用' New Env Implementation

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
