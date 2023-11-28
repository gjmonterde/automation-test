const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0002-1");

export default async function suite() {
  it("Fj_TestScheme_62_0002_step_11: 徴求書類 徴求書類  Requested document status is 「未提出」Not Submitted", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "11";

    // Go to RDC page
    await parent.Go_to_RDC(); // ★ 新環境適用' New Env Implementation

    // Screenshot - RDC record
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
