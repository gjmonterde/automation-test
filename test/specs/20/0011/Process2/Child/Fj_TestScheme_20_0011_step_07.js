const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0011-2");

export default function suite() {
  it("Fj_TestScheme_20_0011_step_07: The 申込 application status displayed on My Page must be 「ご融資条件ご確定」Finalized Loan Terms", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "7";

    if (test_data.testData.logged_status != "mypage") {
      // Login to MyPage
      await parent.Login_to_MyPage();
    }

    // Go to My Page Application record screen
    await browser.url(
      user_info.userInformation.var_sf_siteurl +
        "/s/application-detail?id=" +
        test_data.testData.app_id
    );
    await browser.pause(10000);

    // The 申込 application status displayed on My Page must be 「ご融資条件ご確定」"Finalized Loan Terms".
    // The 「お借入内容調整」"Reconcile Borrowings" button must be displayed.
    // Screenshot - My Page 申込詳細画面 screen
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
