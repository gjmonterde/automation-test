const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0009-4");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_50_0009_step_16: The application information is displayed in the 審査結果  Review Results section.", async () => {
    const stepNum = "16"; // ★ 新環境適用' New Env Implementation

    // Login to MyPage
    await parent.Login_To_MyPage();

    await $(
      ".//span[contains(.,'" + test_data.testData.home_mypage + "')]"
    ).click();
    await browser.pause(5000);

    await $(
      "(//a[contains(text(),'" +
        test_data.testData.see_app +
        "')])[2]/parent::*"
    ).click();
    await browser.pause(5000);

    await $(
      "//a[@title='/s/application-detail?id=" +
        test_data.testData.app_id +
        "']/parent::*"
    ).click();
    await browser.pause(10000);

    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(5000);

    // Login as admin
    await parent.Login_As_Admin();

    // Open dev console
    await util.Developer_Console(
      test_data.testData.query_0009_16 + "'" + test_data.testData.app_name + "'"
    );

    // Screenshot - developer console
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0009 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
