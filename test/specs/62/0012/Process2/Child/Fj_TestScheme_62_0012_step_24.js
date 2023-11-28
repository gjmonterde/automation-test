const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0012-2");

export default async function suite() {
  it(
    "Fj_TestScheme_62_0012_step_24: The 処理 processing status  of the 実行結果データexecution result data must " +
      "be 「自動実行連携失敗」Automatic execution linkage failed",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "24";

      // ★ 新環境適用' New Env Implementation
      if (test_data.testData.logged_status != "uic") {
        // Login as tantou
        await parent.Login_as_tantou();
      }
      // Go to Exec Result Record
      await parent.Go_to_Exec_Result();

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
      await browser.saveFullPageScreen(
        user_info.userInformation.screenshot +
          test_data.testData.spec62 +
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
