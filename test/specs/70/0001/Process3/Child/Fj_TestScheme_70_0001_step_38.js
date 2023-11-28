const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it(
    "Fj_TestScheme_70_0001_step_38: One email with the content set in「メール通知(申込受付)」 the email " +
      "notification (application acceptance) is sent per created application",
    async () => {
      const stepNum = "38"; // ★ 新環境適用' New Env Implementation

      // Go to Outlook
      await util.Login_to_Outlook(
        user_info.userInformation.var_email_testEmailAddress,
        user_info.userInformation.var_email_testEmailPwd
      );

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
      await util.View_full_email("0.57");

      // Screenshot - E-mail
      await browser.saveScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0001 +
          "_" +
          stepNum +
          "-1"
      );

      // Switch window
      await browser.switchWindow(test_data.testData.mypage_url);

      // Test URL
      await expect(browser).toHaveUrl(
        user_info.userInformation.var_sf_mypage_loginurl
      );

      // Screenshot - MyPage Login
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0001 +
          "_" +
          stepNum +
          "-2"
      );
    }
  );
}
