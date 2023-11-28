const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_50_0001_step_05: The application form will be displayed and the product name will be displayed", async () => {
    const stepNum = "5"; // ★ 新環境適用' New Env Implementation

    // Verify URL
    await expect(browser).toHaveUrl(test_data.testData.httpurl03);
    await browser.pause(3000);

    // Remove header
    await util.Remove_header(2);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
