const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");

export default async function suite() {
  it("Fj_TestScheme_62_0004_step_03: Bank examination (1) is prepared", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "3";

    await browser.execute("document.body.style.zoom='80%'");

    // Screenshot - EXM record
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
