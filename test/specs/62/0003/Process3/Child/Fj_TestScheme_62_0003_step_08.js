const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0003-3");

export default async function suite() {
  it("Fj_TestScheme_62_0003_step_08: The一致チェック結果一覧 Match Check Result List component is not displayed", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "8";

    // Go to DDP record detail screen
    await parent.Go_to_DDP(); // ★ 新環境適用' New Env Implementation

    // Screenshot
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
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
  });
}
