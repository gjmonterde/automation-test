const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_60_0011_step_111: The email set in メール通知(契約成立) email notification (contract formation) is sent", async () => {
    const stepNum = "111"; // ★ 新環境適用' New Env Implementation

    // Go to Outlook
    await util.Login_to_Outlook(
      user_info.userInformation.var_email_testEmailAddress,
      user_info.userInformation.var_email_testEmailPwd
    );

    // Convert creation date
    await util.Search_mail_by_date(test_data.testData.mail_time_0011);

    // You must be able to change from the URL in the e-mail to the login screen of My Page.
    await $(
      "a=" + user_info.userInformation.var_sf_siteurl + "/s/login"
    ).waitForExist({ timeout: 30000 });
    const link = await $(
      "a=" + user_info.userInformation.var_sf_siteurl + "/s/login"
    );
    test_data.testData.mypage_url_0011 = await link.getAttribute("href");
    await link.click();
    await browser.pause(5000);

    // Click Print
    await util.View_full_email("0.75");

    // Screenshot - E-mail

    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // Switch window
    await browser.switchWindow(test_data.testData.mypage_url_0011);

    // Test URL
    await expect(browser).toHaveUrl(
      user_info.userInformation.var_sf_mypage_loginurl
    );

    // Screenshot - My Page Login Screen
    await browser.pause(10000);
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
