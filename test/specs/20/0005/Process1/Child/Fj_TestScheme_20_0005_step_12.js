const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_20");
const util = require("../../../../../pageobjects/utility.js");

export default function suite() {
  it("Fj_TestScheme_20_0005_step_12: Check initial processing - No need to conduct 外信照会 (External Credit Inquiries)", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "12";

    await browser.execute("document.body.style.zoom='80%'");

    // ★ 新環境適用' New Env Implementation
    // Scroll to SEC related list
    await util.Scroll_to_related_list(test_data.testData.sec_header);

    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec20 +
        "_" +
        test_data.testData.tab0005 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
