const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const parent = require("../Parent/Fj_TestScheme_40_0011-23");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_40_0011_step_102: The email set in メール通知(契約成立) email notification (contract formation) is sent", async () => {
    const stepNum = "102"; // ★ 新環境適用' New Env Implementation

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

    // Wait for My Page Homepage to load
    await $(
      "h2=" + test_data.testData.mypage_notifications_header
    ).waitForExist({ timeout: 20000 });

    // Click View All Notifications
    await $(
      ".//a[@aria-label='" + test_data.testData.mypage_viewall_notif_link + "']"
    ).click();
    await browser.pause(8000);

    // Sort Table
    const tablelabel = await $(
      "span=" + test_data.testData.mypage_notif_header_lbl
    );
    var tablesort = await $(
      ".//a[contains(., '" + test_data.testData.mypage_notif_header_lbl + "')]"
    )
      .nextElement()
      .getText();
    while (tablesort != test_data.testData.app_desc) {
      await tablelabel.click();
      await browser.pause(2000);
      tablesort = await $(
        ".//a[contains(., '" +
          test_data.testData.mypage_notif_header_lbl +
          "')]"
      )
        .nextElement()
        .getText();
    }
    await expect(tablesort).toBe(test_data.testData.app_desc);

    // Screenshot - My Page Notifications list
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
  });
}
