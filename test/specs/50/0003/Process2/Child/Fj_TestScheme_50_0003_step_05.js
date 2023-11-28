const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");
const parent = require("../Parent/Fj_TestScheme_50_0003-2");

export default async function suite() {
  it("Fj_TestScheme_50_0003_step_05: 同一人照会（CIF明細選択）Same person inquiry (CIF line selection) is created", async () => {
    const stepNum = "5"; // ★ 新環境適用' New Env Implementation

    // Go to 審査 detail page
    await parent.Open_EXM_Record();

    // Take 審査 screenshot
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      // ★ 新環境適用' New Env Implementation
      user_info.userInformation.screenshot +
        test_data.testData.spec50 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, highlights, tabheader],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
