const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0002-8");

export default async function suite() {
  it("Fj_TestScheme_62_0002_step_24: The 確認 verification status is changed to 「書類確認完了」Document Verification Complete", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "24";

    // Go to VER record detail screen
    await parent.Go_to_VER();

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
        test_data.testData.spec62 +
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
