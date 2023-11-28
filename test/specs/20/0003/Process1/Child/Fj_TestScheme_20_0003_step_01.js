const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");

export default async function suite() {
  it("Fj_TestScheme_20_0003_step_01: The 申込 application status is 「審査中」Under Examination.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "1";

    // Take Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);

    // Click Expand Button
    await $(
      ".//button[@title='" + test_data.testData.mypage_app_detail_btn + "']"
    ).waitForClickable({
      timeout: 5000,
    });
    await $(
      ".//button[@title='" + test_data.testData.mypage_app_detail_btn + "']"
    ).click();

    // Take Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
