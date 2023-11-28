const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");

export default async function suite() {
  it("Fj_TestScheme_63-2_0010_step_26: ご提出 button will be disabled", async () => {
    const stepNum = "26"; // ★ 新環境適用' New Env Implementation

    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
