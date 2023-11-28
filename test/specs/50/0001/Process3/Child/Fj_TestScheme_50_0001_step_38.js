const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it(
    "Fj_TestScheme_50_0001_step_38: One email with the content set in「メール通知(申込受付)」 " +
      "the email notification (application acceptance) is sent per created application",
    async () => {
      const stepNum = "38"; // ★ 新環境適用' New Env Implementation

      // Go to Outlook
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

      // Convert creation date
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

      // Click Print
      await util.View_full_email("0.55");

      // Screenshot - E-mail
      await browser.pause(3000);
      await browser.saveScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec50 +
          "_" +
          test_data.testData.tab0001 +
          "_" +
          stepNum +
          "-1"
      );

      // Refresh
      await browser.refresh();
      await browser.pause(5000);
      
      // Switch window
      await browser.switchWindow(test_data.testData.mypage_url);

      // Test URL
      await expect(browser).toHaveUrl(
        user_info.userInformation.var_sf_mypage_loginurl
      );

      // Screenshot - My Page Login Screen
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec50 +
          "_" +
          test_data.testData.tab0001 +
          "_" +
          stepNum +
          "-2"
      );
    }
  );
}
