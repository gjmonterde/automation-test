const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_40");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it(
    "Fj_TestScheme_40_0012_step_24: The 処理 processing status  of the 実行結果データ execution result data must " +
      "be「自動実行連携失敗」Automatic execution linkage failed",
    async () => {
      const stepNum = "24"; // ★ 新環境適用' New Env Implementation

      // Go to Exec Result Record
      await util.Open_SF_Record_URL(
        1,
        user_info.object.execresult_obj,
        test_data.testData.exec_result_id
      );

      // Quit script if status is not the expected value (自動実行連携失敗)
      expect(test_data.testData.exec_result_processing_status_actual).toBe(
        test_data.testData.exec_result_processing_status_expected
      );
      if (
        test_data.testData.exec_result_processing_status_actual !=
        test_data.testData.exec_result_processing_status_expected
      ) {
        await browser.deleteSession();
      }

      // Screenshot
      const highlights = await $(
        ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
      );
      const headerBar = await $(".//header[@id='oneHeader']");
      const tabheader = await $(
        ".//div[@class='slds-no-print oneAppNavContainer']"
      );
      await browser.pause(10000);
      await browser.saveFullPageScreen(
        // ★ 新環境適用' New Env Implementation
        user_info.userInformation.screenshot +
          test_data.testData.spec40 +
          "_" +
          test_data.testData.tab0012 +
          "_" +
          stepNum +
          "-1",
        {
          hideAfterFirstScroll: [headerBar, tabheader, highlights],
        }
      );
    }
  );
}
