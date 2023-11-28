const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0011-17");

export default async function suite() {
  it("Fj_TestScheme_70_0011_step_83: The 申込 application status on My Page must be 「ご融資条件ご確定」 Finalized Loan Terms", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "83";

    if (test_data.testData.logged_status != "mypage") {
      // Login to MyPage
      await parent.Login_to_MyPage();
    }

    // Go to app record
    await parent.Go_to_App_record();

    // Open detail btn
    const btn = await $(
      ".//button[@title='" + test_data.testData.mypage_app_detail_btn + "']"
    );
    await btn.waitForClickable({ timeout: 30000 });
    await btn.click();
    await browser.pause(10000);

    // Screenshot - MyPage APP record
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0011 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
