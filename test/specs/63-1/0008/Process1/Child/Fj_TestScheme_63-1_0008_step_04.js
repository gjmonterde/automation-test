const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0008-1");
const util = require("../../../../../pageobjects/utility");

export default function suite() {
  it("Fj_TestScheme_63-1_0008_step_04: The 反社照会 anti-social inquiry status on 反社照会画面 anti-social Inquiry Screen =「実施待ち」", async () => {
    const stepNum = "4"; // ★ 新環境適用' New Env Implementation

    // Go to CNT Record
    await parent.Open_CNT_Record();

    // The 反社照会 anti-social inquiry status on 反社照会画面 anti-social Inquiry Screen =「実施待ち」
    await util.Scroll_to_related_list(test_data.testData.asc_header);

    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0008 +
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
