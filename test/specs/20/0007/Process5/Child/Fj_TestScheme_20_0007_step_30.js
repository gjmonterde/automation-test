const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const parent = require("../Parent/Fj_TestScheme_20_0007-5");

export default async function suite() {
  it("Fj_TestScheme_20_0007_step_30: The following item values must be set: 最終保証審査＝「保証審査②」", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "30";

    // Go to its related 保証審査 Detail Screen
    await parent.Go_to_GUA();

    // Take screenshot 保証審査 detail page
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0007 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
