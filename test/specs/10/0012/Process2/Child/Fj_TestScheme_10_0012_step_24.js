const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_10_0012_step_24: The 処理 processing status of the 実行結果データexecution result data must be「自動実行連携失敗」Automatic execution linkage failed", async () => {
    const stepNum = "24"; // ★ 新環境適用' New Env Implementation

    // ★ 新環境適用' New Env Implementation
    // Go to Exec Result Record
    await util.Open_SF_Record_URL(
      1,
      user_info.object.execresult_obj,
      test_data.testData.exec_result_id
    );

    // Screenshot - 実行結果データ record
    await browser.pause(5000);
    const exec_highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const exec_headerBar = await $(".//header[@id='oneHeader']");
    const exec_tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
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
