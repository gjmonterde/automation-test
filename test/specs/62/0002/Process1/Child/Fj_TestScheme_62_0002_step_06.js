const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_62");
const parent = require("../Parent/Fj_TestScheme_62_0002-1");

export default async function suite() {
  it("Fj_TestScheme_62_0002_step_06: 「徴求書類」Documents to be requested shall be prepared", async () => {
    // ★ 新環境適用' New Env Implementation
    const stepNum = "6";

    // Go to VER page
    await parent.Go_to_VER(test_data.testData.ver_id2); // ★ 新環境適用' New Env Implementation

    // Screenshot - VER record
    const highlights1 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar1 = await $(".//header[@id='oneHeader']");
    const tabheader1 = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec62 +
        "_" +
        test_data.testData.tab0002 +
        "_" +
        stepNum +
        "-2",
      {
        hideAfterFirstScroll: [headerBar1, tabheader1, highlights1],
        fullPageScrollTimeout: 3000,
      }
    );

    // Go to PRO page
    await parent.Go_to_PRO(); // ★ 新環境適用' New Env Implementation

    // Screenshot - PRO record
    const highlights2 = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar2 = await $(".//header[@id='oneHeader']");
    const tabheader2 = await $(
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
        hideAfterFirstScroll: [headerBar2, tabheader2, highlights2],
      }
    );
  });
}
