const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0011-12");

export default function suite() {
  it("Fj_TestScheme_30_0011_step_57: The お申込み application status on My Page must be 「ご融資条件ご確定」Finalized Loan Terms", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "57";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "mypage") {
      // Login to MyPage
      await parent.Login_to_MyPage();
    }

    // Assign value to mypage_url
    test_data.testData.mypage_url =
      user_info.userInformation.var_sf_siteurl +
      "/s/application-detail?id=" +
      test_data.testData.app_id;

    // Go to MyPage App record page
    await browser.url(test_data.testData.mypage_url);
    await $("span=" + test_data.testData.app_name).waitForExist({
      timeout: 30000,
    });

    // Screenshot - My Page App record page
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
