const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");

export default function suite() {
  it("Fj_TestScheme_50_0011_step_33: The application status on My Page must be「ご契約手続き」contruct procedure", async () => {
    const stepNum = "33"; // ★ 新環境適用' New Env Implementation

    await browser.refresh();
    await browser.pause(15000);

    // The application status on My Page must be「ご契約手続き」"contruct procedure".
    // 「ご契約内容確認」"Confirm contract details" button is displayed on the 申込詳細画面 application detail screen. of My Page.
    // Screenshot 申込詳細画面 Screen
    // Go to My Page Application record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await browser.pause(15000);

    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
