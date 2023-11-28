const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0012-1");

export default async function suite() {
  it(
    "Fj_TestScheme_50_0012_step_09: One 実行依頼データ submission data item of record type 「7_証書貸付_実行」の " +
      "7 _ Loan to Certificate _ Execution has been created",
    async () => {
      const stepNum = "9"; // ★ 新環境適用' New Env Implementation

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
