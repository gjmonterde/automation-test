const user_info = require("../../../../../test_data/global_info");
const parent = require("../Parent/Fj_TestScheme_00_0012-1");
const test_data = require("../../../../../test_data/test_info_00"); // ★ 新環境適用' New Env Implementation

export default async function suite() {
  it("Fj_TestScheme_00_0012_step_24: No 実行依頼データ submission data with 「19_カードローン実行」record type 19_Card Loan Execution and 実行依頼 execution amount BLANK has been created", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "24";

    // Direct link 実行依頼データ (Submission Data)
    await parent.Open_ER_List();

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-1"
    );
    await browser.pause(2000);

    // Get ER 19
    await parent.Get_ER_Record(test_data.testData.er_19_rectype); // ★ 新環境適用' New Env Implementation

    // Go to Exec Request Record
    await parent.Open_ER_Record(test_data.testData.er_id); // ★ 新環境適用' New Env Implementation

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
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0012 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
