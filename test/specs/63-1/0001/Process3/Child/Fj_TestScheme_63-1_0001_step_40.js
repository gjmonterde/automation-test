const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0001-3");

export default async function suite() {
  it("Fj_TestScheme_63-1_0001_step_40: Welcome message has been posted in home message", async () => {
    const stepNum = "40"; // ★ 新環境適用' New Env Implementation

    if (test_data.testData.logged_status != "mypage") {
      // Login MyPage
      await parent.Login_MyPage();
    }
    // Go to MyPage list view
    const home_listview = await $(
      ".//span[contains(.,'" + test_data.testData.home_mypage + "')]"
    );
    await home_listview.click();
    await browser.pause(3000);

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0001 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);
  });
}
