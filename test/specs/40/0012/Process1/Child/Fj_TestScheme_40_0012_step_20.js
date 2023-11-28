const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it(
    "Fj_TestScheme_40_0012_step_20: The 実行依頼データ execution submission data for the record " +
      "types other than those identified above has not been created",
    async () => {
      const stepNum = "20"; // ★ 新環境適用' New Env Implementation

      // Go to ER Related List
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
          "-1"
      );
    }
  );
}
