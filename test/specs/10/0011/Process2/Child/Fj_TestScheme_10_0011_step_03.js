const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_10_0011_step_03: The mail set in メール通知(条件確認) mail notification (condition check) is sent", async () => {
    const stepNum = "3"; // ★ 新環境適用' New Env Implementation

    // Login to Outlook
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

    // Search mail
    await util.Search_mail_by_date(test_data.testData.mail_time);

    // You must be able to change from the URL in the e-mail to the login screen of My Page.
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
    await util.View_full_email("0.75");

    // Screenshot
    await browser.pause(5000);
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // Switch to My Page
    await browser.closeWindow();
    await browser.pause(3000);
    await browser.switchWindow(test_data.testData.mypage_url);

    // Test URL
    await expect(browser).toHaveUrl(
      user_info.userInformation.var_sf_mypage_loginurl
    );
  });
}