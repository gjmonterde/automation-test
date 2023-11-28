const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0002-1");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0002_step_03: 確認 verification status is「確認中」", async () => {
    const stepNum = "3"; // ★ 新環境適用' New Env Implementation

    // Go to VER-1 record detail screen
    await parent.Open_SF_Ver1_Record();

    // ★ 新環境適用' New Env Implementation
    // Scroll to RDC related list
    await util.Scroll_to_related_list(test_data.testData.rdc_header);

    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(2000);
  });
}
