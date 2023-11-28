const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0005-2");

export default function suite() {
  it("Fj_TestScheme_30_0005_step_05: JICC照会 JICC inquiry status is「回答受信完了」", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "5";

    // ★ 新環境適用' New Env Implementation
    if (test_data.testData.logged_status != "uic") {
      // Login as Tantou1
      await parent.Login_as_Tantou1();
    }

    // Go to SEC record detail
    await parent.Open_Salesforce_EXM_SEC1_Record();

    const headerBar_sec = await $(".//header[@id='oneHeader']");
    const tabheader_sec = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_sec = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_sec, tabheader_sec, highlights_sec],
        fullPageScrollTimeout: 3000,
      }
    );

    // Go to TRR record detail screen
    await parent.Open_Salesforce_TRR_Record();

    const headerBar_trr = await $(".//header[@id='oneHeader']");
    const tabheader_trr = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_trr = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // To view the JICC照会明細(他機関) related list
    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar_trr, tabheader_trr, highlights_trr],
      }
    );
  });
}
