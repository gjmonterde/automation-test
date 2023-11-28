const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const parent = require("../Parent/Fj_TestScheme_10_0001-1");

export default async function suite() {
  it("Fj_TestScheme_10_0001_step_04: The application form will be displayed and the product name will be displayed", async () => {
    const stepNum = "4";

    // Maximize browser
    await browser.maximizeWindow();

    // Go to Loan 10 application page (CLI)
    await browser.url(
      test_data.testData.httpurl02 + test_data.testData.input_key
    );
    await browser.pause(10000);

    // Remove Header
    await parent.Remove_Header_Form();

    // Screenshot - 同意 Step
    await browser.pause(5000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
