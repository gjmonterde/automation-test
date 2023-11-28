const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0002-1");

export default function suite() {
  it("Fj_TestScheme_60_0002_step_09: All files uploaded from the application form must be registered in the request form", async () => {
    const stepNum = "9"; // ★ 新環境適用' New Env Implementation

    // Go to RDC record detail screen
    await parent.Open_RDC_Record();

    const rdc_headerBar = $(".//header[@id='oneHeader']");
    const rdc_tabheader = $(
      ".//div[@class='tabsetHeader slds-context-bar slds-context-bar--tabs slds-no-print']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [rdc_headerBar, rdc_tabheader, highlights],
      }
    );
    await browser.pause(5000);
  });
}
