const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_63-1_0009_step_14: The e-mail with the content set in メール通知(審査結果(応諾))the e-mail notification (examination result (compliance)) is sent", async () => {
    const stepNum = "14"; // ★ 新環境適用' New Env Implementation

    // Login to Outlook Email
    await util.Login_to_Outlook(
      user_info.userInformation.var_email_testEmailAddress,
      user_info.userInformation.var_email_testEmailPwd
    );

    // Convert creation date
    // ***NOTE: Change TimeZone based on mail timezone***
    await util.Search_mail_by_date(test_data.testData.mail_time);

    // You must be able to change from the URL in the e-mail to the login screen of My Page.
    const link = await $(
      "a=" + user_info.userInformation.var_sf_siteurl + "/s/login"
    );
    test_data.testData.mypage_url = await link.getAttribute("href");
    await link.click();
    await browser.pause(3000);

    // Click Print
    await util.View_full_email("100%");

    // Screenshot
    await browser.pause(10000);
    await browser.saveScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    // MyPage Login
    await browser.switchWindow(test_data.testData.mypage_url);

    // Test URL
    expect(await browser.getUrl()).toHaveText(
      user_info.userInformation.var_sf_mypage_loginurl
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(2000);
  });
}
