const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0001-1");

export default async function suite() {
  it("Fj_TestScheme_63-1_0001_step_01: The application form input details must be displayed", async () => {
    const stepNum = "1"; // ★ 新環境適用' New Env Implementation

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);

    // Open Accordion 注意事項
    await $(
      ".//a[contains(., '" + test_data.testData.accordion1 + "')]"
    ).scrollIntoView({
      block: "center",
    });
    await browser.pause(2000);
    await $(
      ".//a[contains(., '" + test_data.testData.accordion1 + "')]"
    ).click();
    await browser.pause(2000);

    // Remove header
    await parent.Remove_Header_Auth();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(2000);

    // Go to Loan 63 application page
    await browser.url(test_data.testData.httpurl01);
    await browser.pause(5000);

    // Click 同意する button
    const button_submit = await $(
      ".//button[@type='" + test_data.testData.submit_btn + "']"
    );
    await button_submit.scrollIntoView();
    await button_submit.waitForClickable({
      timeout: 30000,
    });
    await button_submit.click();
    await browser.pause(2000);

    // Remove header
    await parent.Remove_Header();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(2000);

    // Set invalid values for error checking
    await $("#loan_app_account_name_last").setValue(
      test_data.testData.error_loan_app_account_name_last
    );
    await $("#loan_app_account_name_first").setValue(
      test_data.testData.error_loan_app_account_name_first
    );
    await $("#loan_app_birth").setValue(
      test_data.testData.error_loan_app_birth
    );
    await $("#loan_app_account_number").setValue(
      test_data.testData.error_loan_app_account_number
    );
    await $("#loan_app_pinword").setValue(
      test_data.testData.error_loan_app_pinword
    );
    await browser.pause(2000);

    // Click 同意する button
    await button_submit.scrollIntoView();
    await button_submit.waitForClickable({
      timeout: 30000,
    });
    await button_submit.click();
    await browser.pause(1000);

    // Remove header
    await parent.Remove_Header_Auth();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-4"
    );
    await browser.pause(1000);

    // Refresh
    await browser.refresh();
    await browser.pause(3000);

    // Set valid values for submitting
    await parent.Authentication_Form_Fillout();

    // Remove header
    await parent.Remove_Header_Auth();

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-5"
    );
  });
}
