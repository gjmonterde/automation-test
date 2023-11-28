const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0012-1");

export default function suite() {
  it("Fj_TestScheme_60_0012_step_04: The 処理 processing status of the 実行結果データ execution result data must be「伝票出力」Expense Sheet Output.", async () => {
    const stepNum = "4"; // ★ 新環境適用' New Env Implementation

    // Go to Exec Result Record
    await parent.Open_EXEC_Record();

    // Screenshot - 実行結果データ record
    const exec_highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const exec_headerBar = await $(".//header[@id='oneHeader']");
    const exec_tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [exec_headerBar, exec_tabheader, exec_highlights],
      }
    );
    await browser.pause(5000);
  });
}
