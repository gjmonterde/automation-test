const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_30");
const parent = require("../Parent/Fj_TestScheme_30_0010-1");

export default function suite() {
  it("Fj_TestScheme_30_0010_step_03: All 徴求書類requested document  statuses must be 「未提出」'Not Submitted'.", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "3";

    // ★ 新環境適用' New Env Implementation
    // Go to VER record detail screen
    await parent.Go_to_VER();

    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Take screenshot of 30-1-(15)_0010_3-1
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec30 +
        "_" +
        test_data.testData.tab0010 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
