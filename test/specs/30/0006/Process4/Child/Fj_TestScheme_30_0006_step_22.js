const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0006-4");

export default function suite() {
  it("Fj_TestScheme_30_0006_step_22: Check aggregate values of 合計 section", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "22";

    // Go to TRR record detail screen
    await parent.Open_Salesforce_TRR_Record();

    const headerBar_trr = await $(".//header[@id='oneHeader']");
    const tabheader_trr = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights_trr = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar_trr, tabheader_trr, highlights_trr],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
