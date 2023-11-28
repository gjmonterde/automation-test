const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0003-4");

export default async function suite() {
  it("Fj_TestScheme_60_0003_step_14: 同一人照会 Same person inquiry status is 「自動OK」Auto OK", async () => {
    const stepNum = "14"; // ★ 新環境適用' New Env Implementation

    // Login to org as tantou1
    await parent.Login_As_Tantou1();

    // Go to 同一人照会 detail page
    await parent.Open_DDP_Record();

    // Take 同一人照会 screenshot
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );
    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );

    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0003 +
        "_" +
        stepNum +
        "-1",
      {
        hideAfterFirstScroll: [headerBar, tabheader, highlights],
      }
    );
    await browser.pause(3000);
  });
}
