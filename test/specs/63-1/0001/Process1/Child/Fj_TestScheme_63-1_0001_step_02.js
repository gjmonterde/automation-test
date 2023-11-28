const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0001-1");

export default async function suite() {
  it("Fj_TestScheme_63-1_0001_step_02: Application form -「同意する」button - go to confirmation screen", async () => {
    const stepNum = "2"; // ★ 新環境適用' New Env Implementation

    // Set valid values for submitting
    await parent.Authentication_Form_Fillout();

    // Click 同意する button
    const button_submit = await $(
      ".//button[@type='" + test_data.testData.submit_btn + "']"
    );
    await button_submit.scrollIntoView();
    await button_submit.waitForClickable({
      timeout: 30000,
    });
    await button_submit.click();
    await browser.pause(1000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);

    // Press back button
    await $(
      ".//input[@value='" + test_data.testData.back_btn + "']"
    ).scrollIntoView();
    await $(".//input[@value='" + test_data.testData.back_btn + "']").click();
    await browser.pause(1000);
  });
}
