const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");

export default async function suite() {
  it('Fj_TestScheme_10_0005_step_12: 審査.外信照会実施不要 Examination.No Need to conduct an inquiry from a foreign exchange becomes 「実施不要」"No need to conduct"".', async () => {
    const stepNum = "12"; // ★ 新環境適用' New Env Implementation

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
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
        fullPageScrollTimeout: 6000,
      }
    );
    await browser.pause(6000);
  });
}
