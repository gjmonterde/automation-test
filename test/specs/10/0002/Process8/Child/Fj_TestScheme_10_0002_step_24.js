const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_10");
const parent = require("../Parent/Fj_TestScheme_10_0002-8");
const util = require("../../../../../pageobjects/utility");

export default async function suite() {
  it("Fj_TestScheme_10_0002_step_24: The 確認 verification status is changed to「書類確認完了」Document Verification Complete", async () => {
    const stepNum = "24"; // ★ 新環境適用' New Env Implementation

    // Go to VER record detail screen
    await parent.Go_to_VER();

    // Scroll to view - 徴求書類 related list
    await util.Scroll_to_related_list(test_data.testData.rdc_header);

    const headerBar = $(".//header[@id='oneHeader']");
    const tabheader = $(
      ".//div[@class='tabsetHeader slds-context-bar slds-context-bar--tabs slds-no-print']"
    );
    const tabs = $(
      ".//div[@class='tabBar slds-grid slds-tabs--default slds-sub-tabs']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec10 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, tabs],
      }
    );
  });
}
