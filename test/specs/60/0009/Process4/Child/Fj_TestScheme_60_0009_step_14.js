const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_60_0009_step_14: The e-mail with the content set in メール通知(審査結果(応諾)) e-mail notification (examination result (compliance)) is sent.", async () => {
    const stepNum = "14"; // ★ 新環境適用' New Env Implementation

    // Go to Outlook
    await util.Login_to_Outlook(
      user_info.userInformation.var_email_testEmailAddress,
      user_info.userInformation.var_email_testEmailPwd
    );

    // Convert creation date
    // ***NOTE: Change TimeZone based on mail timezone***
    await util.Search_mail_by_date(test_data.testData.mail_datetime);

    // You must be able to change from the URL in the e-mail to the login screen of My Page.
    const link = await $(
      "a=" + user_info.userInformation.var_sf_siteurl + "/s/login"
    );
    test_data.testData.mypage_url = await link.getAttribute("href");
    await link.click();
    await browser.pause(5000);

    // Click Print
    await util.View_full_email("0.75");

    // Screenshot - E-mail
    await browser.pause(10000);
    await browser.saveScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);

    await browser.url(user_info.userInformation.var_sf_mypage_loginurl);
    await browser.pause(5000);

    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(5000);
  });
}
