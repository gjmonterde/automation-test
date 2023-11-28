const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70"); // ★ 新環境適用' New Env Implementation
const parent = require("../Parent/Fj_TestScheme_70_0012-1");

export default async function suite() {
  it(
    "Fj_TestScheme_70_0012_step_14: One 実行依頼データ一覧 submission data item with the record type " +
      "「19_カードローン実行」19 _ Card Loan Execution has been created",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "14";

      // ★ 新環境適用' New Env Implementation
      // Login as tantou
      await parent.Login_as_tantou();

      // Go to ER related list
      await parent.Go_to_ER_list();

      // Screenshot
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
          "_" +
          test_data.testData.tab0012 +
          "_" +
          stepNum +
          "-1"
      );
    }
  );
}
