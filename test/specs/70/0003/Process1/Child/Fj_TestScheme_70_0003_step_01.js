const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");

export default async function suite() {
  it("Fj_TestScheme_70_0003_step_01: The 申込application status is 「審査中」Under Review", async () => {
    const stepNum = "1"; // ★ 新環境適用' New Env Implementation

    // Screenshot - MyPage App
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1"
    );

    // Open detail btn
    const btn = await $(
      ".//button[@title='" + test_data.testData.mypage_app_detail_btn + "']"
    );
    await btn.waitForClickable({ timeout: 30000 });
    await btn.click();
    await browser.pause(5000);

    // Screenshot - MyPage App
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec70 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
