const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");

export default function suite() {
  it("Fj_TestScheme_63-2_0015_step_06: Switch to the notification list screen", async () => {
    const stepNum = "6"; // ★ 新環境適用' New Env Implementation

    // Go to home page
    await $(
      ".//span[contains(.,'" + test_data.testData.home_mypage + "')]"
    ).click();
    await browser.pause(3000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0015 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);

    // Go to WNT list view
    const wnt_see_all = await $(
      "//a[@aria-label='" + test_data.testData.see_wnt + "']"
    );
    await wnt_see_all.scrollIntoView();
    await wnt_see_all.click();
    await browser.pause(5000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_2 +
        "_" +
        test_data.testData.tab0015 +
        "_" +
        stepNum +
        "-2"
    );
    await browser.pause(2000);
  });
}
