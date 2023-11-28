const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0012-1");

export default async function suite() {
  it(
    "Fj_TestScheme_50_0012_step_07: One 実行依頼データsubmission data item of record type 「4_顧客属性データ設定変更」" +
      "4 _ Change customer attribute data setting has been created",
    async () => {
      const stepNum = "7"; // ★ 新環境適用' New Env Implementation

      // Direct link 実行依頼データ (Submission Data)
      await parent.Open_Exec_Rel();

      // Screenshot
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec50 +
          "_" +
          test_data.testData.tab0012 +
          "_" +
          stepNum +
          "-1"
      );
    }
  );
}
