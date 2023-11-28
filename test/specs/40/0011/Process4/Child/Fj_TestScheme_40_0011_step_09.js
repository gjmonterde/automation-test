const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");

export default function suite() {
  it("Fj_TestScheme_40_0011_step_09: 振込先一覧 remittance list is displayed", async () => {
    const stepNum = "9"; // ★ 新環境適用' New Env Implementation

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec40 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
