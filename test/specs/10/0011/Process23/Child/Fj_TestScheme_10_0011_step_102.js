const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_10_0011_step_102: The email set in メール通知(契約成立) email notification (contract formation) is sent", async () => {
    const stepNum = "102"; // ★ 新環境適用' New Env Implementation

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
    // ***NOTE: Change TimeZone based on mail timezone***
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

    // Screenshot - E-mail
    await browser.pause(3000);
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
    await browser.pause(1000);

    // Test URL
    await expect(browser).toHaveUrl(
      user_info.userInformation.var_sf_mypage_loginurl
    );

    // Go to My Page
    // ★ 新環境適用' New Env Implementation
    await util.Go_to_MyPage(
      test_data.testData.mypage_url,
      user_info.userInformation.var_sf_comminuty_loginuser2,
      user_info.userInformation.var_sf_comminuty_loginpwd2
    );

    // Screenshot - My Page Login Screen
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
