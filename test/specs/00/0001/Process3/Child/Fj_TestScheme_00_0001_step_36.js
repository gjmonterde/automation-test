const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");
const util = require("../../../../../pageobjects/utility.js");

export default async function suite() {
  it("Fj_TestScheme_00_0001_step_36: One email with the content set in the email notification (application acceptance) is sent per created application", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "36";

    // Login
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
    // ★ 新環境適用' New Env Implementation
    await util.Login_to_Outlook(email, pwd);

    // Convert creation date
    // ★ 新環境適用' New Env Implementation
    await util.Search_mail_by_date(test_data.testData.mail_time);

    // You must be able to change from the URL in the e-mail to the login screen of My Page.
    const link = await $(
      "a=" + user_info.userInformation.var_sf_siteurl + "/s/login"
    );
    test_data.testData.mypage_url = await link.getAttribute("href");
    await link.click();
    await browser.pause(3000);

    // Click Print
    // ★ 新環境適用' New Env Implementation
    await util.View_full_email("0.55");

    // Screenshot
    await browser.pause(10000);
    // ★ 新環境適用' New Env Implementation
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    // MyPage Login
    await browser.closeWindow();
    await browser.pause(3000);
    await browser.switchWindow(test_data.testData.mypage_url);

    // Test URL
    expect(await browser.getUrl()).toHaveText(
      user_info.userInformation.var_sf_mypage_loginurl
    );

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
