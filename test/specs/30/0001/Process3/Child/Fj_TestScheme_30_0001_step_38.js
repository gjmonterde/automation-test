const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it(
    "Fj_TestScheme_30_0001_step_38: One email with the content set in「メール通知(申込受付)」 " +
      "the email notification (application acceptance) is sent per created application",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "38";

      // Go to Outlook
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
      await browser.saveScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec30 +
          "_" +
          test_data.testData.tab0001 +
          "_" +
          stepNum +
          "-1"
      );

      // Switch window
      await browser.closeWindow();
      await browser.pause(3000);
      await browser.switchWindow(test_data.testData.mypage_url);

      // Test URL
      await expect(browser).toHaveUrl(
        user_info.userInformation.var_sf_mypage_loginurl
      );

      // Screenshot - My Page Login Screen
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec30 +
          "_" +
          test_data.testData.tab0001 +
          "_" +
          stepNum +
          "-2"
      );
    }
  );
}
