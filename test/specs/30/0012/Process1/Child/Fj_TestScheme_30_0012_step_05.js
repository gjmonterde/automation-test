const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0012-1");

export default function suite() {
  it("Fj_TestScheme_30_0012_step_05: The 処理  processing status of the 実行結果データ execution result data must be「自動実行待ち」 Waiting for automatic execution", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "5";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      // Login as tantou
      await parent.Login_as_tantou();
    }

    // ★ 新環境適用' New Env Implementation
    // Go to Exec Result Record
    await parent.Go_to_ExecResult();

    //Screenshot - 実行結果データ record
    const exec_highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const exec_headerBar = await $(".//header[@id='oneHeader']");
    const exec_tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [exec_headerBar, exec_tabheader, exec_highlights],
      }
    );
  });
}
