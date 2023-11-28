const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it(
    "Fj_TestScheme_20_0001_step_37: One email with the content set in「メール通知(申込受付)」 " +
      "the email notification (application acceptance) is sent per created application",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "37";

      // Login to Outlook
      await util.Login_to_Outlook(
        user_info.userInformation.var_email_testEmailAddress,
        user_info.userInformation.var_email_testEmailPwd
      );

      // Search for e-mails received
      await util.Search_mail_by_app(
        test_data.testData.app_name,
        test_data.testData.mail_time
      );

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
      await util.View_full_email("0.55");

      // Screenshot - E-mail
      await browser.pause(3000);
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec20 +
          "_" +
          test_data.testData.tab0001 +
          "_" +
          stepNum +
          "-1"
      );

      // Refresh
      await browser.refresh();
      await browser.pause(10000);

      // Search for e-mails received
      await util.Search_mail_by_app(
        test_data.testData.app2_name,
        test_data.testData.mail_time2
      );

      // Click Print
      await util.View_full_email("0.55");

      // Screenshot - E-mail2
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec20 +
          "_" +
          test_data.testData.tab0001 +
          "_" +
          stepNum +
          "-2"
      );

      // Switch window
      await browser.closeWindow();
      await browser.pause(5000);
      await browser.switchWindow(test_data.testData.mypage_url);

      // Test URL
      await expect(browser).toHaveUrl(
        user_info.userInformation.var_sf_mypage_loginurl
      );

      // Screenshot - My Page Login Screen
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec20 +
          "_" +
          test_data.testData.tab0001 +
          "_" +
          stepNum +
          "-3"
      );
    }
  );
}
