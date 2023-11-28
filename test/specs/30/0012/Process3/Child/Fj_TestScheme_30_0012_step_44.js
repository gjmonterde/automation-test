const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_30_0012_step_44: An email with the content set in the メール通知(融資完了) email notification (loan completion) is sent・You must be able to change from the URL in the e-mail to the login screen of My Page", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "44";

    // Login to Outlook
    await util.Login_to_Outlook(
      user_info.userInformation.var_email_testEmailAddress,
      user_info.userInformation.var_email_testEmailPwd
    );

    // Search email
    await util.Search_mail_by_date(test_data.testData.mail_time);

    // An email with the content set in メール通知(融資完了) email notification (loan completion) is sent.
    // Screenshot - E-mail
    await $(
      "a=" + user_info.userInformation.var_sf_siteurl + "/s/login"
    ).waitForExist({ timeout: 30000 });
    const link = await $(
      "a=" + user_info.userInformation.var_sf_siteurl + "/s/login"
    );
    test_data.testData.mypage_url = await link.getAttribute("href");
    await link.click();
    await browser.pause(5000);

    // Click Print
    await util.View_full_email("0.55");
    await browser.pause(5000);

    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);

    // You must be able to change from the URL in the e-mail to the login screen of My Page.
    await browser.closeWindow();
    await browser.pause(5000);
    await browser.switchWindow(test_data.testData.mypage_url);
    await browser.pause(1000);

    // Screenshot - My Page Login Screen
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
