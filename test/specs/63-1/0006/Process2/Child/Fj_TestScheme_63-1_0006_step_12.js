const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_63-1");
const parent = require("../Parent/Fj_TestScheme_63-1_0006-2");

export default function suite() {
  it("Fj_TestScheme_63-1_0006_step_12: Check borrowing detail aggregate values for 今回 current, 申告 Notice, 当行 our bank, JICC, KSC, and 追加 are displayed", async () => {
    const stepNum = "12"; // ★ 新環境適用' New Env Implementation

    // Open TRR record
    await parent.Open_TRR_Record();

    // Screenshot
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec63_1 +
        "_" +
        test_data.testData.tab0006 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
        fullPageScrollTimeout: 3000,
      }
    );
    await browser.pause(2000);
  });
}
