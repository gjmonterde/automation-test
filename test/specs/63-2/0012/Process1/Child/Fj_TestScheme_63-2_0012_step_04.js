const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-2");
const parent = require("../Parent/Fj_TestScheme_63-2_0012-1");

export default async function suite() {
  it("Fj_TestScheme_63-2_0012_step_04: The 処理 processing status of the 実行結果データ execution result data is「伝票出力」", async () => {
    const stepNum = "4"; // ★ 新環境適用' New Env Implementation

    // Go to Exec Result Record
    await parent.Open_Record_URL(
      1,
      user_info.object.execresult_obj,
      test_data.testData.exec_result_id
    );

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
        test_data.testData.spec63_2 +
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
