const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const parent = require("../Parent/Fj_TestScheme_40_0011-20");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it(
    "Fj_TestScheme_40_0011_step_94: An email with the content set in メール通知(契約同意承認待ち) " +
      "email notification (waiting for agreement approval) is sent",
    async () => {
      const stepNum = "94"; // ★ 新環境適用' New Env Implementation

      // Go to Outlook
      if (test_data.testData.user_status == 0) {
        // if existing user
        await util.Login_to_Outlook(
          user_info.userInformation.var_email_testEmailAddress,
          user_info.userInformation.var_email_testEmailPwd
        );
      } else if (test_data.testData.user_status == 1) {
        // if new user
        await util.Login_to_Outlook(
          user_info.userInformation.var_email_testEmailAddress2,
          user_info.userInformation.var_email_testEmailPwd2
        );
      }

      // Search for e-mails received
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
      await util.View_full_email("0.75");

      // Screenshot - E-mail
      await browser.saveScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec40 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-2"
      );

      // Switch window
      await browser.switchWindow(test_data.testData.mypage_url);

      // Test URL
      await expect(browser).toHaveUrl(
        user_info.userInformation.var_sf_mypage_loginurl
      );

      // Login to My Page
      await parent.Login_to_MyPage();

      // Screenshot - My Page homepage
      await $(
        "h2=" + test_data.testData.mypage_notifications_header
      ).waitForExist({ timeout: 20000 });
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec40 +
          "_" +
          test_data.testData.tab0011 +
          "_" +
          stepNum +
          "-1"
      );
    }
  );
}
