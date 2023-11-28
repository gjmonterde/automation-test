const user_info = require("../../../../../test_data/global_info");
const test_data = require("../../../../../test_data/test_info_60");
const parent = require("../Parent/Fj_TestScheme_60_0005-2");

export default function suite() {
  it("Fj_TestScheme_60_0005_step_04: 外信照会 External Credit inquiry status is 外信照会失敗", async () => {
    const stepNum = "4"; // ★ 新環境適用' New Env Implementation

    // Login as Tantou1
    await parent.Login_as_Tantou1();

    // Go to SEC record detail
    await parent.Open_Salesforce_EXM_SEC1_Record();

    const headerBar = await $(".//header[@id='oneHeader']");
    const tabheader = await $(
      ".//div[@class='slds-no-print oneAppNavContainer']"
    );
    const highlights = await $(
      ".//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']"
    );

    // Take screenshot
    await browser.saveFullPageScreen(
      user_info.userInformation.screenshot +
        test_data.testData.spec60 +
        "_" +
        test_data.testData.tab0005 +
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
