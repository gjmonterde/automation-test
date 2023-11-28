const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0015-1");

export default function suite() {
  it("Fj_TestScheme_63-2_0015_step_03: Can log in by entering your user name and password", async () => {
    const stepNum = "3"; // ★ 新環境適用' New Env Implementation

    // Go to MyPage
    await parent.Go_To_MyPage();

    // Login to MyPage
    await parent.Input_MyPage_Credentials();

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

    // Click login button
    await parent.Login_MyPage();

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
