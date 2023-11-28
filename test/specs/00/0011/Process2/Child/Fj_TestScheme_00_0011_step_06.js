const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js"); // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0011_step_06: The mail set in the メール通知(条件確認) mail notification (condition check) is sent", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "6";

    var email, pwd;
    if (test_data.testData.user_status == 0) {
      // if existing user
      email = user_info.userInformation.var_email_testEmailAddress;
      pwd = user_info.userInformation.var_email_testEmailPwd;
    } else if (test_data.testData.user_status == 1) {
      // if new user
      email = user_info.userInformation.var_email_testEmailAddress2;
      pwd = user_info.userInformation.var_email_testEmailPwd2;
    }

    // Login
    await util.Login_to_Outlook(email, pwd); // ★ 新環境適用' New Env Implementation

    // Convert creation date
    await util.Search_mail_by_date(test_data.testData.mail_time); // ★ 新環境適用' New Env Implementation

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
    await util.View_full_email("0.75"); // ★ 新環境適用' New Env Implementation

    // Screenshot - E-mail
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );

    // Switch window
    await browser.closeWindow(); // ★ 新環境適用' New Env Implementation
    await browser.pause(3000); // ★ 新環境適用' New Env Implementation
    await browser.switchWindow(test_data.testData.mypage_url);

    // Test URL
    await expect(browser).toHaveUrl(
      user_info.userInformation.var_sf_mypage_loginurl
    );

    // Screenshot - MyPage Login
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
