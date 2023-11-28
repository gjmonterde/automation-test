const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const parent = require("../Parent/Fj_TestScheme_00_0001-1");

export default async function suite() {
  it("Fj_TestScheme_00_0001_step_04: An error message is displayed and the completion screen is not displayed", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "4";

    // Set valid values for submitting
    await parent.Authentication_Form_Fillout();

    // Click 同意する button
    const button_submit = await $(
      ".//button[@type='" + test_data.testData.submit_type_btn + "']"
    );
    await button_submit.scrollIntoView();
    await button_submit.waitForClickable({
      timeout: 30000,
    });
    await button_submit.click();
    await browser.pause(1000);

    // Click 上記内容で本人認証を行う button
    const confirm_submit = await $("#confirm_submit");
    await confirm_submit.scrollIntoView();
    await confirm_submit.waitForClickable({
      timeout: 30000,
    });
    await confirm_submit.click();
    await browser.pause(1000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);
  });
}
