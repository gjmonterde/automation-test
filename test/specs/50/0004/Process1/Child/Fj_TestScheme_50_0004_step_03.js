const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_50");

export default async function suite() {
  it("Fj_TestScheme_50_0004_step_03: 銀行審査 Bank examination status is 「実施不要」Not Enforceable.", async () => {
    const stepNum = "3"; // ★ 新環境適用' New Env Implementation

    await browser.execute("document.body.style.zoom='80%'");

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
        test_data.testData.tab0004 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
        fullPageScrollTimeout: 6000,
      }
    );
  });
}
