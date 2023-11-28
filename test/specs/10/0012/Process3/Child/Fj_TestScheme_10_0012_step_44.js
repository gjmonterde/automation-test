const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_10_0012_step_44: An email with the content set in メール通知(融資完了) email notification (loan completion) is sent・You must be able to change from the URL in the e-mail to the login screen of My Page.", async () => {
    const stepNum = "44"; // ★ 新環境適用' New Env Implementation

    // Login
    if (test_data.testData.user_status == 0) {
      // Email and password - Existing user (to be used for PG)
      await util.Login_to_Outlook(
        user_info.userInformation.var_email_testEmailAddress,
        user_info.userInformation.var_email_testEmailPwd
      );
    } else if (test_data.testData.user_status == 1) {
      // Email and password - New user (to be used for testing)
      await util.Login_to_Outlook(
        user_info.userInformation.var_email_testEmailAddress2,
        user_info.userInformation.var_email_testEmailPwd2
      );
    }

    // Search creation date
    await util.Search_mail_by_date(test_data.testData.mail_time);

    // An email with the content set in メール通知(融資完了) email notification (loan completion) is sent.
    // Screenshot - E-mail
    await browser.pause(5000);
    const link = await $(
      "a=" + user_info.userInformation.var_sf_siteurl + "/s/login"
    );
    test_data.testData.mypage_url = await link.getAttribute("href");
    await link.click();
    await browser.pause(5000);

    // Print
    await util.View_full_email("0.75");

    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);
    await browser.closeWindow();

    // You must be able to change from the URL in the e-mail to the login screen of My Page.
    await browser.pause(5000);
    await browser.switchWindow(test_data.testData.mypage_url);
    await browser.pause(10000);
  });
}
