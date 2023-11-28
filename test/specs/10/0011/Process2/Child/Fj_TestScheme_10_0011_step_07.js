const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");

export default function suite() {
  it('Fj_TestScheme_10_0011_step_07: The お申込み application status displayed on My Page must be 「ご融資条件ご確定」"Finalized Loan Terms"', async () => {
    const stepNum = "7"; // ★ 新環境適用' New Env Implementation

    // Go to My Page Application record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await browser.pause(10000);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
