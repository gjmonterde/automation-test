const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0003-1");

export default async function suite() {
  it("Fj_TestScheme_30_0003_step_01: The 申込 application status is 「審査中」Under Examination", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "1";

    // ★ 新環境適用' New Env Implementation
    // Go to My Page Application record screen
    await parent.Go_to_APP();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1"
    );
  });
}
