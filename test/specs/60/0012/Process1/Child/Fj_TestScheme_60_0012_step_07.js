const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0012-1");

export default async function suite() {
  it("Fj_TestScheme_60_0012_step_07: One 実行依頼データ submission data item of record type「4_顧客属性データ設定変更」4 _ Change customer attribute data setting has been created", async () => {
    const stepNum = "7"; // ★ 新環境適用' New Env Implementation

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
