const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_00"); // ★ 新環境適用' New Env Implementation
const parent = require("../Parent/Fj_TestScheme_00_0010-1");

export default function suite() {
  it("Fj_TestScheme_00_0010_step_03: All 徴求書類 required document status  must be「未提出」", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "3";

    // Go to VER record detail screen
    await parent.Open_VER_Record();

    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    ); // ★ 新環境適用' New Env Implementation
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    ); // ★ 新環境適用' New Env Implementation

    // Screenshot
    // ★ 新環境適用' New Env Implementation
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec00 +
        "_" +
        test_data.testData.tab0010 +
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
