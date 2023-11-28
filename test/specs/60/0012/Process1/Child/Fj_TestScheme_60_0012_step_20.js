const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0012-1");

export default async function suite() {
  it("Fj_TestScheme_60_0012_step_20: The 実行依頼データ submission data for the record types other than those identified above has not been created", async () => {
    const stepNum = "20"; // ★ 新環境適用' New Env Implementation

    // Direct link 実行依頼データ (Submission Data)
    await parent.Open_EXEC_App_Related_Record();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);
  });
}
