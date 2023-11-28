const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0012-1");

export default async function suite() {
  it(
    "Fj_TestScheme_50_0012_step_18: 実行依頼データSubmit data of record type「23_振込伝票」" +
      "23 _ remittance slip corresponding to the number of bank accounts 銀行口座（振込先flag＝TRUE）has been created",
    async () => {
      const stepNum = "18"; // ★ 新環境適用' New Env Implementation

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
