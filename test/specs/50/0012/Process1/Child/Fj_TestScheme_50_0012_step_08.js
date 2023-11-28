const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0012-1");

export default async function suite() {
  it(
    "Fj_TestScheme_50_0012_step_08: One 実行依頼データ submission data item of record type 「6_証書貸付_返済条件登録」" +
      "6 _ Loan _ Repayment condition registration has been created",
    async () => {
      const stepNum = "8"; // ★ 新環境適用' New Env Implementation

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
