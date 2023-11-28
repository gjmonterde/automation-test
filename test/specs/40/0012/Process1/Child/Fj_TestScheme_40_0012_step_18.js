const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it(
    "Fj_TestScheme_40_0012_step_18: 実行依頼データ execution Submit data of record type「23_振込伝票」" +
      '"23 _ remittance slip" corresponding to the number of bank accounts 銀行口座（振込先flag＝TRUE）has been created',
    async () => {
      const stepNum = "18"; // ★ 新環境適用' New Env Implementation

      // Go to BA related list
      await util.Open_SF_Record_URL(
        2,
        user_info.object.app_obj,
        test_data.testData.app_id,
        user_info.object.app_ba_rel
      );

      // Screenshot
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec40 +
          "_" +
          test_data.testData.tab0012 +
          "_" +
          stepNum +
          "-1"
      );

      // Go to ER related list
      await util.Open_SF_Record_URL(
        2,
        user_info.object.app_obj,
        test_data.testData.app_id,
        user_info.object.app_execrequest_rel
      );

      // Screenshot
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec40 +
          "_" +
          test_data.testData.tab0012 +
          "_" +
          stepNum +
          "-2"
      );
    }
  );
}
