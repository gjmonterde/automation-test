const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const parent = require("../Parent/Fj_TestScheme_10_0004-1");

export default function suite() {
  it("Fj_TestScheme_10_0004_step_03: Bank examination (1) is prepared ・銀行審査Bank examination status is 「実施不要」Not Enforceable", async () => {
    const stepNum = "3"; // ★ 新環境適用' New Env Implementation

    // Screenshot variables
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Go to EXM related record
    await parent.Open_EXM_Record();

    await browser.execute("document.body.style.zoom='80%'");

    // Screenshot EXM related record
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
