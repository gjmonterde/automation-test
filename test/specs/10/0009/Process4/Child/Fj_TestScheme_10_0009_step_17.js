const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");

export default async function suite() {
  it("Fj_TestScheme_10_0009_step_17: The 申込 application status displayed on MyPage is「審査完了/各種書類ご提出」", async () => {
    const stepNum = "17"; // ★ 新環境適用' New Env Implementation

    // Go to APP list view
    await $(
      ".//span[contains(.,'" + test_data.testData.home_mypage + "')]"
    ).click();
    await browser.pause(3000);
    await $(
      "(//a[contains(text(),'" +
        test_data.testData.see_app +
        "')])[2]/parent::*"
    ).click();
    await browser.pause(5000);

    // Go to APP record
    await $(
      "//a[@title='/s/application-detail?id=" +
        test_data.testData.app_id +
        "']/parent::*"
    ).click();
    await browser.pause(10000);

    // Take screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(3000);
  });
}
