const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0002-1");

export default async function suite() {
  it("Fj_TestScheme_62_0002_step_03: The 確認 verification status is 「確認中」Verifying", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "3";

    // Go to VER page
    await parent.Go_to_VER(test_data.testData.ver_id); // ★ 新環境適用' New Env Implementation

    // Screenshot - VER record
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
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
        fullPageScrollTimeout: 3000,
      }
    );
  });
}
