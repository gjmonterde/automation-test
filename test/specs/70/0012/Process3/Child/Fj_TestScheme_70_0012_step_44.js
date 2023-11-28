const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0012-3");

export default async function suite() {
  it("Fj_TestScheme_70_0012_step_44: The 申込 application status displayed on My Page must be「完了」 Completed", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "44";

    if (test_data.testData.logged_status != "mypage") {
      // Login to MyPage
      await parent.Login_to_MyPage();
    }

    // Go to My Page Application record screen
    await parent.Go_to_APP(); // ★ 新環境適用' New Env Implementation

    // Open detail btn
    const btn = await $(
      ".//button[@title='" + test_data.testData.mypage_app_detail_btn + "']"
    );
    await btn.waitForClickable({ timeout: 30000 });
    await btn.click();
    await browser.pause(10000);

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
