const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_70");
const parent = require("../Parent/Fj_TestScheme_70_0012-2");

export default async function suite() {
  it(
    "Fj_TestScheme_70_0012_step_38: The 処理 processing status  of the 実行結果データexecution result data must " +
      "be 「自動実行連携失敗」Automatic execution linkage failed",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "38";

      if (test_data.testData.logged_status != "uic") {
        // Login as tantou
        await parent.Login_as_tantou();
      }

      // Go to Exec Result Record
      await parent.Go_to_ExecResult(); // ★ 新環境適用' New Env Implementation

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
      // ★ 新環境適用' New Env Implementation
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec70 +
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
