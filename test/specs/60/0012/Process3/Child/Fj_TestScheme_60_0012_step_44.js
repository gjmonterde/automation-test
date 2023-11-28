const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_60_0012_step_44: An email with the content set in メール通知(融資完了) email notification (loan completion) is sent・You must be able to change from the URL in the e-mail to the login screen of My Page.", async () => {
    const stepNum = "44"; // ★ 新環境適用' New Env Implementation

    // Go to Outlook
    await util.Login_to_Outlook(
      user_info.userInformation.var_email_testEmailAddress,
      user_info.userInformation.var_email_testEmailPwd
    );

    // Convert creation date
    await util.Search_mail_by_date(test_data.testData.mail_completion_time);

    // An email with the content set in メール通知(融資完了) email notification (loan completion) is sent.
    // Screenshot - E-mail
    await browser.pause(5000);
    const link = await $(
      "a=" + user_info.userInformation.var_sf_siteurl + "/s/login"
    );
    const url = await link.getAttribute("href");
    await link.click();

    // View full E-mail
    await util.View_full_email("0.75");

    await browser.pause(5000);
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);

    // You must be able to change from the URL in the e-mail to the login screen of My Page.
    await browser.switchWindow(url);
    await browser.pause(10000);

    // Screenshot - My Page Login Screen
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
