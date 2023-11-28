const user_info = require("../../../../../test_data/global_info");
const parent = require("../Parent/Fj_TestScheme_00_0012-2");
const test_data = require("../../../../../test_data/test_info_00"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it("Fj_TestScheme_00_0012_step_30: The 処理ステータス processing status of the 実行結果データ execution result data must be「自動実行連携失敗」", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "30";

    // Login as tantou
    await parent.Login_as_tantou1();

    // Go to Exec Result Record
    await parent.Open_Exec_Record();

    const exec_highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const exec_headerBar = await $(".//header[@id='oneHeader']");
    const exec_tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [exec_headerBar, exec_tabheader, exec_highlights],
      }
    );
    await browser.pause(2000);
  });
}
