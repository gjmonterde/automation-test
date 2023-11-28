const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0015-1");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-2_0015_step_04: Passwords can be reset and re-setting", async () => {
    const stepNum = "4"; // ★ 新環境適用' New Env Implementation

    // Go to MyPage
    await parent.Go_To_MyPage();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0015 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);

    // Forgot password MyPage
    await parent.ForgotPassword_MyPage();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0015 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(2000);

    // Input email
    const email = await $(
      "//input[@class='inputBox input uiInput uiInputText uiInput--default uiInput--input']"
    );
    await email.scrollIntoView();
    await email.doubleClick();
    await browser.pause(1000);
    await email.setValue(user_info.userInformation.var_sf_comminuty_loginuser3);
    await browser.pause(1000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0015 +
        "_" +
        stepNum +
        "-3"
    );
    await browser.pause(2000);

    // Click send an email button
    await $("//button[@type='" + test_data.testData.m_login + "']").click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0015 +
        "_" +
        stepNum +
        "-4"
    );
    await browser.pause(2000);

    // Login to Outlook Email
    await parent.Login_To_Outlook();

    // Search for email password reset
    await parent.Search_Email();

    // Click Print
    await util.View_full_email("100%");

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0015 +
        "_" +
        stepNum +
        "-5"
    );
    await browser.pause(5000);

    // Login as admin in salesforce org
    await parent.Login_As_Admin();

    // Query Salesforce record to fetch account name
    await parent.Query_Salesforce_Records();

    // Go to manage user page
    await util.Users_Page();

    // Click on the user name
    const username = await $(
      ".//a[contains(text(), '" + test_data.testData.account_name + "')]"
    );
    await username.click();
    await browser.pause(5000);

    // Switch frame
    const form_frame = await browser.$(
      ".//iframe[@title='ユーザ: " +
        test_data.testData.account_name +
        " ~ Salesforce - Enterprise Edition']"
    );
    await browser.switchToFrame(form_frame);
    await browser.pause(5000);

    // Click reset password button
    const reset_password_btn = await $(
      ".//input[@title='" + test_data.testData.reset_password_btn + "']"
    );
    await reset_password_btn.waitForClickable({ timeout: 20000 });
    await reset_password_btn.click();
    await browser.pause(3000);
    await browser.acceptAlert();
    await browser.pause(2000);

    // Login to Outlook Email
    await browser.pause(50000);
    await browser.url(user_info.userInformation.var_outlook_url);
    await browser.pause(10000);

    // Search for email password reset
    await parent.Search_Email();

    // Click on the link
    const link = await $(
      ".//a[contains(text(), '" +
        user_info.userInformation.var_sf_mypage_forgot_password_outlook_url +
        "')]"
    );
    await link.click();
    await browser.pause(20000);

    // Switch to password reset window
    await browser.switchWindow("パスワードを変更する | ローン申請マイページ");
    await browser.pause(5000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0015 +
        "_" +
        stepNum +
        "-6"
    );
    await browser.pause(2000);

    // Password reset inputs
    await parent.Change_Password();

    // Deselect inputs
    await browser.keys(["Escape"]);
    await browser.pause(1000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0015 +
        "_" +
        stepNum +
        "-7"
    );
    await browser.pause(2000);

    // Click new password button
    await $(
      "//button[@name='" + test_data.testData.new_password_save_btn + "']"
    ).click();
    await browser.pause(15000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0015 +
        "_" +
        stepNum +
        "-8"
    );
    await browser.pause(2000);
  });
}
