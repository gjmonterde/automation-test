const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-2_0001_step_37: One email with the content set in「メール通知(申込受付)」is sent per created application", async () => {
    const stepNum = "37"; // ★ 新環境適用' New Env Implementation

    // Go to Outlook
    // To determine if the user is existing or new one
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

    // Search for e-mails received at creation date
    await util.Search_mail_by_app(
      test_data.testData.app_name,
      test_data.testData.mail_time
    );

    // You must be able to change from the URL in the e-mail to the login screen of My Page.
    const link = await $(
      "a=" + user_info.userInformation.var_sf_siteurl + "/s/login"
    );
    test_data.testData.mypage_url = await link.getAttribute("href");
    await link.click();
    await browser.pause(3000);

    // Click Print
    await util.View_full_email("0.58");

    // Screenshot
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    // MyPage Login
    await browser.closeWindow();
    await browser.switchWindow(test_data.testData.mypage_url);

    // Test URL
    expect(await browser.getUrl()).toHaveText(
      user_info.userInformation.var_sf_mypage_loginurl
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
