const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_20_0001_step_05: The application form will be displayed and the product name will be displayed", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "5";

    // Verify URL
    await expect(browser).toHaveUrl(test_data.testData.httpurl01);
    await browser.pause(3000);

    // Remove header
    await util.Remove_header(2);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
