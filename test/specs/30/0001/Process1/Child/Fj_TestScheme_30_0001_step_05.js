const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0001-1");

export default async function suite() {
  it("Fj_TestScheme_30_0001_step_05: The application form will be displayed and the product name will be displayed", async () => {
    await parent.Open_ApplicationForm();

    // ★ 新環境適用' New Env Implementation
    const stepNum = "5";

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
