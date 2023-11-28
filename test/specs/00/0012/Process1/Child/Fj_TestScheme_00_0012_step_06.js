const user_info = require("../../../../../test_data/global_info");
const parent = require("../Parent/Fj_TestScheme_00_0012-1");
const test_data = require("../../../../../test_data/test_info_00"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it("Fj_TestScheme_00_0012_step_06: One 実行依頼データ submission data item of record type「4_顧客属性データ設定変更」4 _ Change customer attribute data setting has been created", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "6";

    // Direct link 実行依頼データ (Submission Data)
    await parent.Open_ER_List();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);
  });
}
