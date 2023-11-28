const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");

export default function suite() {
  it("Fj_TestScheme_63-2_0015_step_05: The 姓名 full name of the logged in user is displayed", async () => {
    const stepNum = "5"; // ★ 新環境適用' New Env Implementation

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
  });
}
