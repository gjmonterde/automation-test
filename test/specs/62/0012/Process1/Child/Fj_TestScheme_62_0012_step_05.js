const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0012-1");

export default async function suite() {
  it(
    "Fj_TestScheme_62_0012_step_05: The 処理 processing status of the 実行結果データ execution " +
      "result data must be 「自動実行待ち」Waiting for automatic execution",
    async () => {
      // ★ 新環境適用' New Env Implementation
      const stepNum = "5";

      // ★ 新環境適用' New Env Implementation
      if (test_data.testData.logged_status != "uic") {
        // Login to org - tantou1
        await parent.Login_as_tantou();
      }

      // Go to Exec Result Record
      await parent.Go_to_Exec_Result();

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
