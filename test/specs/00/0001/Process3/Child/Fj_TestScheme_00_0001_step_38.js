const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00");

export default async function suite() {
  it("Fj_TestScheme_00_0001_step_38: Welcome message has been posted in home message", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "38";

    // Go to MyPage list view
    const home_listview = await $(
      ".//span[contains(.,'" + test_data.testData.home_mypage + "')]"
    );
    await home_listview.click();
    await browser.pause(3000);

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);
  });
}
