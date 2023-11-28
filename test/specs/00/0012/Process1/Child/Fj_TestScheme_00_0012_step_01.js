const user_info = require("../../../../../test_data/global_info");
const parent = require("../Parent/Fj_TestScheme_00_0012-1");
const test_data = require("../../../../../test_data/test_info_00"); // ★ 新環境適用' New Env Implementation

export default function suite() {
  it("Fj_TestScheme_00_0012_step_01: One 実行結果データ execution result data linked to the 申込 application has been created", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "1";

    // Go to Exec Result Record
    await parent.Open_Exec_Record();

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
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );

    // ★ 新環境適用' New Env Implementation
    // Open Execution Request Related list
    await parent.Open_ER_List();

    // ★ 新環境適用' New Env Implementation
    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2"
    );
  });
}
